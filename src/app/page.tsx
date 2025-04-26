'use client'
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { store } from './redux/store/store';
import About from "./components/About";
import json from  '../app/aika.json'
import Image from "next/image";
import FullData from "./components/FullData";
import Storytelling from "./components/StoryTelling";


export default function Home() {
  return (
      <Provider store={store}>
      <div className="w-screen mx-auto">
            <div className="w-full  overflow-x-hidden">
              <Hero />
              

            </div>
            <div className="bg-white w-full h-25 lg:hidden w-full flex flex-row mt-10">
                    
                      <div className='w-full lg:hidden flex flex-row items-center justify-center'>
                                    {
                                        json.galeri.map((item, index) => {
                                            return (
                                                <div key={index} className=' w-full p-4 pe-30 flex flex-row items-center justify-around'>
                                                    <Image className='w-20 rounded-full border border-5 border-pink-300 hover:scale-110 transition-all duration-500' src={item.url} width={500} height={500} alt={item.imageName} />
                                                </div>
                                            )
                                        })
                                    }
                      </div>
                
              </div>
              <Navbar/>
              <About/>
              <FullData/>
              <Storytelling/>
          
        
        
      
    </div>
      </Provider>
  );
}
