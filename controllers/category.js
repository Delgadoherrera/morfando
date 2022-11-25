const Sequelize     = require('sequelize');
const category       = require('../models').category;
module.exports = {
 create(req, res) {
    return category
        .create ({
             restaurante_id: req.body.restaurante_id,
             nombre: req.body.nombre,
             activo: req.body.activo
        })
        .then(category => res.status(200).send(category))
        .catch(error => res.status(400).send(error))
 },
 list(req, res) {
     return category.findAll({
      where: {
         restaurante_id: req.params.id,
         activo: true
     }
     })
        .then(category => res.status(200).send(category))
        .catch(error => res.status(400).send(error))
 },

 updateActivate (req, res){
    return category.update(req.body, {
      where: { 
        id: req.body.id,
        restaurante_id: req.body.restaurante_id
    }
    })
    .then(category => res.status(200).send(category))
    .catch(error => res.status(400).send(error))
  },
};