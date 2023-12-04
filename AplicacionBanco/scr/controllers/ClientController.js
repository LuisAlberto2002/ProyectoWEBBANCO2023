const Client = require('./../models/client');
class ClientController {

    saldo(req, res){
      const clienteId = req.params.id; 
      Cliente.findById(clientId, 'saldo', (error, client) => {
        if (error) {
          console.error('Error al consultar el cliente:', error);
          res.status(500).json({ error: 'Error al consultar el cliente' });
        } else {
          if (client) {
            res.json(client);
          } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
          }
        }
      });
    }

    serviciosCont(req, res){
      const clienteId = req.params.id; 
      const nuevosDatos = req.body; 
      Cliente.findByIdAndUpdate(clienteId, {servicio: servicio + nuevosDatos}, (error, clienteActualizado) => {
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

    serviciosCons(req, res){
      const clienteId = req.params.id; 
      Cliente.findById(clientId, 'servicios', (error, client) => {
        if (error) {
          console.error('Error al consultar el cliente:', error);
          res.status(500).json({ error: 'Error al consultar el cliente' });
        } else {
          if (client) {
            res.json(client);
          } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
          }
        }
      });
}
transferir(req, res) {
  const { rfcOrigen, rfcDestino, monto } = req.body;

  if (!rfcOrigen || !rfcDestino || !monto) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const montoFloat = parseFloat(monto);
  if (isNaN(montoFloat) || montoFloat <= 0) {
      return res.status(400).json({ error: 'Ingrese un monto válido' });
  }

  Client.findOne({ RFC: rfcOrigen }, (error, clienteOrigen) => {
      if (error) {
          console.error('Error al buscar el cliente de origen:', error);
          return res.status(500).json({ error: 'Error interno del servidor' });
      }

      if (!clienteOrigen) {
          return res.status(404).json({ error: 'Cliente de origen no encontrado' });
      }

      
      if (clienteOrigen.saldo < montoFloat) {
          return res.status(400).json({ error: 'Saldo insuficiente para la transferencia' });
      }

      clienteOrigen.saldo -= montoFloat;

      
      Client.findOne({ RFC: rfcDestino }, (error, clienteDestino) => {
          if (error) {
              console.error('Error al buscar el cliente de destino:', error);
              clienteOrigen.saldo += montoFloat; 
              return res.status(500).json({ error: 'Error interno del servidor' });
          }

         
          if (!clienteDestino) {
              clienteOrigen.saldo += montoFloat; 
              return res.status(404).json({ error: 'Cliente de destino no encontrado' });
          }

         
          clienteDestino.saldo += montoFloat;

        
          clienteOrigen.save((error) => {
              if (error) {
                  console.error('Error al guardar el cliente de origen:', error);
                  return res.status(500).json({ error: 'Error interno del servidor' });
              }

              clienteDestino.save((error) => {
                  if (error) {
                      console.error('Error al guardar el cliente de destino:', error);
                      clienteOrigen.saldo += montoFloat;
                      return res.status(500).json({ error: 'Error interno del servidor' });
                  }

                  return res.json({ mensaje: 'Transferencia exitosa' });
              });
          });
      });
  });
}

}


module.exports = new ClientController();