import React from 'react'
import { useEffect } from 'react';
import video from './js/video'
import './css/video.css'
import pic from "./images/banner/logo1.jpg";
export const Video = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Recipe Videos - pusph masale";
    
      });
      
    return (
        <>
            <div className="container-xxl container-fluid" style={{ marginTop: '120px', }}>
                <div className="row">
                    <div className="text-center h1 my-3"><p style={{ letterSpacing: '0.1rem', fontWeight:'700',fontStyle:" 'poppins' sans-serif"}}>Recipe Videos</p></div>
                    {video.map((value) => {
                        return (
                            <>
                                <div className="video-card text-center col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                                    <div className="video-iframe py-4"><iframe width="360" height="250" src={value.frame} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                                    <div><p className=" h4 " style={{ letterSpacing: '0.1rem',color:'#aa1008' }}>{value.receipe_name}</p></div>
                                </div>

                            </>
                        )
                    })}


                </div>
                <div className="video-footer-logo  mt-5"> <hr className="line-right" /> <img  alt="" style={{ width:'220px', height:'30px', objectFit:'cover'}} src={pic} /> <hr className="line-right" /> </div>
                <div className="widget widget_mc4wp_form_widget  text-center mt-5"> 
                   <p className="h5 widget-title">Never Miss a Recipe!</p>
                    <div className="mc4wp-form mc4wp-form-26"> 
                       <div className="mc4wp-form-fields">
                            <p>Join thousands of subscribers and get our best recipes delivered each week!</p>
                            <div className="fields-container text-center">
                                {/* <input type="email" name="email" value="" size="35" placeholder="Your Email Address"/><br/>  */}
                                <a href="https://youtube.com/channel/UCW9NavITPhbOV1laY7UwEeA" className='recipe-button' target="_blank">Subscribe</a>
                            </div> 
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Video;
