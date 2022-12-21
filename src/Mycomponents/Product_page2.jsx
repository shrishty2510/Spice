import React,{ useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/product_page.css'
import OwlDemo2 from "./ProductSlider2";
import Items from './js/munimji_data.js'
import image from "./images/banner/spinner.gif"
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Product_page2 = () => {
  const [masala,SetMasala] = useState('');
  const { product_url, product_name_url } = useParams();
 
    
  const url =
  "https://www.amazon.in/stores/page/041686AB-A79B-4F17-8E89-81E51C2AB179";

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${product_name_url.toUpperCase().replaceAll("-"," ")} - munimji masale`;

  });


  return (

    <>
      <section style={{ marginTop: '120px', }}>
        <main>
          <div className="container product_container mt-4">
            <div className="row">


              {Items.filter(item => item.spice_url === product_name_url).map(filteredItem => (
                <>
                  {/* {SetMasala(filteredItem.spice)} */}
                  <div className="col-xl-3  col-lg-4  col-md-12 col-sm-12 col-xs-12">
                    <div className="product_image text-center" data-aos="fade-right" style={{
                      margin: '30px 0px',
                    }}> <LazyLoadImage src={filteredItem.image} width={300} height={380}  placeholderSrc={image} effect="blur"  alt="item" style={{objectFit:'contain'}} />
                    </div>

                  </div>
                  <div className="offset-xl-2 col-xl-6  offset-lg-2  offset-md-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="product_info"
                      style={{
                        margin: '15px 0px',
                        fontFamily:"'Poppins', sans-serif",
                      }}>
                      <div data-aos="fade-left"><h1  >{filteredItem.spice}</h1></div>
                      <div className="usage">
                        <div><p className='h4'>Usage</p></div>
                        <p  style={{
                          lineHeight: '1.5',
                          letterSpacing: '0.03em',
                          fontSize:'15px',
                          fontFamily:"'Poppins', sans-serif",
                          textAlign:'justify',
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
                              id="panel1a-header" style={{boxShadow:'none'}}
                            >
                              <Typography   ><div className="recipe">
                                <p className='h4'>Recipe</p></div></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {filteredItem.recipe.map((recipe) => {
                                  return <>
                                    <ul>
                                      <li className='text-danger'>{recipe}</li>
                                    </ul>
                                  </>
                                })}
                                {filteredItem.Note ?
                                  <><div className="note">
                                    <p className='h6'>Note :</p>
                                    <p className='text-danger' style={{ fontSize: '14px' }}>{filteredItem.Note}</p>
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
                          fontSize:'15px',
                          fontFamily:"'Poppins', sans-serif",
                        }}>
                          <li className='text-danger'>{filteredItem.available[0]}</li>
                          <li className='text-danger'>{filteredItem.available[1]}</li>
                        </div>

                      </div>
                      <div className=""  data-aos="flip-down" data-aos-offset="10"><a href={url} rel="noopener noreferrer" className="buynow"  target="_blank">Buy Now</a></div>
                      <div className="hrline"></div>
                    </div>
                  </div>
                  <div><OwlDemo2 category_name={filteredItem.category} spice={filteredItem.spice}  /></div>
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
export default Product_page2;

