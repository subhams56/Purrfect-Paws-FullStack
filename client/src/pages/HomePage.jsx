

// HomePage.jsx
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import { TeamsThree } from '../components/TeamsThree';
import { Cta } from '../components/Cta';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Navbar from '../components/Navbar';
import { checkAuthentication } from '../middlewares/checkAuthentication';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isAuthenticated = checkAuthentication();

  return (
    <>
      <Helmet title="Purrfect Paws | Home" />

      {isAuthenticated ? <NavbarLoggedIn /> : <Navbar />}

      <Hero1 />
      <Hero2 />
      <TeamsThree />
      <Cta />

      <Footer />
    </>
  );
};

export default HomePage;
