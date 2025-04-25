import Image from 'next/image'
import React from 'react'
import json from  '../aika.json'

export default function Hero() {
  return (
    <div className='w-screen hover:mt-10 transistion-all duration-500 bg-[url(/bg_aika.png)] hover:scale-110 h-screen bg-cover flex flex-row pt-20 ps-30'>
        <div className='w-2/5 flex bg-white h-100 justify-center items-center rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500'>
            <div className='w-full p-4 ps-30'>
                <div className=''>

                    <p className='text-4xl'>Hello My name is </p>
                        <h1 className='text-8xl'>Aika</h1>
                        <h1 className='text-4xl'> Michiru Suhayla Aika</h1>
                        
                        <p className='text-lg mt-5'>
                        Just for fun
                            Konten kreator virtual 📷
                           
                        </p>
                        <ul>
                                <li>  ▪️Meme Reaction 🍿 </li>
                                <li>  ▪️MMD Animation💃 </li>
                                <li>  ▪️Random Game 🎮 </li>
                        </ul>


                    <h1>  Thank you for visiting ✨</h1>
                   

                </div>
                   

            </div>
        </div>
        <div className='w-2/5'>
            <div className='flex flex-col justify-center items-center absolute top-0'>
                <Image className='aika_no_bg2.png z-3 hover:scale-105 transition-all duration-500' src={'/aika_no_bg.png'} width={800} height={800} alt='aika' />
                <p className='w-70 rounded-full h-50 transform-3d translate-z-12 rotate-x-100 absolute top-250 z-2
                 translate-z-100 bg-gray-300'> </p>
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
