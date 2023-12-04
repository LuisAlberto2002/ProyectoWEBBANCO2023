const router=require('express').Router();
const express=require('express');
//const middleware=require('./../Middleware/middleware');
const clientControllers=require('./../controllers/ClientController');
const adminControllers=require('./../controllers/AdminController');
const serviceControllers=require('./../controllers/ServiceController');
//router.use('',middleware);
router.use('',express.json());


router.post('/actualizar_cliente',adminControllers.actualizarCliente);
router.post('/agregar_cliente',adminControllers.agregarCliente);
router.post('/agregar_servicio',serviceControllers.agregarservicio);
router.get('/saldo',clientControllers.saldo);

router.post('/cobrar',serviceControllers.cobrar);
router.post('/consultarCliente',adminControllers.consultarClientePorId);
router.post('/eliminarCliente',adminControllers.eliminarCliente);

router.post('/eliminar_servicio',serviceControllers.eliminarServicio);
router.get('/serviciosCons',clientControllers.serviciosCons);
router.post('/transferir',clientControllers.transferir);

module.exports=router;