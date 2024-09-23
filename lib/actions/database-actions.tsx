"use server";
import { sql } from "@vercel/postgres";

export const verifyEmail=async(
    email: string
)=>
{
    try {
        if(!email) throw new Error("Email required");
        const {rows}=await sql`SELECT * FROM users WHERE email=${email}`;
        if(rows.length==0)
            return true;
        else
            return false;

    } catch (error) {
        console.log("Err verifying email: "+error);
    }
}


export const insertUser=async(
username: string, email: string, password: string)=>
{
    try {
        if(!username || !email! || !password) throw new Error("Username,email and password required");
        await sql`INSERT INTO users (username,email,password) VALUES(${username},${email},${password})`;
    } catch (error) {
        console.log("Err inserting user: "+error);
    }
}


export const getUserByEmail=async(email: string)=>{
    try{
        if(!email) throw new Error("Email is required");
        const {rows}=await sql`SELECT * FROM users WHERE email=${email}`
        if(rows.length>0){
            const user={
                user_id:rows[0].user_id,
                username:rows[0].username,
                email:rows[0].email,
            }
            return user as User;
        }
        else{
            return null;
        }
    }catch(error){
        console.log("Err getting user info: "+ error);
    }
}

