import React, { useEffect, useState } from 'react'
import { HiMagnifyingGlass} from 'react-icons/hi2';
import { AiOutlineDown} from 'react-icons/ai';
import { Article } from './Article';


const Page = () => {
  const [countries, setCountries] = useState([])
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(['All'])
  const [searchParam] = useState(['common'])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => {
      if(!res.ok){
        throw Error('Couldn\'t fetch') //respose error
      }
      return res.json()
    })
    .then((data)=>{
      setCountries(data)
      setPending(false)
      setError(null)
    })
    .catch(err => {
      setPending(false)
      setError(err.message)
    })
  },[])

  

  function searches(countries) {
    return countries.filter((item) => {
        if(item.region == filter) {
          return searchParam.some((newItem) => {
            return (
                item.name[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) > -1
            );
        });
        } else if (filter == 'All'){
          return searchParam.some((newItem) => {
            return (
                item.name[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) > -1
            );
        });
        }
        
    });
}

  return (
    <div className='bg-Very-Light-Gray dark:bg-Very-Dark-Blue h-full  dark:text-White'>
        <div className="container mx-auto pt-10">
        <div className="flex justify-between md:flex-row flex-col space-y-5 md:space-y-0 px-10 mx-auto md:px-0">
           <div className="bg-White flex items-center space-x-5 dark:bg-Dark-Blue w-full max-w-md py-3 px-5 rounded-sm shadow-md">
            <span><HiMagnifyingGlass /></span>
                <form autoComplete='off' className="w-full">
                    <input className='bg-transparent w-full focus:outline-0' type="text" placeholder='Search for a country...' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                </form>
           </div>
            <div className="bg-White flex items-center space-x-8 cursor-pointer dark:bg-Dark-Blue rounded-sm shadow-md relative max-w-xs">
             
              <select className='bg-White dark:bg-Dark-Blue focus:outline-0 cursor-pointer py-3 px-8 pr-20 rounded-md border-none block w-full appearance-none' onChange={(e)=>setFilter(e.target.value)} name="" id="">
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
                <AiOutlineDown/>
              </div>      
            </div>
        </div>
        </div>
        <div className="">{error}</div>
          <div className="">{isPending && <div className='dark:text-White uppercase tracking-wide flex justify-center items-center text-center text-4xl h-screen'>Loading...</div>}</div>
        <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          
        {searches(countries).map((country)=> (
            
            <Article key={country.name.common} {...country}/>
            
        ))}
        </div>
    </div>
  )
}

export default Page