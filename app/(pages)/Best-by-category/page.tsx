import CategoryCarousel from '@/components/CategoryCarousel'
import PageHeader from '@/components/PageHeader'
import { sql } from '@vercel/postgres'
import React from 'react'

const page = async () => {
  const {rows}=await sql`SELECT DISTINCT unnest(string_to_array(genres, ' ')) AS genre
FROM movies ORDER BY genre`
  return (
    <div className='mx-10 grow overflow-auto no-scrollbar'>
      <PageHeader text="These are the best rated movies by genre"/>
      
      {rows.map((category)=>{
        return(
          <CategoryCarousel category={category.genre} key={category.genre}/>
        )
      })}

    </div>

    
  )
}

export default page