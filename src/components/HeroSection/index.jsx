import Pets from '../../assets/pets-ilustration.png'

function HeroSection() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16">
      <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl font-light leading-tight">
          Cuidamos do seu pet com <br />
          <span className="text-[#FBBC05] font-bold">amor e expertise</span>
        </h1>
        <p className="text-[#323232] leading-8 max-w-xl mx-auto md:mx-0">
          No Pet Zoe, oferecemos serviços profissionais de banho, tosa, veterinária e adestramento para seu pet viver mais e melhor.
        </p>
        <button className="py-4 px-10 rounded-full bg-[#FBBC05] text-white font-bold cursor-pointer transition-all duration-500 hover:-translate-y-2">
          Agende um horário
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full max-w-[500px] object-contain" src={Pets} alt="Pets ilustration" />
      </div>
    </div>
  )
}

export default HeroSection