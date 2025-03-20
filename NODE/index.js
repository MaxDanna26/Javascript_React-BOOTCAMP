import express from 'express';
import cors from "cors";
import libroRoutes from "./Routes/libro.js"
import { Sequelize } from 'sequelize'

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const database = 'berlin';
const user = 'root';
const password = '';
const host = 'localhost';

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: console.log,
});

app.post("/form", async (req, res) => {
  const { dni, contrasenya, nombre } = req.body;
  sequelize.query('INSERT INTO `ciudadano`(`dni`, `contraseña`, `nombre`) VALUES(:dni, :contrasenya, :nombre)', {
    replacements: { dni, contrasenya, nombre },
    type: sequelize.QueryTypes.INSERT
  })
  res.send("Registro insertado")
});

app.get("/", (req, res) => {
  res.json("Success!");
});

app.get("/libro", (req, res) => {
  res.json("llegamos a libro!");
});

app.get('/book/:id', (req, res) => {
  const bookId = req.params.id; // Captura la id del libro
  res.send(`Id del libro: ${bookId}`);
});

app.use('/libro', libroRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});