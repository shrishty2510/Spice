import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/product_page.css'
import OwlDemo3 from "./ProductSlider3";
import OwlDemo4 from "./ProductSlider1";
import Items from './js/data.js'
import image from "./images/banner/spinner.gif"
import { LazyLoadImage } from "react-lazy-load-image-component";
import './css/product_page.css'
import { Receipe_pushp } from './Receipe_pushp';


export const Product_page = () => {
  const { product_category_url, product_name_url } = useParams();
  // const [product, setProduct] = useState();
  let w;
  let h;

  if (product_category_url === "western-spices") {
    w = "400";
    h = '300';

  }
  else if (product_category_url === "horeca") {

    w = "400";
    h = '450';

  }
  else {

    w = "380";
    h = '420';

  }


  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${product_name_url.toUpperCase().replaceAll("-", " ")} - pusph masale`;

  });



  const url =
    "https://www.amazon.in/stores/page/041686AB-A79B-4F17-8E89-81E51C2AB179";

  return (

    <>
      <section style={{ marginTop: '120px', }}>
        {/* <div className="background_image"> <img src="https://pushpmasale.com/wp-content/uploads/2020/01/product_header_28_01_20.jpg" alt="bg_image" height='500' width='100%' /> </div> */}
        <main>
          <div className="container product_container mt-4">
            <div className="row">


              {Items.filter(item => item.spice_url === product_name_url && item.url === product_category_url).map(filteredItem => (
                <>
                  <div className="col-xl-3  col-lg-4  col-md-12 col-sm-12 col-xs-12">
                    <div className="product_image text-center" data-aos="fade-right" style={{
                      margin: '30px 0px',
                    }}>
                      <LazyLoadImage src={filteredItem.image} width={w} height={h} placeholderSrc={image} effect="blur" alt="item" style={{ objectFit: 'contain' }} />

                    </div>

                  </div>
                  <div className="offset-xl-2 col-xl-6  offset-lg-2  offset-md-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="product_info"
                      style={{
                        margin: '15px 30px 15px 0px',
                        fontFamily: "'Poppins', sans-serif",
                      }}>
                      <div data-aos="fade-left"><h1  >{filteredItem.spice}</h1></div>
                      <div className="usage">
                        <div><p className='h4' >Usage</p></div>
                        <p className='h4' style={{
                          lineHeight: '1.5',
                          letterSpacing: '0.03em',
                          fontSize: '15px',
                          textAlign: 'justify',
                          hyphens: 'auto',
                        }}>{filteredItem.description}
                        </p>
                      </div>

                      <div className="hrline"></div>
                      {filteredItem.recipe ?
                        <>
                          <Accordion id="accordin">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header" style={{ boxShadow: 'none' }}
                            >
                              <Typography   ><div className="recipe">
                                <p className='h4'>Recipe</p></div></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {filteredItem.recipe.map((recipe) => {
                                  return <>
                                    <ul>
                                      <li className='text-danger' >{recipe}</li>
                                    </ul>
                                  </>
                                })}
                                {filteredItem.Note ?
                                  <><div className="note">
                                    <p className='h6 '>Note :</p>
                                    <p className='text-danger' style={{ fontSize: '14px', fontWeight: 'bold' }}>{filteredItem.Note}</p>
                                  </div></> : null

                                }
                                {filteredItem.another ?
                                  <><div className="note">
                                    <p className='h6' style={{ fontWeight: 'bold', }}>Another Usage:</p>
                                    <p className='text-danger' style={{ fontSize: '16px' }}>{filteredItem.another}</p>
                                  </div></> : null

                                }

                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </> : null
                      }


                      {filteredItem.ingredient ?
                        <><div className="ingredient mt-3">
                          <p className='h4'>Ingredient</p>
                          {filteredItem.ingredient.map((ingredient) => {
                            return <>
                              <ul>
                                <li>{ingredient}</li>
                              </ul>
                            </>
                          })}
                        </div></> : null

                      }


                      <div className="package"
                        style={{
                          margin: '10px 0px',
                        }}>
                        <p className='h4'>Packaging Available In</p>
                        <div className='weightage' style={{
                          position: 'relative',
                          paddingRight: '30px',
                          marginTop: '5px',
                          fontSize: '15px',
                        }}>
                          <li className="text-danger"  >{filteredItem.available[0]}</li>
                          <li className="text-danger"  >{filteredItem.available[1]}</li>
                        </div>

                      </div>
                      <div className="" data-aos="flip-down" data-aos-offset="10"><a className='buynow' href={url} target="_blank">Buy Now</a></div>
                      <div className="hrline"></div>
                    </div>
                  </div>
                  {filteredItem.video ?
            <>
             
                <div className="float-right rec-button-con"><a className='rec-button' href="/recipe/videos" target="_blank">View All Recipes</a></div>
                <div className=" row recipe-con container " data-aos="flip-down">
                 
                  <div className="marquee_div col-md-12 col-lg-6 text-center ">
                    <marquee
                      className="marquee_div_rec"
                      behavior="scroll"
                      direction="left"
                      scrollamount="9"
                    >
                      {filteredItem.spice} ❤ Recipe
                    </marquee>
                  </div>
                  <div
                     id="iframe-con" className="col-sm-12 col-md-12 col-lg-6 p-3   container-fluid   text-center "

                  >
                    <iframe style={{width:"90%",height:"100%"}} src={filteredItem.video} title="YouTube video player" frameborder="0" allow="autoplay;"  allowFullScreen></iframe>

                  </div>

                </div>
                <div className="text-center rec-button-con1" ><a className='rec-button1' href="/recipe/videos" target="_blank">View All Recipes</a></div>
             
            </> : null

          }

                  <div>{filteredItem.category === "WESTERN SPICES" ? <OwlDemo4 category_name={filteredItem.category} spice={filteredItem.spice} /> :
                    <OwlDemo3 category_name={filteredItem.category} spice={filteredItem.spice} />}
                  </div>
                  {/* <div>
                  <OwlDemo3 category_name={filteredItem.category} spice={filteredItem.spice}  />
                  </div> */}
                </>
              ))
              }




            </div>
          </div>
        </main>
      </section>
    </>
  )
};
export default Product_page;
