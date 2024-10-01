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
  function cleanMovieName(movieName:string) {
    return movieName.replace(/[\\/*?:"<>|]/g, "");
  }

  return (
    <div className='flex flex-col my-10'>
      <h1 className='text-2xl font-semibold ml-4 my-2' id={category}>{category}</h1>
      
      <Carousel className="w-full max-w relative">
        <CarouselContent className="-ml-1">
          {rows.map((movie) =>{
            const cleanedTitle=cleanMovieName(movie.title);
            return(
            <CarouselItem key={movie.index} className="pl-1 md:basis-1/4 lg:basis-1/4 basis-1/3 ">
              <div className="p-1">
                <Card className='p-0 m-0 border-0 '>
                  <div className='aspect-[2/3] w-full h-full relative group bg-black'>
                    <Image
                      src={`/movies-images/${cleanedTitle}.jpg`}
                      alt={`Placeholder`}
                      fill
                      className="rounded-md object-cover"
                    />  
                    <span className='card-movie-title'>
                      {movie.title}
                    </span>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          );
          })}
        </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2"/>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2"/>
      </Carousel>

    </div>
  )
}

export default CategoryCarousel