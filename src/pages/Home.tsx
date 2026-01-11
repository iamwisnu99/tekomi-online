import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Menu from '../components/sections/Menu';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

// Import images
import heroImage from '../assets/hero-cafe.jpg';
import aboutImage from '../assets/about-interior.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery7 from '../assets/gallery-7.jpg';
import gallery8 from '../assets/gallery-8.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero heroImage={heroImage} />
      <About aboutImage={aboutImage} />
      <Menu />
      <Gallery images={galleryImages} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
