//// SQL file → Read it → Connect to DB → Execute SQL → Close connection ✅
import { config } from "dotenv";
//this is db migrate
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getPool, closePool } from "../packages/shared/src/db/pool.ts";

config({ path: resolve(process.cwd(), ".env") });

async function main() {
  /
