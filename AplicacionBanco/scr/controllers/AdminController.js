const userModel = require('./../models/userModel');
const Admin = require('./../models/userModel');
require('mongoose');
class AdminController {
  consultarClientePorId(req, res) {
    const rfc = req.body.rfc;
    Cliente.findById(rfc, (error, cliente) => {
      if (error) {
        console.error('Error al consultar el cliente:', error);
        res.status(500).json({ error: 'Error al consultar el cliente' });
      } else {
        if (cliente) {
          res.json(cliente);
        } else {
          res.status(404).json({ error: 'Cliente no encontrado' });
        }
      }
    });
  }
  eliminarCliente(req, res) {
    const rfc = req.body.rfc;
    Cliente.findByIdAndRemove(rfc, (error, clienteEliminado) => {
      if (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
      } else {
        if (clienteEliminado) {
          res.json({ mensaje: 'Cliente eliminado con éxito' });
        } else {
          res.status(404).json({ error: 'Cliente no encontrado' });
        }
      }
    });
  }
  agregarCliente(req, res) {
    const { name, rfc, email, password,role } = req.body;
    userModel.create({name, email, password,role,rfc}).then((response)=>{
      res.send(response);
    }).catch((err)=>{
      res.send('Error: ',err);
    })
  }

  actualizarCliente(req, res) {
    const { clienteId, nuevosDatos } = req.body;

    if (nuevosDatos && typeof nuevosDatos === 'string') {
      try {
        const actualizaciones = JSON.parse(nuevosDatos);

        Cliente.findByIdAndUpdate(clienteId, { $set: actualizaciones }, { new: true }, (error, clienteActualizado) => {
          if (error) {
            console.error('Error al actualizar el cliente:', error);
            res.status(500).json({ error: 'Error al actualizar el cliente' });
          } else {
            if (clienteActualizado) {
              res.json(clienteActualizado);
            } else {
              res.status(404).json({ error: 'Cliente no encontrado' });
            }
          }
        });
      } catch (error) {
        console.error('Error al parsear nuevosDatos:', error);
        res.status(400).json({ error: 'Formato de datos no válido' });
      }
    } else {
      res.status(400).json({ error: 'Datos no proporcionados o en formato incorrecto' });
    }
  }


}
module.exports = new AdminController();