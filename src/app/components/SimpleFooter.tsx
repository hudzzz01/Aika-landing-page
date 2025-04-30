import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tentang Kami</h3>
            <p className="text-gray-400 mb-4">
              Kami berkomitmen untuk memberikan layanan terbaik dan pengalaman yang menyenangkan bagi semua pengguna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Jl. Contoh No. 123, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">info@contoh.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nama Perusahaan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default SimpleFooter
