import { PawPrint, Cross, Heart, Bed, ShoppingCart, Dog } from 'lucide-react'

function Cards() {
  const cardData = [
    {
      title: 'Banho & Tosa Especializada',
      text: 'Seu pet merece o melhor! Usamos produtos hipoalergênicos e técnicas de tosa sem estresse. Deixe seu amigo cheiroso e com um visual incrível.',
      icon: <PawPrint />
    },
    {
      title: 'Consulta Veterinária',
      text: 'Consultas, vacinas, exames e emergências. Nossos veterinários estão prontos para cuidar do seu pet a qualquer hora.',
      icon: <Cross />
    },
    {
      title: 'Dia de Spa',
      text: 'Relaxamento total! Banho de ofurô, massagem e hidratação para seu pet sair renovado e super feliz.',
      icon: <Heart />
    },
    {
      title: 'Hotelzinho',
      text: 'Viagem tranquila! Nosso espaço tem monitoramento 24h, brinquedos e camas confortáveis para seu pet se sentir em casa.',
      icon: <Bed />
    },
    {
      title: 'Produtos',
      text: 'Rações naturais, brinquedos seguros e acessórios de qualidade. Tudo que seu pet precisa em um só lugar!',
      icon: <ShoppingCart />
    },
    {
      title: 'Creche',
      text: 'Seu pet socializa e brinca o dia todo com supervisão profissional! Ideal para cães energéticos ou donos ocupados.',
      icon: <Dog />
    }
  ]

  return (
    <div className="w-full px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cardData.map(({ icon, title, text }) => (
          <li
            key={title}
            className="w-full max-w-xs shadow-lg text-center p-6 rounded-2xl bg-white flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex justify-center items-center mb-2 text-[#FBBC05] font-bold">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-850">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cards