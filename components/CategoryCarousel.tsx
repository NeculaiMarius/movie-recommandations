import React from 'react'
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { sql } from '@vercel/postgres'
import Image from "next/image"

const CategoryCarousel = async ({category}:{category:string}) => {
  const {rows}=await sql`SELECT * FROM movies WHERE genres LIKE ${`%${category}%`} ORDER BY vote_average DESC LIMIT 10;`
  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl font-semibold'>{category}</h1>
      
      <Carousel className="w-full max-w relative">
        <CarouselContent className="-ml-1">
          {rows.map((movie) => (
            <CarouselItem key={movie.index} className="pl-1 md:basis-1/4 lg:basis-1/4 basis-1/4">
              <div className="p-1">
                <Card className='p-0 m-0 border-0'>
                  <div className='aspect-[2/3] w-full h-full relative'>
                    <Image
                      src={`/movies-images/${movie.title}.jpg`}
                      alt={`Placeholder`}
                      fill
                      className="rounded-md object-cover"
                    />  
                    <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white px-2 rounded'>
                      {movie.title}
                    </span>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2"/>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2"/>
      </Carousel>

    </div>
  )
}

export default CategoryCarousel