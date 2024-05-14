const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.get('/', jwtMiddleware, (req, res) => {
  const userProfile = {
    nombre: 'María',
    apellido: 'Perez',
    correo: 'maria@gmail.com',
    fechaDeNacimiento: '01/01/2001'
  };
  
  res.json(userProfile);
});

module.exports = router;