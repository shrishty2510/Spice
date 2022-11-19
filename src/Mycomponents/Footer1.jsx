import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useWindowScroll } from "react-use";
import pic1 from "./images/product images/quickfry/pasta_masala.png"
import pic2 from "./images/product images/quickfry/spice_booster_masala.png"
import pic4 from './images/product images/pusphmasale/Soya Granules.png'
import axios from 'axios'
import './css/footer.css';

const url =
    "https://www.amazon.in/stores/page/041686AB-A79B-4F17-8E89-81E51C2AB179";


export const Footer1 = () => {
    const [msg, setMsg] = useState('');
    const [footer, setFooter] = useState({ query: '' });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFooter({ ...footer, [name]: value });

    };
    const { query } = footer;
    const onSubmit = async e => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:5000/user_query/", {
                query: query,
            })
                .then(response => setMsg(response.data.respMesg));
            setFooter({ query: "" });
        }
        catch (err) {
            console.log('unable to send msg....', err);
        }
    };

    let icon = {
        color: '#e31e24',
        padding: '0px 7px',


    }
    let pstyle = {
        fontSize: '13px',
        color: 'darkgrey',
        letterSpacing: '0.1rem',
        textAlign: 'justify',
        paddingBottom: '25px',

    }

    let footerstyle = {
        // position: "absolute",
        // top:"164vh",
        // width:"100%",
        position: 'relative',
        bottom: '0',
        top: "5vh",
        width: '100%',
        // backgroundColor: "#252525",
        backgroundColor: "black",
        color: 'darkgrey',

    }

    const { y: pageYOffset } = useWindowScroll();
    const [visibile, setVisibile] = useState(false);

    useEffect(() => {
        if (pageYOffset > 300) {
            setVisibile(true)
        }
        else {
            setVisibile(false)
        }

    }, [pageYOffset])

    const scrollTotop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!visibile) {
        return false
    }


    return (
        <>


            <footer
                className="text-center text-lg-start text-white"
                style={footerstyle}
            >

                <div className="container-fluid p-4 pb-0  footer-flex-container">





                    <div className="mb-4 mb-md-0 footer-flex-item">
                        <h4 className="footer-heading mb-4">PUSHP MASALE</h4>
                        <hr className='my-4' />
                        <p className='fintro' style={{ letterSpacing: '0.1rem' }}>“Pushp Brand” feels pleased to take you in the world of pure spices. A world that consists of an eclectic mix of traditional Indian flavours and harmonious health.</p>
                        <div className=" icon-flex mb-4 .col-mb-0" >
                            <div className='icon mt-5 '> <a href="https://www.facebook.com/PushpMasale" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg></a></div>
                            <div className='icon mt-5'> <a href="https://twitter.com/PushpMasale" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg> </a></div>
                            <div className='icon mt-5 '> <a href="https://www.instagram.com/pushpmasale/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.146 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.046-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.146.008-2.388.046-3.231.046-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg></a></div>
                            <div className='icon mt-5'> <a href="https://youtube.com/channel/UCW9NavITPhbOV1laY7UwEeA" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg></a></div>
                            <div className='icon mt-5'> <a href="https://www.linkedin.com/in/pushp-brand-india-pvt-ltd-07b7311b6/" target="_blank">

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-linkedin" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a></div>
                        </div>
                    </div>
                    <div className=" mb-4 mb-md-0  footer-flex-item">
                        <h4 className="footer-heading mb-4">LATEST PRODUCTS</h4>
                        <hr className='my-4' />
                        <div className="mb-4 d-flex">
                            <img src={pic4} alt="" width="73px" className='px-2 rounded' />
                            <div className="text">
                                <Link className="img mr-4 fintroo rounded" to={`/product-page/pushp-masale/soya-chunks/soya-granules`} style={{textDecoration:'none'}}>
                                   Checkout our new product soya granules &  more!
                                </Link>
                                
                            </div>
                        </div>
                        <div className=" mb-4 d-flex ">
                            <img src={pic1} alt="" width="74px" className='px-2 rounded' />
                           
                            <div className="text">
                                <Link className="img mr-4 fintroo rounded" to={`/product-page/pushp-masale/western-spices/pushp-pasta-masala`} style={{textDecoration:'none'}} >
                                   Checkout our new amazing pasta masala & more!
                                </Link>
                                
                            </div>
                        </div>
                        <div className=" mb-4 d-flex">
                            <img src={pic2} alt="" width="74px" className='px-2 rounded' />
                            <div className="text">
                            <Link className="img mr-4 fintroo  rounded" to={`/product-page/pushp-masale/western-spices/pushp-spice-booster-magical-masala`} style={{textDecoration:'none'}}  >
                               Checkout our amazing spice booster masala & more!
                            </Link>
                              
                            </div>
                        </div>

                    </div>


                    <div className="footer-flex-item quick-link">
                        <h4 className="footer-heading  mb-4">QUICK LINKS</h4>
                        <hr className='my-4' />
                        <div className="">
                            <ul className="list-unstyled fintro">
                                <li><Link onClick={scrollTotop} to="/" className="  d-block text-decoration-none ">Home</Link></li>
                                <li><Link onClick={scrollTotop} to="/about-us" className="  d-block  text-decoration-none  ">About</Link></li>
                                <li><Link onClick={scrollTotop} to="/all-products" className=" d-block  text-decoration-none  ">Products</Link></li>
                                <li><Link onClick={scrollTotop} to="/recipe/videos" className=" d-block  text-decoration-none  ">Recipes</Link></li>
                                <li><a onClick={scrollTotop} href={url} target="_blank" className="  d-block  text-decoration-none  ">Buy Online</a></li>
                                <li><Link onClick={scrollTotop} to="/contact-us" className="d-block text-decoration-none   ">Contact</Link></li>

                            </ul>
                        </div>

                    </div>



                    <div className="mb-4 mb-md-0  footer-flex-item">
                        <h4 className="footer-heading mb-4">HAVE QUESTIONS?</h4>
                        <hr className='my-4' />
                        <div className="block-23 mb-3">

                            < p style={pstyle}><i className="fa fa-home" style={icon} aria-hidden="true"></i>
                                Head Off: 19, Mahavar Nagar, Annapurna&nbsp;Road, Indore-452009 (M.P)</p>
                                <a style={{textDecoration:"none"}}  href="tel:7312481134"> <p style={pstyle} ><i className="fa fa-phone" style={icon} aria-hidden="true"></i>+91 7312481134</p></a>    
                            <a  style={{textDecoration:"none"}} href = "mailto: info@pushpmasale.com"> <p style={pstyle} ><i className="fa fa-envelope" style={icon} aria-hidden="true"></i>info@pushpmasale.com</p></a>
                            <div className='d-flex footer-subscribe-div'>

                                <input type="text" value={query} onChange={handleInput} style={{ padding: ' 5px 20px', width: '260px', display: 'inline' }} className="my-2" placeholder='Write your query' name='query' />
                                <button type="submit" onClick={onSubmit} className='footer-subscribe my-2'><SendRoundedIcon /></button>
                            </div>

                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex' }} className="foot1 row">
                    <div className="col-lg-11 col-xl-11 col-sm-10 col-9  text-danger"><p style={{ paddingLeft: '10px', fontSize: '16px', }} >All Rights Reserved: Pushp Brand (India) Pvt. Ltd.</p></div>
                    <div className="col-lg-1 col-xl-1 col-sm-2 col-3">

                        <div className='footbox' data-aos="fade-down" onClick={scrollTotop}><i className="fa fa-chevron-up" aria-hidden="true" ></i>
                        </div>
                    </div>
                </div>
            </footer >


        </>
    )
}
