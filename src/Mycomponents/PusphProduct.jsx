import React, { useEffect } from 'react'

import { useParams, Link } from 'react-router-dom';
import Categories from './js/data'



const PusphProduct = () => {
    const { category_url } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `${category_url.toUpperCase()} - pusph masale`;

    })



    return (
        <>
            <section style={{ marginTop: '200px', }}>

                <main >
                    <div className="item_container container" >
                        <div data-aos="zoom-in"> <p style={{ fontFamily: " 'Poppins', sans-serif ", fontWeight: 'bold', }} className='text-grey h2 text-center'>{category_url.toUpperCase().replace('-',' ')}</p></div>
                        <hr className='my-3 ' style={{
                            color: 'rgb(206 65 65)',
                            width: '200px',
                            margin: 'auto',
                            opacity: '1',
                        }} />
                        {category_url === 'quick-fry' ?
                            <>
                                <div className="  my-4 px-4" data-aos="fade-down"><h6 className='quick_content ' style={{ letterSpacing: '0.04rem', color: '#CF1007', textAlign: 'center', fontFamily: "'Poppins', sans-serif", }}>Quick Fry is a range of ready mix masalas which has everything premixed in it and is specially made for consumers for whom cooking is difficult along with those who enjoy cooking and love to experiment. It is a complete ready to cook spice blend giving you a delicious and healthy meal while saving your time in the kitchen. Just add salt as per your taste and enjoy the dish.
                                </h6></div>
                            </> : null

                        }
                        <div className="row mt-5" >
                            {Categories.filter(product => product.url === category_url).map(filteredItem => (
                                <>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12" key={filteredItem.id} data-aos="fade-down" data-aos-easing="ease-in-out">
                                        <div className="card mb-5 " style={{ border: 'none' }}>
                                            <div className="card_img text-center">
                                                <Link to={`/product-page/pushp-masale/${filteredItem.url}/${filteredItem.spice_url}`} > <img src={filteredItem.image} width='170' height='210' alt="product_image" /></Link>
                                            </div>
                                            <div className="card_info my-4">
                                                <div><h6 className="text-center text-muted">{filteredItem.category}</h6></div>
                                                <div className='text-center'><Link className="category-link h4 text-decoration-none" to={`/product-page/pushp-masale/${filteredItem.url}/${filteredItem.spice_url}`}>{filteredItem.spice}</Link></div>

                                            </div>
                                        </div>



                                    </div>
                                </>

                            ))}

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
};

export default PusphProduct;
