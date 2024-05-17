import pg from "pg";
import "dotenv/config";

console.log(process.env.POSTGRES_USER);
export const db = new pg.Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_URL,
});
export const dbConnect = async () => {
  console.log(process.env.POSTGRES_USER);
  if (db._connected === true) {
    console.log("Using existing connection");
  } else {
    await db.connect();
    console.log("Connected to the database");
  }
};
