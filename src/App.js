
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import { Route,  Routes } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
     
     
     <BrowserRouter>
       <Header/> 
       <Routes>
        <Route exact path="/"  element={ <Home/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
        <Route exact path="/projects" element={  <Projects/>} />
        <Route exact path="/about" element={  <About/>} />
        <Route exact path="/skills" element={  <Skills/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
