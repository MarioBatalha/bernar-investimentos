import React from 'react';

import Navbar from './components/Navbar';
import Service from './pages/service';
import About from './pages/about';
import Partner from './pages/partner';
import Contact from './pages/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
