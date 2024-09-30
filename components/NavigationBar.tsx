
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


const NavigationBar = ({user}:{user:User}) => {
    return (
        <div className='navbar-layout '>
            <Link className='font-bold text-left max-w-[50vw]' href="/">Movie Recommmandation system</Link>
            


            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className='flex justify-center items-center gap-2'>
                        <span className="material-symbols-outlined text-[3rem] flex justify-center">account_circle</span>
                        <span className='font-bold size-full'>{user.username}</span>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/api/auth/signout">Sign Out</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div>
    )
}

export default NavigationBar