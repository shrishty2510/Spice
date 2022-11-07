import React from 'react'
import "./css/careers.css"
import { useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import main_pic from './images/banner/career.jpg'
import image from "./images/banner/spinner.gif"
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';


export const Careers = () => {
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);
    const [career, setCareer] = useState({
        firstname: "",
        lastname: '',
        mobile: "",
        email: "",
        department: "",
        myfile: "",
        message: "",
    });
    const { firstname,lastname,mobile,department,myfile,email, message} = career;
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCareer({ ...career, [name]: value });

    }
   

   
    const onSubmit = async e => {
        try {
            e.preventDefault();
            let data = new FormData();
            data.append('file', e.target.myfile);
            await axios.post("http://localhost:5000/send_form/", {
                firstname: firstname,
                lastname: lastname,
                mobile: mobile,
                email: email,
                department: department,
                myfile: data,
                message: message,

            }
            )
            .then(response => setMsg(response.data.respMesg));
            setOpen(true);
            setCareer({
                firstname: "",
                lastname: '',
                mobile: "",
                email: "",
                department: "",
                myfile: "",
                message: "",
            });
           
        }
        catch (err) {
            console.log('unable to send msg....', err);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const show = () => {
        document.getElementById("pageContent").style.backgroundColor = 'black';
        document.getElementById("pageContent").style.opacity = "0.1";
    }
    const unshow = () => {
        document.getElementById("pageContent").style.backgroundColor = 'white';
        document.getElementById("pageContent").style.opacity = "1";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `Careers - pusph masale`;

    }, []);
    return (
        <>
            <div className="container-xxl container-career" id="pageContent" style={{ marginTop: '120px', fontFamily: '"Poppins", sans-serif' }}>

                <div >
                    <div className="slidecontainer">
                                <picture>
                                    <img src={main_pic} alt="career_pic" width="100%"/>
                                </picture>
                    </div>
                    <div className="careercontent  mt-3" >

                        <h1 className="sh">Pushp Brand Spices</h1>

                        <p className='p'>At Pushp,We deliver the best herbs and spices of India to offer our consumers the  most unique food experiences.You only deserve the best and the finest spices.
                            We are always on the look-out for talented people to join our growing team. So, if you are passionate about food & love challenging the norms, you are welcome to join us!
                        </p>
                    </div>
                </div>



            </div>
            <div className="career-container container " >
                <button className="btn" onClick={show} style={{ backgroundColor: ' #aa1008', border: '1px solid  white', margin: '40px auto', display: 'block', fontFamily: 'sans-serif', fontSize: '16px', fontWeight: 'bold', lineHeight: '30px', textAlign: 'center', textDecoration: 'none', width: '180px', color: 'white', letterSpacing: '0.1rem', }} data-bs-toggle="modal" data-bs-target="#exampleModalLong" >
                    Join Us
                </button>
                <div className="modal fade" id="exampleModalLong" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg career-modal modal-fullscreen-sm-down " role="document">
                        <div className="modal-content">

                            <div className="p-2"> <button type="button" onClick={unshow} className="btn-close float-end btn-dark" data-bs-dismiss="modal" aria-label="Close"></button></div>

                            <div className="text-center mt-3 career-join"> <p className="career-title modal-title" id="exampleModalLabel">Join The Team</p>
                                <p className='h5'>Please complete the form below to apply to work with us</p>
                                <hr className="mt-4" style={{ color: ' #aa1008', width: '90%', height: '4px', margin: 'auto', display: 'block', }} />
                            </div>

                            <div className="modal-body">
                                <form encType="multipart/form-data" onSubmit={onSubmit} >
                                    <div className="row">
                                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='firstname'>
                                                First Name</label>
                                            <input type="text" id="firstname"  name='firstname' className="form-control" value={firstname} onChange={handleInput} />
                                        </div>
                                        <div className="  col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='lastname'>
                                                Last Name</label>
                                            <input type="text" id='lastname'  name='lastname' className="form-control" value={lastname} onChange={handleInput} />
                                        </div>



                                    </div>
                                    <div className="row">
                                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='email'>
                                                E-Mail ID</label>
                                            <input type="email" id='email'  name='email' className="form-control" value={email} onChange={handleInput}/>
                                        </div>

                                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='mobile'>
                                                Phone Number</label>
                                            <input type="number" id='mobile' name='mobile' className="form-control"value={mobile} onChange={handleInput} />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='field'>
                                                Department</label>
                                            <input type="text" id='field'  name='department' className="form-control" value={department} onChange={handleInput} />
                                        </div>

                                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <label htmlFor='file'>
                                                Upload Resume</label>
                                            <input type="file" id='file'  name='myfile' className="form-control" value={myfile} onChange={handleInput}/>
                                        </div>

                                    </div>


                                    <div className="mx-4">
                                        <label htmlFor='message'>
                                            Message</label>
                                        <input type="text" id='message' name='message' className="form-control" value={message} onChange={handleInput} />
                                    </div>
                                    <div className="my-3 text-center">
                                    <input type="submit"  className='btn' style={{ backgroundColor: ' #aa1008', border: '1px solid  white', margin: 'auto', display: 'block', fontFamily: 'sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '30px', textAlign: 'center', textDecoration: 'none', width: '150px', color: 'white', letterSpacing: '0.1rem', }} value="Submit" />
                                    <Snackbar
                                        open={open}
                                        autoHideDuration={2000}
                                        message={msg}
                                        onClose={handleClose}


                                    />
                                    </div>

                                </form>
                              
                            </div>
                          


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
