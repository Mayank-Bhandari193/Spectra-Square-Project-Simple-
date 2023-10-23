import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import { Routes,Route} from 'react-router-dom';
//import { Switch, Route, Redirect } from 'react-router-dom';

//import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route  exact path="/" element={<Home />}></Route> 
      <Route  exact path="/about" element={<About />}></Route> 
      <Route  exact path="/works" element={<Works />}></Route> 
      <Route  exact path="/contact" element={<Contact />}></Route> 
      
    </Routes>
    </>
  );
};
export default App;