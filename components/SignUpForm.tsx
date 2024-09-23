"use client"
import React, { useState } from 'react'
import { set, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { insertUser, verifyEmail } from '@/lib/actions/database-actions'
import { useRouter } from 'next/navigation'


const formSchema = z.object({
    username: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
})

const SignUpForm = () => {
    const [uniqueEmail,setUniqueEmail]=useState(true);
    const router=useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username:"",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            if(await verifyEmail(values.email))
            {
                setUniqueEmail(true);
                insertUser(values.username,values.email,values.password);

                
                router.push('/');
            }
            else
                setUniqueEmail(false);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem >
                            <div className="flex flex-col">
                                <FormLabel className='form-label'>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Choose your username" {...field} />
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem >
                            <div className="flex flex-col">
                                <FormLabel className='form-label'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col'>
                                <FormLabel className='form-label'>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                {uniqueEmail?null:(
                    <div className='text-red-400 w-full text-center'>
                        <p>Email already used</p>
                    </div>
                )
                }
                
                <div className='flex flex-col'>
                    <Button type="submit" className='bg-btnRed'>Sign Up</Button>
                </div>
                
            </form>
        </Form>
    )
}

export default SignUpForm