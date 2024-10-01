import MovieCard from '@/components/MovieCard'
import PageHeader from '@/components/PageHeader'
import { Card } from '@/components/ui/card'
import { sql } from '@vercel/postgres'
import React from 'react'

const page = async () => {
  const {rows}=await sql`SELECT * FROM movies ORDER BY popularity DESC LIMIT 20`

  return (
    <section className='sm:mx-10 mx-2'>
      <PageHeader 
        text="These are the best rated movies"/>

      <div className='flex flex-wrap gap-4'>
        {rows.map((movie=>(
          <MovieCard title={movie.title} overview={movie.overview} key={movie.title} />
        )))}
      </div>
      

    </section>
  )
}

export default page