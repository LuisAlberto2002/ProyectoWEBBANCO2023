const Admin = require('./../models/admin');
class AdminController {
  consultarClientePorId(req, res) {
    const clienteId = req.body.clienteId;
    Cliente.findById(clienteId, (error, cliente) => {
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
    const clienteId = req.body.clienteId;
    Cliente.findByIdAndRemove(clienteId, (error, clienteEliminado) => {
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
    const { nombre, fechaNacimiento, RFC, Servicios, email, password } = req.body;
    const nuevoCliente = new Cliente({ nombre, fechaNacimiento, RFC, Servicios, email, password });
    nuevoCliente.save((error, clienteCreado) => {
      if (error) {
        console.error('Error al agregar el cliente:', error);
        res.status(500).json({ error: 'Error al agregar el cliente' });
      } else {
        res.json(clienteCreado);
      }
    });
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