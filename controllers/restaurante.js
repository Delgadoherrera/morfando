const Sequelize     = require('sequelize');
const restaurante       = require('../models').restaurant;

const hoursController = require("../controllers/hours");

module.exports = {
 
 create(req, res) {
  return restaurante
      .create ({
            nombre: req.body.nombre,
            direccion_id: req.body.direccion_id,
            usuario_id: req.body.usuario_id,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            cerradoTemporalmente: req.body.cerradoTemporalmente,
            tipoDeComida: req.body.tipoDeComida,
            rangoPrecio: req.body.rangoPrecio,
            calificacion: req.body.calificacion,
            activo: req.body.activo,
            status: req.body.status
      
      })
      .then(restaurante => {hoursController.create(req,res,restaurante['id']),res.status(200).send(restaurante)} )
      .catch(error => res.status(400).send(error))
 },

 list(_, res) {
     return restaurante.findAll({
      include: [{ all: true, nested: true }],
     })
        .then(restaurante => res.status(200).send(restaurante))
        .catch(error => res.status(400).send(error))
 },

 find (req, res) {
     return restaurante.findAll({
      include: [{ all: true, nested: true }],
         where: {
             id: req.params.id,
         }
     })
     .then(restaurante => res.status(200).send(restaurante))
     .catch(error => res.status(400).send(error))
  },

  findMenu (req, res) {
    return restaurante.findOne({
     include: [{ all: true, nested: true}],
        where: {
            id: req.params.id,
            activo: true,
        }
    })
    .then(restaurante => res.status(200).send({restaurante_id: restaurante['id'], plates: restaurante['plates']}))
    .catch(error => res.status(400).send(error))
 },

  update (req, res){
    return restaurante.update(req.body, {
      where: { 
        id: req.body.id
    }
    })
    .then(restaurante => {hoursController.create(req,res,req.body.id), res.status(200).send(restaurante)} )
    .catch(error => res.status(400).send(error))
  },

  updateActivate (req, res){
    return restaurante.update(req.body, {
      where: { 
        id: req.body.id
    }
    })
    .then(restaurante => res.status(200).send(restaurante))
    .catch(error => res.status(400).send(error))
  },

  findOpinion (req, res) {
    return restaurante.findOne({
     include: [{ all: true, nested: true }],
        where: {
            id: req.params.id,
        }
    })
    .then(restaurante => res.status(200).send({restaurante_id: restaurante['id'], opiniones: restaurante['opinion']}))
    .catch(error => res.status(400).send(error))
    },

};