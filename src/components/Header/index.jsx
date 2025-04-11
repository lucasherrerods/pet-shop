function Header() {
  return (
    <header className="w-full h-6 p-16 flex items-center justify-between">
      <div>
        <h1 className="tracking-wider font-bold text-3xl">Pet <span className="text-[#FBBC05]">Zen</span></h1>
      </div>
      <nav>
        <ul className="flex items-center gap-10 text-[#323232]">
          <li className="cursor-pointer border-b-4 pb-2 border-white transition-all duration-500 hover:border-[#FBBC05]">
            Home
          </li>
          <li className="cursor-pointer border-b-4 pb-2 border-white transition-all duration-500 hover:border-[#FBBC05]">
            Serviços
          </li>
          <li className="cursor-pointer border-b-4 pb-2 border-white transition-all duration-500 hover:border-[#FBBC05]">
            Sobre
          </li>
          <li className="cursor-pointer border-b-4 pb-2 border-white transition-all duration-500 hover:border-[#FBBC05]">
            Contato
          </li>
        </ul>
      </nav>
      <button className="py-4 px-10 rounded-full bg-[#FBBC05] text-white font-bold cursor-pointer transition-all duration-500 hover:-translate-y-2">
        Agendar
      </button>
    </header>
  )
}

export default Header