import React from 'react'
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import products from "./js/home_products"
import pic1 from './images/product images/owldemo/Hing Mockup 100g.png';
import pic2 from './images/product images/owldemo/QF Dal Tadka Masala.png';
import pic5 from './images/product images/owldemo/QF Shahi Paneer.png';
import pic6 from './images/product images/owldemo/Kashmiri Mirch.png';
import pic7 from './images/product images/owldemo/Achar Masala.png';
import pic8 from './images/product images/owldemo/Poha Masala.png';
import image1 from "./images/banner/spinner.gif"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home_products = () => {

    const [backg , setbackg] = useState({
        one: "",
        two: "",
        three: "",
        four:"",
        five:"",
        six:"",
    });
    const [textc , settextc] = useState({
        one: "",
        two: "",
        three: "",
        four:"",
        five:"",
        six:"",
    });


    const home_background = (event,value) => {
        if (value === "one"){
            setbackg({
                ...backg, one: '#e31e24', two: "",
                three: "",four:"",five:"",six:""
            });
            settextc({
                ...textc, one: 'whitesmoke', two: "",
                three: "",four:"",five:"",six:""
            });
        }
        else if (value === "two"){
            setbackg({
                ...backg, two: '#e31e24', one: "",
                three: "",four:"",five:"",six:""
            });
            settextc({
                ...textc, one: '', two: "whitesmoke",
                three: "",four:"",five:"",six:""
            });
        }
        else if (value === "three"){
            setbackg({
                ...backg, three: '#e31e24', one: "",
                four: "",six:"",two:"",five:"",
            });
            settextc({
                ...textc, one: '', two: "",
                three: "whitesmoke",four:"",five:"",six:""
            });
        }
        else if (value === "four"){
            setbackg({
                ...backg, four: '#e31e24', one: "",
                three: "",six:"",five:"",two:""
            });
            settextc({
                ...textc, one: '', two: "",
                three: "",four:"whitesmoke",five:"",six:""
            });
        }
        else if (value === "five"){
            setbackg({
                ...backg, five: '#e31e24', one: "",
                three: "",two:"",four:"",six:"",
            });
            settextc({
                ...textc, one: '', two: "",
                three: "",four:"",five:"whitesmoke",six:""
            });
        }
        else if (value === "six"){
            setbackg({
                ...backg, six: '#e31e24', one: "",
                three: "",two:"",four:"",five:"",
            });
            settextc({
                ...textc, one: '', two: "",
                three: "",four:"",five:"",six:"whitesmoke"
            });
        }
        
       
    }
    return (
        <>
            <div className="container-fluid container-xl home-products">
                <div data-aos="flip-down" data-aos-offset="100" data-aos-duration="1000">  <p className="text-center home-product-title mb-5" >PUSHP MASALE <br/> (<span className="" style={{letterSpacing:'0.4rem',color:'#aa1008',}}>SWAD KA SUPERSTAR</span>) </p></div>
                <div className="row " onMouseOver={event => home_background(event, 'one')}>
                    <div className=" col-sm-12 col-md-12   col-xl-5 offset-xl-1 text-center " data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                       <Link to={`/product-page/pushp-masale/shahi-hing/shahi-hing-asafoetida`}><LazyLoadImage src={pic1}  placeholderSrc={image1} effect="blur" alt="product" /></Link>
                    </div>
                    <div className=" col-sm-12 col-md-12   col-xl-6  mt-5 text-center"   data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000">
                        
                        <div className="">
                            <p className='h3 product-home' style={{ backgroundColor : backg.one , color: textc.one, display:'inline-block' }} >Shahi Hing </p>
                        </div>
                        <div className="" >
                            <p >Hing or Asafoetida is notoriously known for its signature pungency and heavy flavour, however, this spice has the potential to change the entire texture and flavour of your dish.Pushp Shahi Hing is one of the finest hing available anywhere in the market.</p>

                        </div>
                    </div>
                </div>
                <div className='row '  onMouseOver={event => home_background(event, 'two')}>
                    <div className=" offset-xl-1  col-md-12  col-sm-12  col-xl-5  mt-5  order-sm-2 order-2 order-xl-0 order-lg-2 order-md-2 text-center " data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000">
                        <div className="">
                            <p className='h3 product-home' style={{ backgroundColor : backg.two , color: textc.two, display:'inline-block' }}>Achar Masala</p>
                        </div>
                        <div className="" >
                            <p >Prepare the most amazing pickles and condiments using Pushp Achar Masala, flavoursome blend of freshly grounded spices. A great side to Indian dishes, pickles add punch to the everyday food.</p>

                        </div>
                    </div>
                    <div className=" col-sm-12  col-md-12  col-xl-6 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                    <Link to={`/product-page/pushp-masale/blended-spices/achar-masala`}><LazyLoadImage src={pic7}  placeholderSrc={image1} effect="blur" alt="product" /></Link>
                    </div>
                </div>
                <div className="row"  onMouseOver={event => home_background(event, 'three')} >
                    <div className=" col-sm-12  col-md-12  col-xl-5 offset-xl-1 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                    <Link to={`/product-page/pushp-masale/ctc-spices/poha-jeeravan-masala`}><LazyLoadImage src={pic8}  placeholderSrc={image1} effect="blur" alt="product" /></Link>
                    </div>
                    <div className=" col-sm-12   col-xl-6 mt-5 text-center" data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000">
                        
                        <div className="">
                            <p className='h3' style={{ backgroundColor : backg.three ,color: textc.three, display:'inline-block' }}>Poha Masala Jeeravan</p>
                        </div>
                        <div className="">
                            <p >Pushp Poha Jeeravan Masala is a blend that is best used with Poha. Poha is cooked with a lot of ingredients including fennel seeds, cumin seeds, curry leaves and adding Pushp Poha Masala.</p>

                        </div>
                    </div>
                </div>
                <div className='row'  onMouseOver={event => home_background(event, 'four')} >
                    <div className="offset-xl-1  col-sm-12 col-md-12   col-md-12 col-xl-5  order-sm-2 order-2 order-xl-0 order-lg-2 order-md-2 mt-5 text-center" data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000">
                        <div className="">
                            <p className='h3' style={{ backgroundColor : backg.four ,color: textc.four, display:'inline-block' }}>Kashmiri Mirch Powder</p>
                        </div>
                        <div>
                            <p  >The rich red colour of Kashmiri Mirch Powder adds both spicy flavour and colour to your food. A blend of medium spicy red pepper used in Tandoori preparations Pushp Kashmiri Mirch Powder eliminates the need of adding any artificial colour to your food.</p>

                        </div>
                    </div>
                    <div className="  col-sm-12 col-md-12   col-xl-6 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                    <Link to={`/product-page/pushp-masale/ctc-spices/kashmiri-mirch-powder`}><LazyLoadImage src={pic6}  placeholderSrc={image1} effect="blur" alt="product" /></Link>
                    </div>
                </div>
                <div className="row"  onMouseOver={event => home_background(event, 'five')} >
                    <div className=" col-sm-12 col-md-12   col-xl-5 offset-xl-1 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                    <Link to={`/product-page/pushp-masale/quick-fry/dal-tadka-masala`}> <LazyLoadImage src={pic2}  placeholderSrc={image1} effect="blur" alt="product" /></Link>
                       
                    </div>
                    <div className=" col-sm-12  col-xl-6 mt-5 text-center" data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000">
                        
                        <div className="">
                            <p className='h3' style={{ backgroundColor : backg.five , color: textc.five, display:'inline-block' }}>Quick fry Dal Tadka Masala</p>
                        </div>
                        <div className="">
                            <p >Add zing to your everyday daal with this blended spice  mix. A premix of quality tadka spices  blended in together, so all you need is Pushp Quick Fry  Dal Tadka Masala to make your daal delicious.</p>

                        </div>
                        {/* data-aos="fade-down" data-aos-offset="100" data-aos-duration="1000" data-aos-once="true" */}
                        <div className="quick-dal" > 
                            <span>No need to add any other spices!<br/>just add salt.</span> 
                        </div>
                    </div>
                </div>
                <div className='row'  onMouseOver={event => home_background(event, 'six')}>
                    <div className="offset-xl-1 col-sm-12 col-md-12   col-xl-5  order-sm-2 order-2 order-xl-0 order-lg-2 order-md-2 mt-5" data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000">
                        <div className="text-center">
                            <p className='h3' style={{ backgroundColor : backg.six ,color: textc.six, display:'inline-block' }}>Quick Fry Shahi Paneer Masala</p>
                        </div>
                        <div >
                            <p >Make Shahi Paneer within minutes with Pushp Quick Fry Shahi Paneer Masala. It is the perfect blend of freshly roasted and ground spices to add quick flavour & delicacy to your paneer gravy dish.</p>

                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-12   col-xl-6 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                    <Link to={`/product-page/pushp-masale/quick-fry/shahi-paneer-masala`}> <LazyLoadImage src={pic5} placeholderSrc={image1} effect="blur" alt="product" /></Link>
                       
                    </div>
                </div>
            </div>
        </>
    )
}