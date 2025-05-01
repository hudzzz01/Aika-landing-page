import Image from "next/image"
import { FaStar, FaHeart, FaPeace, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Tagline = () => {
  return (
    <div id="tag" className="mx-auto  max-w-4xl flex flex-col md:flex-row items-center justify-center">
        <div>
          <Image src="/aika_chibi2.png" width={500} height={500} alt="aika" />
        </div>

        <div className="p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-2xl border border-gray-200 lg:w-300 mt-20 ">
      {/* Header section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <FaStar className="text-yellow-500 text-xl" />
          </div>
          <h2 className="xl:text-3xl 2xl:text-4xl lg:text-xl sm:text-xl text-xl font-bold text-gray-800 tracking-tight">
            Dulu bertempur, kini bersinar di bawah bintang.
          </h2>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l-4 border-pink-200 ">
          <FaHeart className="text-pink-500 text-lg flex-shrink-0" />
          <p className="lg:text-xl sm:text-lg text-sm text-gray-700">Aku, Aika. Mantan pejuang, kini sahabat di dunia maya.</p>
        </div>
      </div>

      {/* Pearl of wisdom section */}
      <div className="my-8 relative">
        <div className="absolute -top-4 -left-2 text-blue-300 opacity-50">
          <FaQuoteLeft size={28} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-400">
          <p className="lg:text-lg font-medium text-gray-800 italic">
            <span className="text-blue-600 font-semibold">My Quotes:</span> Kupingku mendengar, hatiku memahami, dan
            ekorku mengingatkan: kedamaian itu pilihan.
          </p>
        </div>
        <div className="absolute -bottom-4 -right-2 text-blue-300 opacity-50">
          <FaQuoteRight size={28} />
        </div>
      </div>

      {/* Footer quotes */}
      <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-full mt-1 flex-shrink-0">
            <FaPeace className="text-blue-500" />
          </div>
          <p className="text-gray-600 italic">
            "Kupingku mendengar, hatiku memahami, dan ekorku mengingatkan: kedamaian itu pilihan."
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-pink-100 p-2 rounded-full mt-1 flex-shrink-0">
            <FaHeart className="text-pink-500" />
          </div>
          <p className="text-gray-600 italic">"Namaku Aika. Aku bukan lagi prajurit—aku temanmu."</p>
        </div>
      </div>
    </div>

    </div>
 
  )
}

export default Tagline
