import React from 'react'

const PageHeader = ({text}:{text:string}) => {
  return (
    <h1 className='text-3xl font-bold mx-10 my-4'>{text}</h1>
  )
}

export default PageHeader