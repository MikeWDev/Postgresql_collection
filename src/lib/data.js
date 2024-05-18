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

const getUsers = async () => {
  try {
    const users = await sql`SELECT * FROM family_users`;
    const res = users.rows;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch family users");
  }
};

export const createUser = async (prevValue, formData) => {
  const { name, color } = Object.fromEntries(formData);

  try {
    await sql`INSERT INTO family_users (name , color) VALUES (${name} , ${color}) `;
    console.log("User added");
    return { succes: "User added succesfully!" };
  } catch (error) {
    console.log(error);

    return { error: "User not added, something went wrong" };
  }
};
