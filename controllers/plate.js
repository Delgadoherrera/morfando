const Sequelize     = require('sequelize');
const plate       = require('../models').plate;
module.exports = {
 create(req, res) {
  
  plates = req.body.platos;
  plates.forEach((elem) => {
    return plate
        .create ({
             restaurante_id: req.body.restaurante_id,
             categoria_id: elem.categoria_id,
             nombre: elem.nombre,
             ingredientes: elem.ingredientes,
             aptoVegano: elem.aptoVegano,
             aptoCeliaco: elem.aptoCeliaco,
             activo: elem.activo
        });
  });
  res.status(200).send(200)
 },
 list(_, res) {
     return plate.findAll({
      include: [{ all: true, nested: true }],
      where: {
        activo: true
      }
     })
        .then(plate => res.status(200).send(plate))
        .catch(error => res.status(400).send(error))
 },

 find (req, res) {
     return plate.findAll({
      include: [{ all: true, nested: true }],
         where: {
             id: req.params.id,
             activo: true
         }
     })
     .then(plate => res.status(200).send(plate))
     .catch(error => res.status(400).send(error))
  },

  update (req, res){
    plate.destroy({
      where: { 
        restaurante_id: req.body.restaurante_id
    }
    }),
    plates = req.body.platos;
    plates.forEach((elem) => {
      return plate
          .create ({
               restaurante_id: req.body.restaurante_id,
               categoria_id: elem.categoria_id,
               nombre: elem.nombre,
               ingredientes: elem.ingredientes,
               aptoVegano: elem.aptoVegano,
               aptoCeliaco: elem.aptoCeliaco,
               activo: elem.activo
          });
    });
    res.status(200).send(200)
   },
  updateActivate (req, res){
    return plate.update(req.body, {
      where: { 
        id: req.body.id,
        restaurante_id: req.body.restaurante_id
    }
    })
    .then(plate => res.status(200).send(plate))
    .catch(error => res.status(400).send(error))
  },
};