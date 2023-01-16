import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Service from '../MyServices/Service';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
      <About></About>
      <Service></Service>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
        </div>
    );
};

export default Home;