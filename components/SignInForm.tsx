"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from 'next-auth/react'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

const SignInForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {


        await signIn("credentials",{
            email: values.email,
            password: values.password,
            redirect:true,
            callbackUrl: "/",
        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <div className='flex flex-col'>
                    <Button type="submit" className='bg-btnRed'>Sign In</Button>
                </div>
                
            </form>
        </Form>
    )
}

export default SignInForm