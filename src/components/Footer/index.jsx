import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-25 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              Pet Zoe
            </h3>
            <p className="text-gray-300">
              Cuidando do seu pet com amor e expertise desde 2004. Oferecemos os melhores serviços para seu companheiro.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-amber-400 transition cursor-pointer">
                Home
              </li>
              <li className="text-gray-300 hover:text-amber-400 transition cursor-pointer">
                Serviços
              </li>
              <li className="text-gray-300 hover:text-amber-400 transition cursor-pointer">
                Sobre
              </li>
              <li className="text-gray-300 hover:text-amber-400 transition cursor-pointer">
                Contato
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">(11) 4002-8922</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">contato@petzoe.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Rua Pirituba, 123 - Centro</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <div className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-300">Horário de Funcionamento:</p>
              <p className="text-gray-400">Seg-Sex: 8h às 18h<br />Sáb: 9h às 13h</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lucas Herrero</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer