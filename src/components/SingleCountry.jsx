import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft} from 'react-icons/bs'

const SingleCountry = () => {
    const {name} = useParams()
    const [country, setCountry] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
          if(!res.ok){
            throw Error('Couldn\'t fetch') //respose error
          }
          return res.json()
        })
        .then((data)=>{
            setCountry(data)
          
        })
        
      },[name])
  return (
    <div className="min-h-screen overflow-hidden dark:bg-Very-Dark-Blue dark:text-White">
        <div className='flex flex-col justify-start mx-auto container px-10 md:px-0'>
        <div className="py-14">
        <Link className="bg-White flex items-center space-x-3 dark:bg-Dark-Blue w-32 py-2 px-8 rounded-sm shadow-md" to='/'>
            
            <span><BsArrowLeft/></span>
            <button>Back</button>
            
        </Link>
        </div>
        
        {country.map((item, index)=>(
            <div key={index} className="flex md:flex-row flex-col">
                <div className="flex-1">
                    <img src={item.flags.svg} alt="" />
                </div>

                <div className="flex-1 flex flex-col md:pl-20 pt-8">
                    <div className="">
                        <h1 className="text-2xl font-bold">{item.name.common}</h1></div>
                   
                    <div className="flex lg:flex-row flex-col pt-5 pb-8">
                    <div className="space-y-2 md:flex-1"> 
                        <h4 className='font-semibold'>Native Name: <span className='font-light'></span></h4>
                        <h4 className='font-semibold'>Population: <span className='font-light'>{item.population.toLocaleString()}</span></h4>
                        <h4 className='font-semibold'>Region: <span className='font-light'>{item.region}</span></h4>
                        <h4 className='font-semibold'>Sub Region: <span className='font-light'>{item.subregion}</span></h4>
                        <h4 className='font-semibold'>Capital: <span className='font-light'>{item.capital}</span></h4>
                    </div>

                    <div className="space-y-2 md:flex-1 pt-8 md:pt-0"> 
                        <h4 className='font-semibold'>Time Zone: <span className='font-light'>{item.timezones.toLocaleString()}</span></h4>
                        <h4 className='font-semibold'>Currencies: <span className='font-light'></span></h4>
                        <h4 className='font-semibold'>Languages: <span className='font-light'></span></h4>               
                        </div>
                    </div>

                    {item.borders &&
                    <div className="flex pt-5 sm:flex-col">
                    <h4 className='font-semibold pr-2 pt-4'>Border Countries:</h4> 
                    <div className="flex space-x-2 pt-3">
                    {item.borders.map((border, index)=>(
                        <>
                        <span className=' px-2 py-1  bg-White dark:bg-Dark-Blue rounded-sm shadow-md' key={index}>{border}</span>
                        </>
                        
                    ))}   
                    </div>           
                    </div>
                    }

                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SingleCountry