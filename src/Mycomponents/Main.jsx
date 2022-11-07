import React from "react";
import { useEffect } from "react";
import { Home_products } from "./Home_products";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import "./css/main.css";
import pic3 from "./images/banner/banner_1200_460_1.jpg";
import pic2 from "./images/banner/banner_1200_460_2.jpg";
import pic4 from "./images/banner/banner_1200_460_3.jpg";
import brouchure from './files/Pushp Spices Brouchure.pdf'
import { positions } from "@mui/system";

export const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - Home`;

    }, []);
    // controls={0} indicators={0}
    return (
        <>
            <section style={{ marginTop: "0px", }}>

                <div className="wrapper" style={{ width: "100%", }}>
                {/* <img src={pic3}  class="d-block w-100"  alt="Banner2" width="100%"    /> */}
                    <Carousel fade={1} controls={false}   indicators={false}>
                        <Carousel.Item interval={2000}>
                                <img src={pic3}  class=".img d-block w-100" alt="Banner1" width="100%"/>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                                <img src={pic2}  class=".img d-block w-100"  alt="Banner2" width="100%"    />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                                <img src={pic4}  class=".img d-block w-100"  alt="Banner3" width="100%"    />
                        </Carousel.Item>
                    </Carousel>
                </div>


                <section >
                    <div className="container-fluid container-xxl container1" >
                        <div className="headings " data-aos="fade-down">

                            <h2 className="text-center text-dark">
                                THE FINEST BLEND OF PURITY AND QUALITY
                            </h2>
                            <br />
                            <h4 className="text-center mb-2 ">
                                We deliver the best herbs and spices of India to offer you the
                                most unique food experiences.
                            </h4>
                        </div>
                        <div
                            className=" container-fluid px-4 para col-md-12"
                            data-aos="fade-down"

                        >
                            Established in 1974, Pushp Masale is a pioneer in the field of processing and manufacturing of Pure Spices, CTC Spices, Blended Spices, Ready-to-cook and newly launched Western Spices and other food solutions for your kitchen. Undivided attention is given to procuring raw materials resulting in superior quality spices that are privileged and trusted by the majority of Indian households. A deliberate effort is made to craft our spices without the presence of artificial colors and preservatives. Our state-of-the-art infrastructure facilities ensure safe storage and processing of herbs and spices so that no compromise is made at any level and you get what you deserve- only the finest and the purest of spices.


                        </div>
                    </div>
                </section>

                <section className="product mt-5">
                    {/* <div data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000"> <Owldemo /></div> */}
                    <div>

                        <Home_products />
                    </div>

                    <div className="container">
                        <div className="button my-4" data-aos="flip-down">
                            <Link
                                to="/all-products"
                                className=" d-block  text-decoration-none  text-light"
                            >
                                View products
                            </Link>
                        </div>
                        <br></br>
                    </div>
                </section>

                <section>
                    <div id="con4">
                        <div className="row" data-aos="flip-right">
                            <div
                                className="col-sm-12 col-lg-6 text-center mt-3"
                                style={{ color: "whitesmoke", cursor: "pointer" }}
                            >

                                <a href={brouchure} download target="_blank" type="file" style={{ color: 'white', textDecoration: 'none' }} >
                                    <h1>
                                        Download our E-Catalouge{" "}
                                        <DownloadSharpIcon
                                            sx={{ fontSize: "40px" }}
                                        ></DownloadSharpIcon>
                                    </h1>
                                </a>
                            </div>
                            <marquee
                                className="marquee_div"
                                behavior="scroll"
                                direction="left"
                                scrollamount="9"
                            >
                                PURITY THAT'S FOREVER!
                            </marquee>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};
