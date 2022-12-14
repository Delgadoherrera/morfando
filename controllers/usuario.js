const Sequelize = require("sequelize");
const usuario = require("../models").user;
const jwt = require("jsonwebtoken");

module.exports = {
  create(req, res) {
    return usuario
      .create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        preguntaSeguridad: req.body.preguntaSeguridad,
        respuestaSeguridad: req.body.respuestaSeguridad,
        duenio: req.body.duenio,
        activo: req.body.activo,
        status: req.body.status,
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return usuario
      .findAll({
        include: [{ all: true, nested: true }],
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  find(req, res) {
    return usuario
      .findAll({
        include: [{ all: true, nested: true }],
        where: {
          id: req.params.id,
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  findContrasenia(req, res) {
    return usuario
      .findOne({
        where: {
          correo: req.params.mail,
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  logIn(req, res) {
    
    return usuario
      .findOne({
        where: {
          correo: req.body.mail,
          contrasenia: req.body.password,
        },

      })
      .then((usuario) => {
        if (usuario){
          if (usuario.activo){
            let token = jwt.sign({ correo: req.body.mail }, "secret",  {
              expiresIn: "1h",
            });
            res.status(200).send({usuario: usuario, token: token})
          }
          else{
            res.status(400).send("Usuario inactivo. Chequee su casilla de mail")
          }
        }
        else{
          res.status(404).send("Usuario no encontrado con ese correo o contrase??a")
        }
      })
      .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    return usuario
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  restartPassword(req, res) {
    return usuario
      .update(req.body, {
        where: {
          correo: req.body.correo,
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  updateActivate (req, res){
    return usuario.update(req.body, {
      where: { 
        id: req.body.id
    }
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error))
  },

  updateActivateAccount (req, res){
    console.log("En el activateAccount")
    console.log(req.body.correo)
    console.log(req.body.activo)
    return usuario.update(req.body, {
      where: { 
        correo: req.body.correo
    }
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error))
  },

  findFavouriteRestaurant (req, res) {
    return usuario.findOne({
     include: [{ all: true, nested: false }],
     where: { id: req.params.id},
     attributes: { exclude: ['createdAt', 'updatedAt']},
    })
    .then(usuario => res.status(200).send({usuario_id: usuario['id'], favoritos: usuario['favorite']}))
    .catch(error => res.status(400).send(error))
 },

 findOwn (req, res) {
  return usuario.findOne({
   include: [{ all: true, nested: true }],
      where: {
          id: req.params.id,
      }
  })
  .then(usuario => res.status(200).send({usuario_id: usuario['id'], misRestaurantes: usuario['restaurante']}))
  .catch(error => res.status(400).send(error))
},
 
};
