import React, { useEffect } from 'react'
import './css/gallery.css'

import pic1 from './images/gallery/15th/1.jpeg'
import pic2 from './images/gallery/15th/2.jpeg'
import pic3 from './images/gallery/15th/3.jpeg'

import pic11 from './images/gallery/women/1.jpeg'
import pic12 from './images/gallery/women/2.jpeg'
// import pic13 from './images/gallery/women/3.jpeg'
// import pic14 from './images/gallery/women/4.jpeg'
// import pic15 from './images/gallery/women/5.jpeg'
import pic16 from './images/gallery/women/6.jpeg'

// import video1 from './images/gallery/15th/11.mp4'
// import video2 from './images/gallery/15th/12.mp4'
// import video3 from './images/gallery/15th/13.mp4'
// import video4 from './images/gallery/15th/14.mp4'



export const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `Gallery - pusph masale`;

    }, []);
    return (
        <>
            <div style={{ marginTop: '130px' }} className="gallery-container container-xxl container-fluid">
                <div className="container  "> <p className='gallery-h h1'>Glimpse Of Pushp Brand</p>
                </div>
                <div className="gallery-container1">
                    <div className="gallery">
                        <div class="content_img">
                        <a href={pic1} rel="noopener noreferrer" target="_blank"> <img src={pic1} width="100%" height="100%" alt="img" /> </a>
                                <div>15th August Independence Day</div>
                        </div>
                        <div class="content_img">
                        <a href={pic2} rel="noopener noreferrer" target="_blank"> <img src={pic2} width="100%" height="100%" alt="img"/> </a>
                                <div>15th August Independence Day</div>
                        </div>
                        <div class="content_img">
                        <a href={pic3} rel="noopener noreferrer" target="_blank"> <img src={pic3} width="100%" height="100%" alt="img" /> </a>
                                <div>15th August Independence Day</div>
                        </div>

                        {/* <video width="300" height="255" controls>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <video width="300" height="255" controls  >
                            <source src={video2} type="video/mp4" />
                        </video>
                        <video width="300" height="255" controls  >
                            <source src={video3} type="video/mp4" />
                        </video>
                        <video width="300" height="255" controls  >
                            <source src={video4} type="video/mp4" />
                        </video> */}
                    </div>

                </div>
                {/* <div className="container"> <p className='gallery-h h2'>Celebration Of Women's Day </p>
                </div> */}
                <div className="gallery-container1">
                    <div className="gallery">
                    <div class="content_img">
                    <a href={pic16} rel="noopener noreferrer" target="_blank"> <img src={pic16} width="100%" height="100%" alt="img" /> </a>
                                <div>Celebration Of Women's Day </div>
                        </div>
                        <div class="content_img">
                        <a href={pic11} rel="noopener noreferrer" target="_blank"> <img src={pic11} width="100%" height="100%" alt="img"/> </a>
                                <div>Celebration Of Women's Day </div>
                        </div>
                        <div class="content_img">
                        <a href={pic12} rel="noopener noreferrer" target="_blank"> <img src={pic12} width="100%" height="100%" alt="img"/> </a>
                                <div>Celebration Of Women's Day </div>
                        </div>
                        {/* <a href={pic13} target="_blank"> <img src={pic13} /> </a>
                        <a href={pic14} target="_blank"> <img src={pic14} /> </a>
                        <a href={pic15} target="_blank"> <img src={pic15} /> </a> */}



                    </div>

                </div>
            </div>


        </>
    )
}

