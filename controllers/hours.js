const Sequelize = require("sequelize");
const hour = require("../models").hour;
module.exports = {
  create(req, res, id) {
    hour.destroy({
      where: { 
        restaurante_id: id
    }
  }),
    horas = req.body.horas;
    horas.forEach((elem) => {
      return hour
        .create({
          restaurante_id: id,
          dia: elem.dia,
          horaDesde: elem.horaDesde,
          horaHasta: elem.horaHasta,
          activo: true,
        })

        .then();
    });
  },
  
  delete(req, res){
    hour.destroy(req.body, {
      where: { 
        restaurante_id: req.body.id
    }
    }).then()
    .catch(error => res.status(400).send(error))
  },

  list(_, res) {
    return hour
      .findAll({
        include: [{ all: true, nested: true }],
        where: {
          activo: true,
        },
      })
      .then((hour) => res.status(200).send(hour))
      .catch((error) => res.status(400).send(error));
  },
};
