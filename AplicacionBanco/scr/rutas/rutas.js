const router=require('express').Router();
const express=require('express');
const middleware=require('./../Middleware/middleware');
const clientControllers=require('./../controllers/controllersCliente');
const adminControllers=require('./../controllers/controllersAdmin');
const serviceControllers=require('./../controllers/controllersServicio');
router.use('',express.json());
/*

router.use('/clientes',middleware);
router.use('/admin',middleware);
router.use('/servicios',middleware);

router.get('/clientes/saldo',clientControllers.saldo);
router.post('/Clientes/ContratarServicio',clientControllers.serviciosCont);
router.get('/clientes/ConsultarServicio',clientControllers.serviciosCons);
router.post('/clientes/transferirDinero',clientControllers.realizarTransferencia);

*///router.get('/admins/consultarCliente',adminControllers.consultarClientePorId);
//router.delete('/admins/eliminarCliente',adminControllers.eliminarCliente);
router.post('/admins/agregarCliente',adminControllers.agregarCliente);
/*
router.delete('/servicios/eliminarServicio',serviceControllers.eliminarServicio);
router.post('/servicios/agregarServicio',serviceControllers.agregarServicio);
router.post('/servicios/cobrarClienteUnico',serviceControllers.cobrar);
router.post('/servicios/cobrarTodos',serviceControllers.Todos);
router.get('/servicios/saldo',serviceControllers.saldo);

module.exports=router;*/