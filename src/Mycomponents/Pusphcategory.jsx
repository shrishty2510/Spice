import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import {  Link } from "react-router-dom";


import "./css/pusphcategory.css"
import categories from './js/data'

import pic1 from "./images/product images/owldemo/ctc.png";
import pic2 from "./images/product images/owldemo/blended category.png";
import pic3 from "./images/product images/owldemo/pure category.png";
import pic4 from "./images/product images/owldemo/soya category.png";
import pic5 from "./images/product images/owldemo/quick category.png";
import pic6 from "./images/product images/owldemo/western category.png";
import pic7 from "./images/product images/owldemo/Jar.png";
import pic8 from "./images/product images/owldemo/hing mockup.png";
import logo from "./images/banner/logo1.jpg"
import image1 from "./images/banner/spinner.gif"
import { LazyLoadImage } from "react-lazy-load-image-component";



console.log(image1)
export const Pusphcategory = () => {
  const [data, setData] = useState(categories);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');

  const [product, setProduct] = useState('All Products')
  const productsection = useRef(null);


  const gotoproductsection = () => {
    window.scrollTo({ top: productsection.current.offsetTop, behavior: 'smooth' });
  }

  const filterItem = (catItem) => {
      const result = categories.filter((currData) => {

        setProduct(catItem);
        if (catItem === "CTC SPICES") {
          setValue('active'); setValue1(''); setValue6(''); setValue2(''); setValue3('');setValue4('');setValue5('');setValue7('');
        }
        else if (catItem === "BLENDED SPICES") {
          setValue1('active'); setValue(''); setValue6(''); setValue2(''); setValue3('');setValue4('');setValue5('');setValue7('');
        }
        else if (catItem === "PURE SPICES") {
          setValue2('active'); setValue1(''); setValue6(''); setValue(''); setValue3('');setValue4('');setValue5('');setValue7('');
        }
        else if (catItem === "SOYA CHUNKS") {
          setValue3('active'); setValue1(''); setValue6(''); setValue2(''); setValue('');setValue4('');setValue5('');setValue7('');
        }
        else if (catItem === "WESTERN SPICES") {
          setValue5('active'); setValue1(''); setValue2(''); setValue('');setValue4('');setValue3('');setValue7('');setValue6('');
        }
        else if (catItem === "HORECA") {
          setValue6('active'); setValue1(''); setValue2(''); setValue('');setValue4('');setValue3('');setValue5('');setValue7('');
        }
        else if (catItem === "SHAHI HING") {
          setValue7('active'); setValue1(''); setValue2(''); setValue('');setValue4('');setValue3('');setValue5('');setValue6('');
        }
        return currData.category === catItem;
  
      });
      setData(result);
    
    
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `PUSPH CATEGORY MASALE - pusph masale`;

  }, [])


  return (
    <>
      <section style={{ marginTop: '200px', }}>


      
        <div className=" container " data-aos="fade-up">
          
           <div className="text-dark   pushp_category-h1 mb-5 container"> <h1 className=''>Category</h1></div>
          <div className="flex-containerr ">
           <div onClick={gotoproductsection} className="product-flex-item" >
              <div><Link className="category text-decoration-none" to="" onClick={() => filterItem('CTC SPICES')}> <img src={pic1} alt="ctc spices" width='200' height='117'/></Link></div>
              <div><Link id={value} className="category-link h5 text-decoration-none " to="" onClick={() => filterItem('CTC SPICES')}>CTC SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item"  >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('BLENDED SPICES')}> <img src={pic2} alt="ctc spices"  width='205' height='116' /></Link></div>
              <div><Link id={value1} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('BLENDED SPICES')}>BLENDED SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item" >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('QUICK FRY')}> <img src={pic5}  alt="soya chunks"  width='200' height='117'/></Link></div>
              <div><Link id={value4} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('QUICK FRY')}>QUICK FRY</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item " >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('HORECA')}> <img src={pic7} alt="horeca"  width='200' height='117' /></Link></div>
              <div><Link id={value6} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('HORECA')}>HORECA</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item" >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('SOYA CHUNKS')}> <img src={pic4}  alt="soya chunks"  width='200' height='117'/></Link></div>
              <div><Link id={value3} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('SOYA CHUNKS')}>SOYA CHUNKS</Link></div>
            </div>
          
            <div onClick={gotoproductsection} className="product-flex-item"  >
              <div><Link className="category text -decoration-none" to="" onClick={() => filterItem('PURE SPICES')}> <img src={pic3}  width='205' height='116' alt="pure spices" /></Link></div>
              <div> <Link id={value2} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('PURE SPICES')}>PURE SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item " >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('SHAHI HING')}> <img src={pic8} alt="soya chunks"  width='200' height='127' /></Link></div>
              <div><Link id={value7} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('SHAHI HING')}>SHAHI HING</Link></div>
            </div>
            <div onClick={gotoproductsection} className="product-flex-item " >
              <div><Link className="category  text-decoration-none" to="" onClick={() => filterItem('WESTERN SPICES')}> <img src={pic6} alt="soya chunks"  width='200' height='117' /></Link></div>
              <div><Link id={value5} className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('WESTERN SPICES')}>WESTERN SPICES</Link></div>
            </div>
           
           </div>
          

        </div>
        <main ref={productsection} >
          <div className="item_container container" >
            <div className=' Pusphcategory-h2' data-aos="zoom-in"> <p style={{ letterSpacing: '0.07rem', }} className='h2 '>{product}</p></div>
            <div className="row mt-5" >
              {data.map((values, index) => {
                const { id, image, category, spice_url,spice,url} = values;
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index} data-aos="fade-down" data-aos-easing="ease-in-out">
                      <div className="card mb-5 ">
                        <div className="card_img text-center">
                          <Link to={`/product-page/pushp-masale/${url}/${spice_url}`} > <LazyLoadImage src={image} width={170} height={210}  placeholderSrc={image1} effect="blur" alt="product_image" /></Link>
                        </div>
                        <div className="card_info my-4">
                          <div><h6 className="text-center text-muted">{category}</h6></div>
                          <div className='text-center'><Link className="category-link h4 text-decoration-none" to={`/product-page/pushp-masale/${url}/${spice_url}`}>{spice}</Link></div>

                        </div>
                      </div>



                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
export default Pusphcategory;
