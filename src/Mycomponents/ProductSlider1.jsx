import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/product_page.css'
import { Link } from "react-router-dom";

import categories from './js/data'

let v;

const options = {
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 1,
        },
        600: {
            items: 1,
        },
        800: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
};

export class OwlDemo4 extends Component {


    render() {
        let value = this.props.category_name;
        let value1 = this.props.spice;

        return (
            <>
                
                    <div className='container-fluid my-4' >
                        <div className="h3 text-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 'bolder', letterSpacing: '0.1rem', }}>
                            More From Pushp Brand
                            <hr className='mt-3 mb-5 pushphr' style={{
                                color: 'rgb(206 65 65)',
                                opacity: '1',
                                
                            }} />
                        </div>
                        { value === "WESTERN SPICES"? 
                           <OwlCarousel margin={90} autoplay={true} autoplayTimeout={2000} lazyLoad={true} loop={true} className="owl-theme"  {...options} >
                           {categories.filter(product => product.category === "WESTERN SPICES"  && product.spice !== value1 ).map(filteredItem => (
                               <>

                                   <div className="product-owl-carousel text-center" >

                                       <div className="text-center western-owl-carousel" >
                                           <Link to={`/product-page/pushp-masale/${filteredItem.url}/${filteredItem.spice_url}`}> <img src={filteredItem.image}  alt="product_image"  /></Link>
                                           <h6  className='text-danger my-2 '>{filteredItem.spice}</h6>

                                           
                                       </div>
                                      

                                   </div>




                               </>
                           ))}

                           </OwlCarousel>:null


                        }
                  

                    </div> 

            </>
        )
    }
}


export default OwlDemo4;
