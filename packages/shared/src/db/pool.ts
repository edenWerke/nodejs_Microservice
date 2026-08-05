import {Pool} from 'pg'
let pool : Pool | null= null;
 export function getpool():Pool{
    if(!pool){
        const connectionString=process.env.DATABASEURL
        if (!connectionString){
            throw new Error(' DATABASE_URL is not set')
        } 
    }
 }