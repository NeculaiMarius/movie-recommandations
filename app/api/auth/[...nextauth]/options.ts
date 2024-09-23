import { sql } from "@vercel/postgres";
import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions={
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email:{
                    label: "Email: ",
                    type: "text",
                    placeholder: "Enter email",
                },
                password:{
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {

                const {rows}=await sql`SELECT * FROM users WHERE email=${credentials?.email} AND password=${credentials?.password}`

                if(rows.length>0){
                    const user={
                        id:rows[0].user_id,
                        name:rows[0].username,
                        email:rows[0].email,
                    }
                    console.log(user);
                    return user
                }
                else{
                    return null;
                }
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,

    pages:{
        signIn: "/sign-in"
    },


}