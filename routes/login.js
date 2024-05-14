const express = require('express');
const jwt = require('jsonwebtoken');
const jwtMiddleware = require('../middleware/jwtMiddleware');
const router = express.Router();

const secretKey = 'mysecretkey';

const credentials = {
  email: 'admin@admin.com',
  password: 'admin'
};

router.post('/', (req, res) => {
  try{
  const { email, password } = req.body;

  if (!email || !password ) {
    return res.status(400).json({ error: "Faltan parámetros obligatorios" });
  }
  
  if (email === credentials.email && password === credentials.password) {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
   
   
        // Retornar el token en la respuesta
        return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
      }
      else{
        return res.status(401).json({ message: 'Credenciales incorrectas' });
      }

      } catch (error) {
        console.error(error)
        res.status(500).send(error)
      }
    
  });

module.exports = router;
