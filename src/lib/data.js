"use server";
import { sql } from "@vercel/postgres";

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

export const getUsers = async () => {
  try {
    const users = await sql`SELECT * FROM family_users`;
    const res = users.rows;

    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch family users");
  }
};

export const addCountryForUser = async (prevValue, formData) => {
  const { user, country } = Object.fromEntries(formData);

  try {
    const countryCodeRes =
      await sql`SELECT flag FROM flags WHERE name = ${country}  `;
    const countryCode = countryCodeRes.rows[0].flag;
    if (countryCode) {
      console.log(countryCode);
      await sql`INSERT INTO visited_countries (country_code, user_id) VALUES (${countryCode},${user})`;
      console.log("Country added succesfully");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Country not added, something went wrong!");
  }
};

export const fetchCountriesByUser = async (user_id) => {
  try {
    const res =
      await sql`SELECT country_code FROM visited_countries WHERE user_id = ${user_id} `;
    const visitedCountires = res.rows;
    return visitedCountires;
  } catch (error) {
    console.log(error);
    return {
      error:
        "Failed to fetch countries for practicular countries for this user",
    };
  }
};
