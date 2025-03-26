import express from "express";
import cors from "cors";
import { Sequelize, QueryTypes } from 'sequelize';

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

app.get("/ciudadano", async (req, res) => {
  const data = await sequelize.query('SELECT * FROM `ciudadano`', {
    type: QueryTypes.SELECT
  })
  res.json(data);
});

app.get("/getCiudadanoById/:id", async (req, res) => {
  const { id } = req.params;
  const data = await sequelize.query('SELECT * FROM `ciudadano` WHERE id = :id', {
    replacements: { id },
    type: QueryTypes.SELECT
  })
  res.json(data);
  return
});

app.post("/insert", async (req, res) => {
  const { dni, contrasenya, nombre } = req.body;
  sequelize.query('INSERT INTO `ciudadano`(`dni`, `contraseña`, `nombre`) VALUES(:dni, :contrasenya, :nombre)', {
    replacements: { dni, contrasenya, nombre },
    type: QueryTypes.INSERT
  })
  res.send("Registro insertado con exito!")
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { dni, contrasenya, nombre } = req.body;
  await sequelize.query(
    'UPDATE `ciudadano` SET `dni` = :dni, `contraseña` = :contrasenya, `nombre` = :nombre WHERE id = :id',
    {
      replacements: { dni, contrasenya, nombre, id },
      type: QueryTypes.UPDATE
    })
  res.send("Registro Update!");
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await sequelize.query('DELETE FROM `ciudadano` WHERE id = :id', {
    replacements: { id },
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});