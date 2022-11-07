import React from 'react'
import { useEffect } from 'react';
import './css/about.css';
import pic1 from './images/about/1.jpg'
import pic2 from './images/about/2.avif'

import pic3 from './images/about/3.avif'
import pic4 from './images/about/4.png'


export const About = () => {
    // let aboutimg = {
    //     height: '100vh',
    //     opacity: '1',c


    // }



    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - About Us`;
    }, [])
    return (

        <section style={{ marginTop: '150px', }} className="container-xl container-fluid" >
            {/* <div><img src={bgpic} alt="banner" width='100%' style={aboutimg} /></div> */}
            <main className="main-about">
                <div className="container-xl container-fluid">
                    <div className="row ">
                        <div className="col-sm-12 text-center col-md-12 col-lg-4 float-start infra founder-div">
                            <img className="founder-img  shaded"
                                src={pic1}
                                alt="founder-img" width="100%" height="100%" />
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-8">
                            <div className="about-heading">
                                <h2 className=" habout mt-2">Our Founder </h2>
                            </div>
                            <div className="content1">
                                <p>
                                    Pushp Brand Spices was founded by Late Shri Kishanlalaji Surana in 1974 as a small-scale
                                    industry in Indore, the heart of central India.
                                    From being a family-owned business that catered solely to the Malwa region, the company
                                    since its inception has grown dynamically, not only to become a professionally managed
                                    group of companies but also to cater to the vast Indian market.
                                </p>
                            </div>
                            <div className="content2">
                                <p className="h5 text-lead" style={{ color: '#aa1008', }}>Pushp Brand Spices holds a substantial presence across 20+ states in India</p>
                                <p className="text-justify ">
                                    Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                    Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                    two popular brands of quality spice products - “Pushp” and “Munimji”.
                                </p>
                            </div>
                        </div>



                    </div>
                    {/* <div className="row">
                        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-9 offset-3">
                                <div className="content2">
                                    <p className="h5 text-lead" style={{color:'#aa1008',}}>Pushp Brand Spices holds a substantial presence across 20+ states in India</p>
                                    <p className="text-justify ">
                                        Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                        Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                        two popular brands of quality spice products - “Pushp” and “Munimji”.
                                    </p>
                                </div>
                            </div>
                    </div> */}
                    <div className="row my-3">
                        <div className="col-sm-12 order-sm-2 order-2 order-xl-0 order-lg-0 order-md-0 col-md-7 col-lg-9">
                            <div>
                                <h2 className="habout"> PIONEERS IN THE NATURAL SPICES INDUSTRY</h2>
                            </div>
                            <div className="content1">
                                <p>
                                    Creating a harmonious balance between traditional pounding methods and cutting-edge
                                    technology, Pushp Masale offers you spices that are in their most pristine form, devoid of
                                    any harm, delivering all the goodness straight to your food.
                                </p>
                            </div>
                            <div className="content2">
                                <p className="h4" style={{ color: '#aa1008' }}>
                                    A pure blend of finest spices!
                                </p>
                                <p className=''> It is the quality of spices that makes all the difference in the overall flavour of food.
                                    Unwavering emphasis is given to the quality of raw material that goes into blending it all
                                    comprehensively.</p>
                                <p className="h4" style={{ color: '#aa1008' }}>
                                    Our quality starts from the ground up!
                                </p>
                                <p className=''> Our spices are picked from specific Indian fields, as we follow the stringent rules of
                                    sustainability and best practices. We have seasoned experts involved in every department
                                    leaving no room for any sort of compromise on either quality or practices, giving you the
                                    perfect value for your money and the perfect flavour for your food.</p>
                            </div>

                        </div>
                        <div className="col-sm-12 text-center col-md-5  col-lg-3 offset-lg-0 infra">
                            <img className="img-fluid " src={pic2}
                                width="260px" alt="" />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center col-md-5 col-lg-3 float-start infra">
                            <img className="img-fluid " src={pic3}
                                alt="" />


                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-7 col-lg-9">
                            <div>
                                <h2 className="habout">ADDING SPICES TO YOUR LIVES SINCE 1974</h2>
                            </div>
                            <div className="content1">
                                <p>Today, after almost 48 years of inception, broadened operations and rising competition,
                                    Pushp Spices continues to hold the forte in its domain of processing spices, masala powders
                                    and home food solutions.</p>
                                <p align="justify" className="text-lead">
                                    The blends and spices made <span classNameName=''>at Pushp Masale</span> contain no
                                    fillers, starches, free-flow agents
                                    or additives of any kind, making them rich in flavour and quality. Using our vast knowledge
                                    and experience for your benefit, Pushp Masale offers the widest possible range of <span
                                        className=''> top-quality </span>
                                    spices and blends to meet your every need.</p>
                            </div>

                        </div>
                    </div>
                    {/* <div className="row my-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="content2">
                                <p align="justify" className="text-lead">
                                    The blends and spices made <span classNameName=''>at Pushp Masale</span> contain no
                                    fillers, starches, free-flow agents
                                    or additives of any kind, making them rich in flavour and quality. Using our vast knowledge
                                    and experience for your benefit, Pushp Masale offers the widest possible range of <span
                                        className=''> top-quality </span>
                                    spices and blends to meet your every need.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">

                        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-8 text-dark ">
                            <div>
                                <h2 className="habout font-effect-outline" style={{ wordSpacing: '5px', }}>DELIVERING ONLY THE BEST - OUR HIGHLY EFFICIENT TEAM AND SOPHISTICATED INFRASTRUCTURE</h2>
                            </div>
                            <div className="content1">
                                <p className="text-lead"><span classNameName=''>While the initiation involved spices ground
                                    manually, </span>today we have switched to automatic
                                    machinery in order to keep up with the growing demand while keeping the quality intact. Our
                                    tech-savvy processing units and highly skilled staff are continuously driving the
                                    organisation
                                    to meet the posed challenges while measuring up to the needs of our customers across
                                    multiple spice segments and markets.</p>
                            </div>
                            <div>
                                <ul type="square">
                                    <li className='text-dark h5'>Plant product capacity- 200 metric tonnes per day</li>
                                    <li className='text-dark h5'>Plant - spread over an elaborate 2,15,000 square feet</li>
                                </ul>
                            </div>


                        </div>
                        <div className="col-sm-12 text-center col-md-12 col-lg-12 col-xl-4 float-end infra">

                            <img className="img-fluid"
                                src={pic4}
                                alt="" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="content2 ">
                                <p align="justify" className="text-lead">
                                    It is the combined effort of our core corporate values, state-of-the-art infrastructure,
                                    impeccable safety and hygiene controls, stringent quality controls, customer-driven
                                    processes and dynamic supply chain distribution systems that have led to the Company’s
                                    growth, stature and position, in the market as well as in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section >
    )
};
