
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import { TeamsThree } from '../components/TeamsThree'
import { Cta } from '../components/Cta'
import { Topscroll } from '../middlewares/Topscroll'


const HomePage = () => {
  return (
    Topscroll(),
    <>
    <Helmet title='Purrfect Paws | Home' />
    
    <Navbar/>

    <Hero1/>
    
   
    <Hero2/>
    <TeamsThree/>
    <Cta/>
    
    <Footer/>
    


    </>
  )
}

export default HomePage