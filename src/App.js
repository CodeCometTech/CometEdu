import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
const App = () => {
    return(
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route exact path="/" element = {<Index/>}/>
                <Route path="/about" element = {<About/>}/>
                <Route path="/blogs" element = {<Blogs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;