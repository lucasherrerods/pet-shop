import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

function Home() {

  return (
    <div>
      <Header />
      <HeroSection />
      <div className='w-full my-25 mx-auto text-center max-w-xl'>
        <h2 className='text-3xl text-[#323232] font-semibold'>
          Saiba dicas essenciais para dar o conforto que o seu pet merece!
        </h2>
      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default Home