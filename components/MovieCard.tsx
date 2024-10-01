import React from 'react'
import { Card, CardContent } from './ui/card'
import { cleanMovieName } from '@/lib/actions/functions'
import Image from "next/image"


const MovieCard = ({title,overview}:{title:string,overview:string}) => {
  const cleanedTitle=cleanMovieName(title);
  return (
    <Card className="md:w-[calc(50%-16px)] w-full overflow-hidden dark">
      <div className="flex overflow-auto">
        <CardContent className="p-6 flex h-[300px]">
          <div className='aspect-[2/3] h-full relative'>
            <Image
              src={`/movies-images/${cleanedTitle}.jpg`}
              alt={`Placeholder`}
              fill
              className="rounded-md object-contain "
            />
          </div>
          
          <div className='ml-4'>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="">
              {overview}
            </p>
          </div>
          
        </CardContent>
      </div>
    </Card>
  )
}

export default MovieCard