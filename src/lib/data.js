// import { db, dbConnect } from "./utils";

// export const getCapitals = async () => {
//   try {
//     dbConnect();
//     const capitals = await db.query("SELECT * FROM capitals;");
//     const res = capitals.rows;
//     return res;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch capitals");
//   }
// };
