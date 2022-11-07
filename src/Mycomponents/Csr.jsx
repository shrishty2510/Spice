import React from 'react'
// import video1 from './videos/1.mp4'
// import video2 from './videos/2.mp4'
// import video3 from './videos/3.mp4'
// import video4 from './videos/4.mp4'
// import video5 from './videos/5.mp4'
import "./css/video.css"
import pic1 from './images/csr/Photo1.jpg'
import pic2 from './images/csr/Photo2.jpg'
import pic3 from './images/csr/Photo3.jpg'
import pic4 from './images/csr/Photo4.jpg'
import pic5 from './images/csr/Photo5.jpg'
import pic6 from './images/csr/Photo6.jpg'
import pic7 from './images/csr/Photo7.jpg'

import poster from './images/banner/video-poster.jpg'
import { useEffect } from 'react'
export const Csr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `CSR - pusph masale`;

  }, []);
  return (
    <>
      <div className="container container-csr" style={{ marginTop: '150px', fontFamily: '"Poppins", sans-serif' }}>
        <div className="row">
          <div className="col-xl-6 col-sm-12 text-sm-center img"><img src="https://media.istockphoto.com/photos/top-view-of-teamwork-hands-holding-the-earth-on-a-green-background-picture-id1331030753?b=1&k=20&m=1331030753&s=170667a&w=0&h=aLbuozPy4LrrfL7HrCtQfQxR22ntiz4cE6y9fwKvTL8=" width='500px' height='310px' alt="csr_pic" /></div>
          <div className="col-xl-6 col-sm-12 my-1">
            <h1 className='div-h'>Our Commitment <br />to the Future</h1>
            <p className='div-p mx-2' >Pushp Foundation the Corporate Social Responsibility (CSR) arm of Pushp Masale has been started with the aim of benefitting economically marginalized sections of the society by way of organizing.</p>
            <ul>
              <li>Providing free classes to needy students</li>
              <li>Primary care clinic</li>
            </ul>
          </div>
        </div>

        <div className="container mt-5">
          <h2 className='text-center csr-glimpse mb-3'>Initiative By Pushp Brand</h2>
          <hr className='mb-5 pushphr' style={{
            color: 'black',
            border: '1px black double',
            opacity: '1',
          }} />

        
          <div className="container">
            <div className="csr-flex ">
                  <div class="career_img text-center">
                    <a href={pic4} target="_blank"> <img src={pic4} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic6} target="_blank"> <img src={pic6} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic7} target="_blank"> <img src={pic7} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic3} target="_blank"> <img src={pic3} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic2} target="_blank"> <img src={pic2} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic1} target="_blank"> <img src={pic1} width="100%" height="100%" alt="img" /> </a>
                  </div>
                  <div class="career_img">
                    <a href={pic5} target="_blank"> <img src={pic5} width="100%" height="100%" alt="img" /> </a>
                  </div>

                  

            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}
{/* <video  width="300" height="255"  poster={poster} controls>
<source src={video1} type="video/mp4" />
</video>
<video width="300" height="255" controls  poster={poster}>
<source src={video2} type="video/mp4" />
</video>
<video width="300" height="255" controls  poster={poster}>
<source src={video3} type="video/mp4" />
</video>
<video width="300" height="255" controls  poster={poster}>
<source src={video4} type="video/mp4" />
</video>
<video width="300" height="255" controls  poster={poster}>
<source src={video5} type="video/mp4" />
</video> */}