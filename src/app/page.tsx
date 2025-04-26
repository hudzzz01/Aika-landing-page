'use client'
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { store } from './redux/store/store';
import About from "./components/About";


export default function Home() {
  return (
    <div className="w-screen mx-auto">
      <Provider store={store}>
          <div className="w-full  overflow-x-hidden">
             <Hero />
             <div className="bg-pink-200 w-full h-20">

            </div>
            <Navbar/>
            <About/>

          </div>
         
      
        
      
      </Provider>
    </div>
  );
}
