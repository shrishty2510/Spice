
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./css/pusphcategory.css"
import categories from './js/munimji_data'



export const Munimjimasale = () => {
  const [data, setData] = useState(categories);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `MUNIMJI MASALE - pusph masale`;

  }, []);
  return (
    <>
      <section style={{ marginTop: '200px', }}>
        
       
        <main>
          <div className="container mt-5">
            <div data-aos="zoom-in"> <h1 className='text-dark text-center m-4' style={{ fontFamily: "'Poppins', sans-serif", fontWeight:'bold', }}>Our Products</h1></div>
            <hr className='my-3 ' style={{
              color: 'rgb(206 65 65)',
              width: '250px',
              margin: 'auto',
              opacity: '1',
            }} />
            <div className="text-center  mt-4" data-aos="fade-down"><h6 className='  text-danger'  style={{ fontFamily:"'Poppins', sans-serif", color:'#CF1007',letterSpacing: '0.1rem',}}>Primary, handpicked, quality spices traditionally pounded to give your food the best flavours every day.
            </h6></div>
          
            <div className="row ">
              {data.map((values, index) => {
                const { id, image, category, url,spice,spice_url } = values;
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"  data-aos="fade-down">
                      <div className="card  mt-5">
                        <div className="card_img text-center">
                          <Link  to={`/product-page/${url}/${spice_url}`}><img src={image}  width='170' height='210' alt="product_image" /></Link>
                        </div>
                        <div className="card_info my-4">
                          <div><h6 className="text-center text-muted">{category}</h6></div>
                          <div className='text-center'><Link className="category-link h5 text-decoration-none" to={`/product-page/${url}/${spice_url}`}>{spice}</Link></div>

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
};
export default Munimjimasale;
