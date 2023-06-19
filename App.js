import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import "./App.css";
const App = () => {
  return (
    <div>
    <Router>
    <nav>
     <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li> 
        <Link to="/about">About Us </Link>
        </li>
        <li>
        <Link to="/contact">Contact Us</Link>
        </li>
     </ul>
     </nav>

    <Routes>

    <Route index element={<Home />}  />
      <Route path="books"> 
       <Route index element={<b> Books  </b>} />
       <Route path="buy" element={<b> Books buy </b>} />
       <Route path="sell">
         <Route index element={<b> Books sold </b>} />
         <Route path="novel" element={<b> Novels are for sale </b>} />
       </Route>
      </Route>


    <Route path="about" element={<AboutUs />}  />
    <Route path="contact" element={<ContactUs />}  />
    <Route path="*" element={ <PageNotFound />} />



    </Routes>
    <div> Copyright &copy; {new Date ().getFullYear()} </div>
    </Router>
    </div>
  );
};

export default App;