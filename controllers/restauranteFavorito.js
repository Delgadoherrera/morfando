const Sequelize = require("sequelize");
const favorito = require("../models").favorite;
module.exports = {
  create(req, res) {
    return favorito
      .create({
        usuario_id: req.body.usuario_id,
        restaurante_id: req.body.restaurante_id,
        activo: true
      })
      .then((favorito) => res.status(200).send(favorito))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res){
    return favorito.update(req.body, {
      where: { 
        id: req.body.id,
        usuario_id: req.body.usuario_id,
        restaurante_id: req.body.restaurante_id,
        activo: false
    }
    })
    .then(favorito => res.status(200).send(favorito))
    .catch(error => res.status(400).send(error))
  },

  updateActivate (req, res){
    return favorito.update(req.body, {
      where: { 
        restaurante_id: req.body.restaurante_id,
        usuario_id: req.body.usuario_id
    }
    })
    .then(favorito => res.status(200).send(favorito))
    .catch(error => res.status(400).send(error))
  },
};
