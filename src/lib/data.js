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

export const getFlags = async () => {
  try {
    const flags = await sql`SELECT * FROM flags`;
    const res = flags.rows;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch flags");
  }
};

export const getCapitalByFlag = async (name) => {
  try {
    const CapitalByFlag =
      await sql`SELECT capital FROM capitals where country = ${name} `;
    const res = CapitalByFlag.rows[0];

    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to find capital");
  }
};
