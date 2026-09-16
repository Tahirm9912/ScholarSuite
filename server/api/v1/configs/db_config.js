import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config()

console.log(process.env.DATABASE_URL)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
  console.log('✅ Database connected successfully');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected database error:', err);
  process.exit(-1);
});




export const db_query = (text, params)=>{
  return pool.query(text, params)
}
export { pool }
