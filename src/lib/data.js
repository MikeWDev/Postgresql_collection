"use server";
import { sql } from "@vercel/postgres";
import "dotenv/config";
export const getCapitals = async () => {
  try {
    const capitals = await sql`SELECT * FROM capitals`;
    const res = capitals.rows;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch capitals");
  }
};
