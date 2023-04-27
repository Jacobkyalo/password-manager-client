import Navbar from './components/navbar/index';
import Hero from './components/hero/index';
import AllPasswords from './components/passwords/index';
import Footer from '../home/components/footer/index';

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AllPasswords />
      <Footer />
    </>
  );
};

export default index;
