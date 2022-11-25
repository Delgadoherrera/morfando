/* Controllers */
const usuarioController = require("../controllers/usuario");
const restauranteController = require("../controllers/restaurante");
const plateController = require("../controllers/plate");
const categoryController = require("../controllers/category");

const hoursController = require("../controllers/hours");

const restauranteFavoritoController = require("../controllers/restauranteFavorito");

const jwt = require("jsonwebtoken");
const express = require("express");
const nodemailer = require("nodemailer");
const verificacion = express.Router();
const activateAccount = express.Router();
const sendEmail = express.Router();
const sendEmailForgotPassword = express.Router();
const axios = require("axios");
const hours = require("../controllers/hours");

activateAccount.use((req, res, next) => {
  const token = req.query.token;
  if (token) {
    jwt.verify(token, "secretEmail", function (err, decodedToken) {
      if (err) {
        return res.status(400).json({ error: "Incorrect or Expired link." });
      }

      const { correo } = decodedToken;
      console.log(correo);
      axios
        .post("http://localhost:8000/activate-account", {
          correo: correo,
          activo: true,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          return res.status(400);
        });
    });
    return res.status(200).json({ success: "Todo fue bien" });
  } else {
    return res.status(400).json({ error: "Something went wrong" });
  }
});

verificacion.use((req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) {
      res.status(401).send({
        error: "Es necesario token",
      });
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }
    const decode = jwt.verify(token, "secret");
    if (token) {
      //  Return response with decode data
      req.token = token;
      next();
    } else {
      // Return response with error
      res.json({
        login: false,
        data: "error",
      });
    }
  } catch {
    res.status(401);
    res.json({
      message: "Invalid token",
    });
  }
});

sendEmail.use((req, res, next) => {
  const correo = req.body.correo;
  let token = jwt.sign({ correo }, "secretEmail", {
    expiresIn: "20m",
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "pierinatufillaro@gmail.com", pass: "hhvhydrewmcssdgk" },
  });

  var mailOptions = {
    from: "pierinatufillaro@hotmail.com",
    to: req.body.correo,
    subject: "Morfando-Inc: Confirmacion de mail",
    html: `<h2>Hace click en el link para activar tu cuenta </h2>
       <a href="http://localhost:8000/email-activate?token=${token}">Activa tu cuenta!</a>
       `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(404).send();
    } else {
      console.log("Email sent: " + info.response);
      
    }
  });
  next()
});

sendEmailForgotPassword.use((req, res, next) => {
  const correo = req.body.correo;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "pierinatufillaro@gmail.com", pass: "hhvhydrewmcssdgk" },
  });

  var mailOptions = {
    from: "pierinatufillaro@hotmail.com",
    to: req.body.correo,
    subject: "Morfando-Inc: Confirmacion de mail",
    html: `<h2>Hace click en el link para recuperar tu cuenta </h2>
       <a href="http://localhost:8000/change-password?email=${correo}">Cambia tu contraseña</a>
       `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(404).send();
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send();
    }
  });

  res.status(200).send();
  next();
});

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message:
        "Example project did not give you access to the api web services",
    })
  );
  // auth
  app.post("/user", sendEmail, usuarioController.create);
  app.get("/email-activate", activateAccount);
  app.post("/activate-account", usuarioController.updateActivateAccount);

  // usuario
  app.put("/user", usuarioController.update);
  app.delete("/user", usuarioController.updateActivate);
  app.get("/users", usuarioController.list);

  app.delete("/user-favorites", restauranteFavoritoController.updateActivate);
  app.get("/user/:id/favorites", usuarioController.findFavouriteRestaurant);
  app.post("/user-favorites", restauranteFavoritoController.create);
  app.delete("/user-favorites", restauranteFavoritoController.updateActivate);
  app.get("/user:id", usuarioController.find);
  app.get("/user/:mail/:password", usuarioController.logIn);
  app.post("/user-forgot-password", sendEmailForgotPassword);

  app.post("/user-restart-password", usuarioController.restartPassword);
  app.get("/users/:id/restaurants", usuarioController.findOwn);

  // restaurant
  app.post("/restaurant", verificacion, restauranteController.create);
  app.put("/restaurant", restauranteController.update);
  app.delete("/restaurant", restauranteController.updateActivate);
  app.get("/restaurants", restauranteController.list);
  app.get("/restaurant/:id/opinion", restauranteController.findOpinion);
  app.get("/restaurant:id", restauranteController.find);

  // menu
  app.post("/plate", plateController.create);
  app.put("/plate", plateController.update);
  app.delete("/plate", plateController.updateActivate);
  app.get("/menu", plateController.list);
  app.get("/restaurant/:id/menu", restauranteController.findMenu);

  // menu
  app.post("/category", categoryController.create);
  app.delete("/category", categoryController.updateActivate);
  app.get("/menu/:id/category", categoryController.list);

  /* A hacer
    /restaurants/{user_latitude}{user_longitude}/nearest
    /restaurants-filter{distanceFrom}{distanceTo}{foodType}{priceFrom}{priceTo}{score}
    /no-connection
  */
};
