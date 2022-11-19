import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/product_page.css'
import { Link } from "react-router-dom";

import categories from './js/munimji_data'
const options = {
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
        600: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};
export class OwlDemo2 extends Component {
    

    render() {
        let value = this.props.category_name;
        let value1 = this.props.spice;
        return (
            <>
                <div className='container-fluid' my-3 >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div className="col-sm-12 h3 text-center" style={{ fontFamily:"'Poppins', sans-serif",fontWeight:'bolder', letterSpacing:'0.1rem' }}>
                        More From Munimji Brand
                            <hr className='my-3 pushphr ' style={{
                                color: 'rgb(206 65 65)',
                                opacity: '1',
                            }} />
                        </div>
                    </div>
                </div>

                <div className='container-fluid my-4' >
                     <OwlCarousel  margin={80} autoplay={true} autoplayTimeout={2000} lazyLoad={true} loop={true} className="owl-theme"  {...options} >
                        {categories.filter(product => product.category === value && product.spice !== value1).map(filteredItem => (
                            <>
                                <div className="product-owl-carousel" >
                                    <div className="">
                                    
                                        <Link to={`/product-page/${filteredItem.url}/${filteredItem.spice_url}`}> <img src={filteredItem.image} alt="product_image" /></Link>

                                        <h6 style={{ marginLeft: '65px' }} className='text-danger my-2 '>{filteredItem.spice}</h6>
                                    </div>

                                </div>

                            </>
                        ))}

                    </OwlCarousel> 
                   
                </div>
               
            </>
        )
    }
}


export default OwlDemo2;
