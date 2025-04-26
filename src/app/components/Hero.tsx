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
    <div className='w-screen hover:mt-10 transistion-all duration-500 bg-[url(/bg_aika.png)] hover:scale-110 h-screen bg-cover flex flex-row pt-20 ps-30'>
        <div className='w-2/5 flex h-100 justify-center items-center'>
            <div className='cursor-pointer w-200 p-6 bg-white  rounded-tl-full rounded-br-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500'>
                <div className='ps-60'>

                    <p className='text-4xl hover:scale-150 hover:ms-20 transition-all duration-500'>I'm </p>
                    <h1 className={`text-8xl pt-2 animate-bounce ${colorClass} transition-all duration-500`}>Aika</h1>
                        <h1 className='text-4xl text-pink-500'> Michiru Suhayla Aika</h1>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='text-xl'>
                            Just for fun
                                Konten kreator virtual 
                            
                            </p>
                            <FaCameraRetro  size={40}/>
                        </div>
                        <ul>
                                <li>
                                     
                                    <div className='flex flex-row gap-2 items-center'>
                                        <LuCircleDotDashed />
                                        <p className='text-xl'>
                                            Meme Reaction
                                        
                                        </p>
                                        <LuActivity size={25} />
                                    </div>    
                                            
                                 </li>
                                 <li>
                                     
                                    <div className='flex flex-row gap-2 items-center'>
                                        <LuCircleDotDashed />
                                        <p className='text-xl'>
                                            MMD Animation
                                        
                                        </p>
                                        <GiBurningDot size={25} />
                                    </div>    
                                            
                                 </li>
                                <li>  
                                    <div className='flex flex-row gap-2 items-center'>
                                            <LuCircleDotDashed />
                                            <p className='text-xl'>
                                                Random Game
                                            
                                            </p>
                                            <IoGameController size={25} />
                                        </div>       
                                 </li>
                        </ul>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='text-xl'>
                            Thank you for visiting ✨
                            
                            </p>
                          
                        </div>


           
                </div>
                   

            </div>
        </div>
        <div className='w-2/5'>
            <div className='flex flex-col justify-center items-center absolute top-0'>
                <Image className='aika_no_bg2.png z-3 hover:scale-105 transition-all duration-500' src={'/aika_no_bg.png'} width={800} height={800} alt='aika' />
                <p className='w-70 rounded-full h-50 transform-3d translate-z-12 rotate-x-100 absolute top-250 z-2
                 translate-z-100 bg-pink-400'> </p>
            </div>
        </div>
        <div className='w-1/5'>
            {
                json.galeri.map((item, index) => {
                    return (
                        <div key={index} className=' w-full p-4 mb-2 pe-30'>
                            <Image className='rounded-full border border-5 border-pink-300 hover:scale-103 transition-all duration-500 ' src={item.url} width={500} height={500} alt={item.imageName} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
