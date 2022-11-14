import React, { useEffect, useState } from 'react'
import { BsMoonFill, BsMoon} from 'react-icons/bs';


const Navbar = () => {
    const [theme, setTheme] = useState(null)

    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    },[])
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    const handleClick = () =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <>
        <div className=" bg-White dark:bg-Dark-Blue">
            <div className='container mx-auto py-5 px-10 md:px-0'>
            <nav className='flex justify-between items-center'>
                <h1 className='text-md md:text-2xl font-bold dark:text-White'>Where in the world?</h1>
                <div className="flex cursor-pointer" onClick={handleClick}>
                    <div className="mt-1 dark:text-White text-sm md:text-lg">
                        {theme === 'dark' ? <BsMoonFill/> : <BsMoon/>}
                    </div>
                    <button className='ml-2 text-sm md:text-lg font-semibold dark:text-White' type='button' > Dark Mode</button>
                </div>   
            </nav>
            
        </div>
        </div>
        
    </>
  )
}

export default Navbar