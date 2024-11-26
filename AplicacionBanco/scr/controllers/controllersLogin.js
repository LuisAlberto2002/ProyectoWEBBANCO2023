require("mongoose");
require("dotenv").config();
require("crypto-js");
const jws = require("jsonwebtoken");
const userModel = require("./../models/userModel");
const key = process.env.key;
//const tokenModel=require('./../models/tokenModel');
const secret = process.env.secret;
class userControllers {
  login(req, res) {
    try {
      const email = CryptoJS.AES.decrypt(req.body.email, key).toString(
        CryptoJS.enc.Utf8
      );
      const password = CryptoJS.AES.decrypt(req.body.password, key).toString(
        CryptoJS.enc.Utf8
      );

      userModel
        .findOne({ email })
        .then((user) => {
          if (!user) {
            return res.status(404).send({ message: "Usuario no encontrado" });
          }

          const storedPassword = CryptoJS.AES.decrypt(
            user.password,
            key
          ).toString(CryptoJS.enc.Utf8);

          if (storedPassword !== password) {
            return res.status(401).send({ message: "Contraseña incorrecta" });
          }

          const token = jws.sign(
            {
              _id: user._id,
              email: user.email,
              role: user.role,
            },
            secret
          );

          res.send({
            token,
            role: user.role,
          });
        })
        .catch((err) => {
          console.error("Error: ", err);
          res.status(500).send({ message: "Error interno del servidor" });
        });
    } catch (err) {
      console.error("Error: ", err);
      res.status(500).send({ message: "Error interno del servidor" });
    }
  }

  /*tokenCreate(req,res){
        const {email}=req.body;
        const token=jws.sign({
            _id:email
        },secret);
        
        tokenModel.create({email:email,token:token}).then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send('Error: ', err);
        });
    }  */
}
module.exports = new userControllers();
