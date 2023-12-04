const Service = require('./../models/ServicioModel');
class ServiceController {
    eliminarServicio(req, res){
        const serviceId = req.body;
      
        Service.findByIdAndRemove(serviceId, (error, servicioEliminado) => {
          if (error) {
            console.error('Error al eliminar el servicio:', error);
            res.status(500).json({ error: 'Error al eliminar el servicio' });
          } else {
            if (servicioEliminado) {
              res.json({ mensaje: 'Servicio eliminado con éxito' });
            } else {
              res.status(404).json({ error: 'Servicio no encontrado' });
            }
          }
        });
    }
    agregarservicio(req, res){
        const { nombreEmbresa, RFC, saldo, tipoServico, costo, correo, password } = req.body; 
        const nuevoServicio = new Servicio({ nombreEmbresa, RFC, saldo, tipoServico, costo, 
            correo, password });
      
        nuevoServicio.save((error, servicioCreado) => {
          if (error) {
            console.error('Error al agregar el servicio:', error);
            res.status(500).json({ error: 'Error al agregar el servicio' });
          } else {
            res.json(servicioCreado);
          }
        });
      }
    cobrar(req, res){
        const { clienteId, monto} = req.body; 
        Cliente.findByIdAndUpdate(clienteId, {saldo: saldo-monto}, 
          (error, clienteActualizado) => {
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
    }

    Todos(req, res){
        Cliente.find({}, (error, clientes) => {
          if (error) {
            console.error('Error al obtener los clientes:', error);
            res.status(500).json({ error: 'Error al obtener los clientes' });
          } else {
            res.json(clientes);
          }
        });
    }

    saldo(req, res){
        const serviceId = req.params.id; 
        Servicio.findById(serviceId, 'saldo', (error, service) => {
          if (error) {
            console.error('Error al consultar el servicio:', error);
            res.status(500).json({ error: 'Error al consultar el servicio' });
          } else {
            if (service) {
              res.json(service);
            } else {
              res.status(404).json({ error: 'servicio no encontrado' });
            }
          }
        });
      }

}
module.exports= new ServiceController();