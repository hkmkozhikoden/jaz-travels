
import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import './App.css';
import Home from './pages/home';
import './assets/modules/boostrap/bootstrap.css';
import About from './pages/about';
import Contact from './pages/contact';
import Course1 from './pages/blog';
import React, { useEffect } from 'react';
import AOS from 'aos';
import './assets/modules/aos/aos.css';
import ScrollToTop from "./component/scrolltop";
import Kashmir from "./pages/kashmir";
import Delhi from "./pages/delhi";
import Hyderabad from "./pages/hyderabad";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);
  return (
    <div>
       <Router> 
       <ScrollToTop></ScrollToTop>    
    <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Course1/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/kashmir" element={<Kashmir />} />
    <Route path="/delhi" element={<Delhi />} />
    <Route path="/hyderabad" element={<Hyderabad />} />


    </Routes>
    </Router>
    </div>
  );
}
export default App;

