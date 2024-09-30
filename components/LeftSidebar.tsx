'use client'
import { navigationLinks } from '@/constants'
import React from 'react'
import { badgeVariants } from './ui/badge'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const LeftSidebar = () => {
  const pathname=usePathname();
  return (
    <div className=" h-full flex flex-col max-lg:hidden shrink-0">
      {navigationLinks.map((item)=>{
        const isActive=pathname === item.route

            return(
              <Link 
              className={cn("m-4 py-2 px-4 justify-between",badgeVariants({ variant: "default" }),{'bg-red-500':isActive})}
              style={{ padding: '8px 16px' }}
              href={item.route} 
              key={item.label}
              >
                <span className='text-base'>{item.label}</span>

                <Image key={item.label}
                    src={item.imgURL}
                    alt="Badge icon" 
                    width={25} 
                    height={25}
                    className='ml-4'
                  />
              </Link>
            )            
          })}
    </div>
  )
}

export default LeftSidebar