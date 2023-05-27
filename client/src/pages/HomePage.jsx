
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'


const HomePage = () => {
  return (
    
    <>
    <Helmet title='Purrfect Paws | Home' />
    
    <Navbar/>

    <Hero1/>
    
   
    <Hero2/>
    
    <Footer/>
    


    </>
  )
}

export default HomePage