import CategoryCarousel from '@/components/CategoryCarousel'
import PageHeader from '@/components/PageHeader'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { sql } from '@vercel/postgres'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const {rows}=await sql`SELECT DISTINCT unnest(string_to_array(genres, ' ')) AS genre
FROM movies ORDER BY genre`
  return (
    <div className='sm:mx-10 mx-1 grow overflow-auto no-scrollbar'>
      <PageHeader text="These are the best rated movies by genre"/>
      
      <div className='flex gap-2 flex-wrap mx-4'>
        {rows.map((category)=>{
          return(
            <div className='badge-wrapper' key={category.genre}> 
              <Link href={`#${category.genre}`} 
                className={cn("text-md",badgeVariants({ variant: "default" }))} >
                <span className='text-base'>{category.genre}</span>
              </Link>
            </div>
            
          )
        })}
      </div>
      
      
      {rows.map((category)=>{
        return(
          <CategoryCarousel category={category.genre} key={category.genre}/>
        )
      })}

    </div>

    
  )
}

export default page