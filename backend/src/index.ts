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
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
});

const app = express();
app.use(cors());

app.get("/PizzAPi", async (_req, res) => {
  const { rows } = await db.query("select * from pizza");
  res.json(rows);
});

app.get("/logs", (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
