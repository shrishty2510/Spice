// import React, { Component } from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import pic25 from '../images/product images/pusphmasale/Sambhar 100gm.png';
// import pic26 from '../images/product images/pusphmasale/White Powder 100gm.png';
// import pic27 from '../images/product images/pusphmasale/Black Pepper 100gm.png';
// import pic28 from '../images/product images/pusphmasale/Kasoori Methi 100gm.png';
// import pic29 from '../images/product images/pusphmasale/Dry Ginger 100gm.png';
// import pic30 from '../images/product images/pusphmasale/Cumin Powder (Jeera Powder) 100gm.png';
// import pic31 from '../images/product images/pusphmasale/Soya Chunks 100gm.png';
// import pic32 from '../images/product images/pusphmasale/Soya Chunks Mini 100gm.png';
// import pic35 from '../images/product images/pusphmasale/Soya Granules.png';

// const options = {
//     responsive: {
//         0: {
//             items: 1,
//         },
//         400: {
//             items: 1,
//         },
//         600: {
//             items: 2,
//         },
//         800: {
//             items: 3,
//         },
//         1000: {
//             items: 4,

//         }
//     },
// };
// export class Owldemo extends Component {

//     render() {
//         return (
//             <div>
//                 <div class='container-fluid'  >
//                     <div className="row title"  >
//                         <div class="col-sm-12 main-owl-container mb-4">
                           
//                             <p style={{ letterSpacing: '2px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'Ibarra Real Nova', }}>PUSPH MASALE (swad ka superstar)</p>
//                             <hr className='my-4' style={{
//                                 color: 'rgb(206 65 65)',
//                                 width: '460px',
//                                 opacity: '1',

//                             }} />
//                         </div>
//                     </div>
//                 </div>
//                 <div class='container-fluid' >
//                     <OwlCarousel
//                         className="owl-theme"
//                         loop
//                         nav
//                         margin={60}
//                         autoplay={true} {...options} style={{ padding: '0px 50px', }} >
//                         <div class="product-card">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic25} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} class="product-thumb" alt="" />
//                             </div>
//                             <h6 class='text-center text-danger hide my-3 ' >Kashmiri Mirch Powder</h6>


//                         </div>
//                         <div class="product-card">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic3} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

//                             </div>
//                             <h6 class='text-center text-danger hide  my-3' >SABJI MASALA</h6>

//                         </div>
//                         <div class="product-card">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic1} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }}  class="product-thumb" alt="" />
//                             </div>
//                             <div className='hide text-center'><h6 class='text-center text-danger  ml-3  my-3  ' >SHAHI HING</h6></div>

//                         </div>
//                         <div class="product-card ">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic8} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} class="product-thumb" alt="" />
//                             </div>
//                             <h6 class='text-center text-danger hide  my-3' >Poha (Jeeravan) Masala</h6>

//                         </div>
//                         <div class="product-card ">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic5} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

//                             </div>
//                             <h6 class='text-center text-danger hide  my-3 ' >SHAHI PANEER MASALA </h6>

//                         </div>
//                         <div class="product-card ">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic7} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

//                             </div>
//                             <h6 class='text-center text-danger hide  my-3 ' >Achar Masala</h6>

//                         </div>
//                         <div class="product-card ">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic4} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

//                             </div>
//                             <h6 class='text-center text-danger hide  my-3 ' >SHAHI SABJI MASALA</h6>

//                         </div>
//                         <div class="product-card">
//                             <div class="product-image mb-3 ">
//                                 <img src={pic2} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

//                             </div>
//                             <h6 class='text-center text-danger hide  my-3 ' >DAL TADKA MASALA</h6>

//                         </div>



//                     </OwlCarousel>
//                 </div>
//             </div>
//         )
//     }
// }


// export default Owldemo