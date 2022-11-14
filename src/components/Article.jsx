import React from 'react'
import { Link } from 'react-router-dom'

export const Article = ({...country}) => {
  return (
   
     <Link to={`/${country.name.common}`}>
        <div className='flex flex-col overflow-hidden bg-White shadow-sm dark:bg-Dark-Blue rounded-sm mx-10 md:mx-0'>
        <div className="">
        <img className='md:h-72 w-full object-cover' src={country.flags.svg} alt="" />
        </div>
        <div className="flex flex-col p-8">
            <h2 className='font-bold pb-3'>{country.name.common}</h2>
            <h4 className='font-semibold'>Population: <span className='font-light'>{country.population.toLocaleString()}</span></h4>
            <h4 className='font-semibold'>Region: <span className='font-light'>{country.region}</span></h4>
            <h4 className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span> </h4>
        </div>
    </div>
     </Link>
   
  )
}
