import Navbar from './components/navbar/index';
import HeroSection from './components/hero/index';
import HowItWorks from './components/how-it-works/index';
import Contribute from './components/contribute/index';
import Footer from './components/footer/index';

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Contribute />
      <Footer />
    </>
  );
};

export default index;
