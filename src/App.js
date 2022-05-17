import React from 'react';

import Service from './pages/service';
import About from './pages/about';
import Partner from './pages/partner';
import Contact from './pages/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <About />
      <Service />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
