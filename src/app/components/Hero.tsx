import Image from 'next/image'
import React from 'react'
import json from  '../aika.json'
import { FaCameraRetro } from 'react-icons/fa'
import { LuActivity, LuCircleDotDashed } from 'react-icons/lu'
import { GiBurningDot } from 'react-icons/gi'
import { IoGameController } from 'react-icons/io5'

export default function Hero() {
    const [colorName,setColorname] = React.useState("one");
    const colorClass = {
    one: 'text-red-400',
    two: 'text-pink-500',
    tree: 'text-stone-600',
    }[colorName] || 'text-black';
    setInterval(() => {
        setColorname(colorName === 'one' ? 'two' : colorName === 'two' ? 'tree' : 'one');
    }, 1500);
  return (
    <div className='w-full h-140 hover:mt-10 transistion-all duration-500 bg-[url(/bg_aika.png)] hover:scale-110 sm:w-full sm:h-130 lg:h-150 xl:h-200 2xl:h-300 bg-cover flex flex-row pt-20 lg:ps-30'>
        <div className='w-2/5 sm:w-1/2 lg:w-2/5 flex h-100 justify-center items-center'>
            <div className=' hover:ps-10 sm:hover:p-s0 cursor-pointer sm:h-100 2xl:h-110 2xl:w-full h-110 lg:h-110 w-200 p-6 bg-white h-130 lg:rounded-tr-full xl:rounded-br-2xl xl:pt-12 xl:ps-0 2xl:rounded-tl-full 2xl:rounded-tr-none 2xl:rounded-br-2xl rounded-br-full shadow-2xl hover:shadow-3xl hover:scale-105 sm:hover:scale-110 transition-all duration-500'>
                <div className='2xl:ps-60 lg:ps-10'>

                    <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hover:scale-150 hover:ms-20 transition-all duration-500'>I'm </p>
                    <h1 className={`text-xl sm:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl pt-2 animate-bounce ${colorClass} transition-all duration-500`}>Aika</h1>
                        <h1 className=' text- sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-pink-500'> Michiru Suhayla Aika</h1>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='text-md lg:text-lg xl:text-xl'>
                            Just for fun
                                Konten kreator virtual 
                            
                            </p>
                            <FaCameraRetro  size={40}/>
                        </div>
                        <ul className=''>
                                <li>
                                     
                                    <div className='flex flex-row gap-2 items-center'>
                                        <LuCircleDotDashed />
                                        <p className='text-sm sm:text-lg lg:text-xl'>
                                            Meme Reaction
                                        
                                        </p>
                                        <LuActivity size={25} />
                                    </div>    
                                            
                                 </li>
                                 <li>
                                     
                                    <div className='flex flex-row gap-2 items-center'>
                                        <LuCircleDotDashed />
                                        <p className='text-sm sm:text-lg lg:text-xl'>
                                            MMD Animation
                                        
                                        </p>
                                        <GiBurningDot size={25} />
                                    </div>    
                                            
                                 </li>
                                <li>  
                                    <div className='flex flex-row gap-2 items-center'>
                                            <LuCircleDotDashed />
                                            <p className='text-sm sm:text-lg lg:text-xl'>
                                                Random Game
                                            
                                            </p>
                                            <IoGameController size={25} />
                                        </div>       
                                 </li>
                        </ul>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='text-lg sm:text-xl'>
                            Thank you for visiting ✨
                            
                            </p>
                          
                        </div>


           
                </div>
                   

            </div>
        </div>
        <div className='w-3/5 sm:w-1/2 lg:w-2/5 w-50'>
            <div className='flex flex-col justify-center items-center sm:relative bottom-30 lg:bottom-0 lg:top-0'>
                <Image className=' scale-170 pt-10 sm:scale-80 lg:scale-100 sm:pt-0 hover:scale-175 sm:hover:scale-105 transition-all duration-500' src={'/aika_no_bg.png'} width={800} height={800} alt='aika' />
                {/* <p className='w-70 rounded-full h-50 transform-3d translate-z-12 rotate-x-100 relative top-250 z-2
                 translate-z-100 bg-pink-400'> </p> */}
            </div>
        </div>
        <div className='w-1/5 lg:block hidden'>
            {
                json.galeri.map((item, index) => {
                    return (
                        <div key={index} className=' w-full p-4 mb-2 pe-30'>
                            <Image className='rounded-full border border-5 border-pink-300 hover:scale-103 transition-all duration-500 z-1000' src={item.url} width={500} height={500} alt={item.imageName} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
