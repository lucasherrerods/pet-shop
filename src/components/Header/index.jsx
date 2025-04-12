function Header() {
  return (
    <header className="w-full h-6 p-16 flex items-center justify-between">
      <div>
        <h1 className="tracking-wider font-bold text-3xl">Pet <span className="text-[#FBBC05]">Zen</span></h1>
      </div>
      <nav>
        <ul className="flex items-center gap-10 text-[#323232]">
          {['Home', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <li key={item} className="relative cursor-pointer pb-2 transition-colors duration-300 hover:text-[#FBBC05] group">
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FBBC05] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
      <button className="py-4 px-10 rounded-full bg-[#FBBC05] text-white font-bold cursor-pointer transition-all duration-500 hover:-translate-y-2">
        Agendar
      </button>
    </header>
  )
}

export default Header