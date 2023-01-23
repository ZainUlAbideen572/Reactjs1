import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './Home'
import About from './About'
import Header from "./Header";
import Footer from "./Footer";
function App(){
    return <div>
    <BrowserRouter>
        <Header/>
         <Routes>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>

</div>
}
export default App;