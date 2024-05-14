const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: true })); // para acceder al body
app.use(express.json());

// Routes

const loginRouter = require("./routes/login");
const formRouter = require("./routes/form");
const profileRouter = require("./routes/profile");
const contactsRouter = require("./routes/contacts");

app.use("/login", loginRouter);
app.use(logger);

// Middleware

const jwtMiddleware = require('./middleware/jwtMiddleware');

app.use("/form", jwtMiddleware, formRouter);
app.use("/profile", jwtMiddleware, profileRouter);
app.use("/contacts", jwtMiddleware, contactsRouter);

// Callback

app.get("/", logger, (req, res) => {
  res.send("Im working :)");
});

// MiddlewareS
// Imprime la URL original 

function logger(req, res, next) {
  console.log(req.originalUrl + "from logger");
  next();
}

app.listen(5900, () => {
  console.log("Server running on port 3000");
});
module.exports = app; 