import {Pool} from 'pg'
let pool : Pool | null= null;
 export function getpool():Pool{
    if(!pool){
        const connectionString=process.env.DATABASEURL
        if (!connectionString){
            throw new Error(' DATABASE_URL is not set')
        } 
        pool=new Pool({connectionString})
    }
    return pool
 }
 export async function closePool():Promise<void>{
    if(pool){
        await pool.end()
    }

 }