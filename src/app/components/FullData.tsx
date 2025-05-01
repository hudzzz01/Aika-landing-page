import Image from 'next/image'
import React from 'react'
import { FaStar, FaRibbon, FaDove, FaBullseye, FaGamepad, FaComments } from "react-icons/fa";
import { GiGalaxy, GiElfEar, GiHeartEarrings } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { MdMilitaryTech } from 'react-icons/md';

export default function FullData() {
  return (
    <div id='fulldata' className='flex justify-center items-center pt-10 sm:pt-100 lg:pt-20'>
    <div  className=' h-100 lg:h-100 text-2xl xl:p-30 lg:p-20 p-10 flex lg:flex-row flex-col'>
        <div className='w-full lg:w-1/4 hidden lg:flex justify-center items-center lg:pt-70'>
            <Image src="/aika_chibi.png" width={500} height={500} alt="aika" />
        </div>
        <div className='w-full lg:w-3/4'>
            {/* <h1 className='2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'> Full Profile Card</h1> */}
            <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-pink-100 via-white to-blue-100 rounded-3xl shadow-2xl border border-pink-300">
            <h2 className="text-xl lg:text-3xl font-bold text-center mb-6 text-pink-700">Profil Karakter</h2>

            <div className="grid grid-cols-1 xl:text-xl 2xl:text-2xl lg:text-lg sm:text-sm text-sm md:grid-cols-2 gap-6">
                <div className="flex items-start">
                <FaStar className="text-pink-600 text-lg lg:text-2xl mr-2" />
                <p><strong>Nama:</strong> Michiru Suhayla Aika</p>
                </div>
                <div className="flex items-start">
                <FaRibbon className="text-pink-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Panggilan:</strong> Aika</p>
                </div>
                <div className="flex items-start">
                <GiGalaxy className="text-pink-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Spesies:</strong> Ras Langit (kadang disalahpahami sebagai Succubus)</p>
                </div>
                <div className="flex items-start">
                <FaDove className="text-blue-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Status:</strong> Pensiunan Mercenary (PMC) | Intelijen Freelance</p>
                </div>
                <div className="flex items-start">
                <FaBullseye className="text-red-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Keahlian:</strong> Taktik, bela diri, crafting, intelijen</p>
                </div>
                <div className="flex items-start">
                <FaGamepad className="text-green-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Aktivitas Saat Ini:</strong> Berkreasi di dunia maya — berbagi cerita, bermain game, menginspirasi</p>
                </div>
                <div className="flex items-start">
                <FaComments className="text-yellow-500 text-lg lg:text-2xl mr-2" />
                <p><strong>Kepribadian:</strong> Ramah, bijaksana, cinta damai, namun tetap tangguh</p>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-start mb-3">
                <BsStars className="text-pink-500 xl:text-xl 2xl:text-2xl lg:text-lg sm:text-sm text-sm mr-2" />
                <p className="font-bold xl:text-xl 2xl:text-2xl lg:text-lg sm:text-sm text-sm">Ciri Khas:</p>
                </div>
                <ul className="list-disc list-inside xl:text-xl 2xl:text-2xl lg:text-lg sm:text-sm text-sm ml-8 text-gray-700 space-y-2">
                <li className="flex items-center">
                    <GiElfEar className="text-blue-500 text-xl mr-2" />
                    Kuping panjang (simbol kebijaksanaan)
                </li>
                <li className="flex items-center">
                    <GiHeartEarrings className="text-pink-500 text-xl mr-2" />
                    Ekor berbentuk hati (simbol cinta damai)
                </li>
                <li className="flex items-center">
                    <MdMilitaryTech  className="text-gray-600 text-xl mr-2" />
                    Aksesoris militer sebagai kenangan masa lalu
                </li>
                </ul>
            </div>
            </div>

        </div>
        <div className='w-full lg:w-1/4 flex lg:hidden justify-center items-center lg:pt-50'>
            <Image src="/aika_chibi.png" width={500} height={500} alt="aika" />
        </div>
    </div>
</div>
  )
}
