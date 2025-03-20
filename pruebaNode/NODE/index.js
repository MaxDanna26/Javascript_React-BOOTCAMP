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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});