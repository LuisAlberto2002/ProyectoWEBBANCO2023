const userModel = require('./../models/userModel');
require('dotenv').config();
const key = process.env.key;
//const cryptoJS = require("crypto-js");
require('crypto-js')
require('mongoose');
class AdminController {
  consultarClientePorId(req, res) {

    const filter = {rfc: cryptoJS.AES.decrypt(req.body.rfc, key)};
    if(!filter){
        res.status(400).send({message: 'No se ingreso ningun dato'});
    }
    userModel.find(filter).then((response)=>{
      if(!response.ok){
        res.status(400).send({message: 'No se pudo encontrar el cliente'});
      }else{
        res.send(response);
      }
    })
  }
  eliminarCliente(req, res) {
    const filter = {rfc: cryptoJS.AES.decrypt(req.body.rfc, key)};
    const update = {status:"Inactivo"};
    userModel.findOneAndUpdate(filter, update,{new:true}).then((updateUser) => {
      res.send(updateUser);
    }).catch((err)=>{
      console.error('Error actualizando el ususario',err);
    })
  }
  agregarCliente(req, res) {
    const name = CryptoJS.AES.decrypt(req.body.name,key);
    const rfc = CryptoJS.AES.decrypt(req.body.rfc,key);
    const email = CryptoJS.AES.decrypt(req.body.email,key);
    const password = CryptoJS.AES.decrypt(req.body.password,key);
    const rol = CryptoJS.AES.decrypt(req.body.rol,key);
    const status = CryptoJS.AES.decrypt(req.body.status,key);
    //const { name, rfc, email, password,rol, status } = req.body;
    //Descodificar los datos
    userModel.create({name, rfc,email, password,rol,status}).then((response)=>{
      res.send(response);
    }).catch((err)=>{
      res.send('Error: ',err);
    })
  }

  ///Modificar actualizarCliente y consultar cliente. Ya con eso tenemos el desarrollo del backend completo
  actualizarCliente(req, res) {
    const update = {password:CryptoJS.AES.decrypt(req.body.password,key)};
    const filter = {rfc: CryptoJS.AES.decrypt(req.body.rfc,key)};
    //const { password,rfc} = req.body;
    if (!filter || !update) {
      return res.status(400).send({ message: 'RFC y contraseña son requeridos' });
    }
    //const filter = {rfc: rfc};
    //const update = {password:password}
    userModel.findOneAndUpdate(filter,update,{new:true}).then((updatedUser)=>{
      res.send(updatedUser);
    }).catch((err)=>{
      res.status(500).send({ message: 'Error al actualizar el usuario', error: err.message });
    })

  }


}
module.exports = new AdminController();