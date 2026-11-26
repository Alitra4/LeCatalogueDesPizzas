import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;

const db = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

const app = express();
app.use(cors());

app.get("/pizzas", async (_req, res) => {
  const { rows } = await db.query("select * from pizzas");
  res.json(rows);
});

app.get("/pizzas/:id", async (req, res) => {
  const { rows } = await db.query("select * from pizzas where id = $1", [
    Number(req.params.id),
  ]);
  res.json(rows[0]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
