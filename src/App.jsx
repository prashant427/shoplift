import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from './component/Home';
import Collection from './component/Collection'
import Costom_design from "./component/Costom design";
import Contact from './component/Contact'
import Footer from './component/Footer'
import './App.css'


function App() {
  

  return (
    <>
    <div id="main" className='w-full h-full '>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Collection" element={<Collection/>}/>
    <Route path="/costom-designe" element={<Costom_design/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/contact " element={<Contact/>}/>
   
    
    </Routes>
    <Footer/>

    
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
