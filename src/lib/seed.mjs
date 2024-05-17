// import { db, sql } from "@vercel/postgres";
// import fs from "fs";
// import path from "path";
// import Papa from "papaparse";
// import "./envConfig.mjs";

// const parseCSV = async (filePath) => {
//   console.log("Starting");
//   const csvFile = fs.readFileSync(path.resolve(filePath), "utf8");
//   return new Promise((resolve) => {
//     Papa.parse(csvFile, {
//       header: true,
//       complete: (results) => {
//         resolve(results.data);
//       },
//     });
//   });
// };

// async function seed(client) {
//   // Creating the books table
//   const createFlagsTable = sql`
//     CREATE TABLE IF NOT EXISTS  flags (
//       id SERIAL PRIMARY KEY,
//       "name" VARCHAR(255),
//       "flag" VARCHAR(255)
//     );
//   `;
//   console.log('Created "flags" table');

//   const flagsData = await parseCSV("./flags.csv");

//   const promises = flagsData.map((flag) => {
//     return client.sql`
//     INSERT INTO flags ("name", "flag")
//     VALUES (${capital.name}, ${capital.flag});
//   `;
//   });

//   const results = await Promise.all(promises);
//   console.log(`Seeded ${results.length} flags`);

//   return {
//     createFlagsTable,
//     seededBooks: results.length,
//   };
// }

// async function main() {
//   const client = await db.connect();

//   await seed(client);
//   await client.end();
// }

// main().catch((err) => {
//   console.error(
//     "An error occurred while attempting to seed the database:",
//     err
//   );
// });
