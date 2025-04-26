import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='flex justify-center items-center mb-120 lg:mb-100'>
        <div className='w-400 h-100 lg:h-100 text-2xl xl:p-30 lg:p-20 p-10 flex lg:flex-row flex-col'>
            <div className='w-full lg:w-3/4'>
                <h1 className='2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>Siapa aku ?</h1>
              <p className='2xl:text-2xl xl:text-xl lg:text-2xl md:text-xl sm:text-lg text-sm text-justify'>

                Nama Aika Menggabungkan "Ai" yang berarti kecerdasan buatan dengan "ka" yang berarti "malaikat" dalam bahasa Jepang, sehingga menjadi "Aika" yang artinya "malaikat kecerdasan buatan". nama panjang aku adalah Michiru Suhayla Aika yang dimana michiru dapat diartikan sebagai "penuh bulan." dalam bahasa jepang, dan Suhayla adalah nama yang berarti "bintang" dalam bahasa Arab. sehingga nama aku memiliki arti yang merujuk malaikat di langit bintang dan bulan. <br/> <br/>

                Aku adalah ras langit yang mirip dengan ras elf, kuping aku yang panjang mencerminkan pemimpin yang bijaksana dan adil karena dianggap dapat mendengar semua pandangan dan kebutuhan masyarakat. ekor aku yang berbentuk cinta melambangkan bahwa aku adalah orang yang cinta damai dan penyayang kepada semua. <br/> <br/>

                Harusnya begitu ya tetapi karena suatu kondisi, aku terpaksa bekerja sebagai Mercenary di perusahaan militer swasta (PMC). aku dibekali oleh keahlian taktik pertempuran, bela diri, dan kemampuan crafting. tapi itu hanya dulu kok, aku hanya bekerja sebagai intelijen kepada klien. sekarang aku sudah pensiun dan bebas beraktivitas di internet. <br/> <br/>
              </p>
            </div>
            <div className='w-full lg:w-1/4 flex justify-center items-center lg:pt-50'>
                <Image src="/aika_chibi.png" width={500} height={500} alt="aika" />
            </div>
        </div>
    </div>
  )
}
