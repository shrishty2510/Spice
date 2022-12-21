
import React, { Suspense, lazy, useState, useEffect,memo } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { Main } from "./Mycomponents/Main"
import { Footer1 } from "./Mycomponents/Footer1";
// import { Munimjimasale } from "./Mycomponents/Munimjimasale";
// import { Contact } from "./Mycomponents/Contact";
// import { Quickfry } from './Mycomponents/Quickfry';
// import PusphProduct from './Mycomponents/PusphProduct';
import { Navbarmenu } from './Mycomponents/Navbarmenu';
// import { Video } from './Mycomponents/Video'
import { Careers } from './Mycomponents/Careers'
import { Csr } from './Mycomponents/Csr'
import { Gallery } from './Mycomponents/Gallery'
import { Error } from './Mycomponents/Error'
import { About } from "./Mycomponents/About";
import  {Contact} from "./Mycomponents/Contact";
import logo from "./Mycomponents/images/banner/logo1.jpg"

const Pusphcategory = lazy(() => import('.//Mycomponents/Pusphcategory'));
const  Product_page2 = lazy(() => import('.//Mycomponents/Product_page2'));
const  Product_page = lazy(() => import('.//Mycomponents/Product_page'));
const  PusphProduct = lazy(() => import('.//Mycomponents/PusphProduct'));
const  Munimjimasale = lazy(() => import('.//Mycomponents/Munimjimasale'));
const  Video = lazy(() => import('.//Mycomponents/Video'));

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      },1000);
    }
  });
  
  return (
    <Router>
      <div >
        <Suspense fallback={<div  id="suspense"><img src={logo} width="105px" height="35px" alt="" /></div>}>
        <Navbarmenu />
          <Routes>
            <Route index element={< Main />}></Route>
            <Route path='/about-us' element={< About />}></Route>
            <Route path='/contact-us' element={< Contact />}></Route>
            <Route path='/all-products' element={< Pusphcategory />}></Route>
            <Route path='/pushp-product/:category_url' element={< PusphProduct />}></Route>
            <Route exact path='/product-page/pushp-masale/:product_category_url/:product_name_url' element={< Product_page />}></Route>
            <Route path='/product-page/:product_url/:product_name_url' element={< Product_page2 />}></Route>
            <Route path='/munimji-masale' element={< Munimjimasale />}></Route>
            <Route path='/recipe/videos' element={< Video />}></Route>
            <Route path='/career-pushp' element={< Careers />}></Route>
            <Route path='/csr' element={< Csr />}></Route>
            <Route path='/gallery' element={< Gallery />}></Route>
            <Route path="*" element={< Error />}></Route>
          </Routes>
          <Footer1 />
        </Suspense>
      </div>
    </Router>


  );
}

export default App;
