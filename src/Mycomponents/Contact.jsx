import React, { useEffect, useState } from 'react'
import { AddressMap } from './AddressMap';
import "./css/contact.css"
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export const Contact = () => {
    const [msg,setMsg] = useState('');
    const [open,setOpen] = useState(false);
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });
    const { username,email, message} = contact;
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value });

    };
    const onSubmit = async e =>  {
       try{
        e.preventDefault();
        await axios.post("http://localhost:5000/users/",{
            username: username,
            email: email,
            message: message,
        }
        )
       .then(response => setMsg(response.data.respMesg));
        setContact({ username: "", email: "", message: "" });
        setOpen(true);
       }
       catch(err){
        console.log('unable to send msg....',err);
       }
    };
    
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

  
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - Contact Us`;

    }, []);

    return (
        <>
            <section className="contact-section" style={{ marginTop: '130px', }}>
                <div className="contact-container  mt-3 container">
                    <div className="contact">
                        <div className="left-side">
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">19, Mahavar Nagar,</div>
                                <div className="text-two">Annapurna Main Road, Indore (M.P.)</div>
                            </div>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+91 9285108050</div>
                            </div>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">info@pushpmasale.com</div>
                                <div className="text-two">sales@pushpmasale.com</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text ">Send us a message</div>
                            <p>Fill in the form and we will get back to you at the earliest!</p>
                            {/* <p className=" my-2" style={{color:" #aa1008",}}><b>{msg}</b></p> */}
                            <form method="post" >
                                <div className="input-box">
                                    <input type="text" name='username' value={username} onChange={handleInput} autoComplete='off' placeholder="name" required />
                                </div>
                                <div className="input-box">
                                    <input type="email" name='email' onChange={handleInput} value={email} autoComplete='off' placeholder="email" required/>
                                </div>
                                <div className="input-box message-box">
                                    <textarea className="form-control" rows="3" onChange={handleInput} value={message} placeholder="message" name='message' autoComplete='off' required ></textarea>
                                </div>
                                <div className='d-flex'>
                                    <div className="contact-button" >
                                        <input type="submit" onClick={onSubmit}  className='btn' value="Send Now" />
                                          <Snackbar 
                                            open={open}
                                            autoHideDuration={2000}
                                            message={msg}
                                            onClose={handleClose}
                                            
                                            
                                           />
                                    

                                    </div>
                                    <div className=" contact-icon-flex float-xxl-end mb-4" >
                                        <div className='icon mt-2 '> <a href="https://www.facebook.com/PushpMasale"  target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg></a></div>
                                        <div className='icon mt-2'> <a href="https://twitter.com/PushpMasale"  target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg> </a></div>
                                        <div className='icon mt-2 '> <a href="https://www.instagram.com/pushpmasale/"  target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.146 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.046-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.146.008-2.388.046-3.231.046-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg></a></div>
                                        <div className='icon mt-2'> <a href="https://youtube.com/channel/UCW9NavITPhbOV1laY7UwEeA"  target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-youtube" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg></a></div>
                                        <div className='icon mt-2'> <a href="https://www.linkedin.com/in/pushp-brand-india-pvt-ltd-07b7311b6/" target="_blank">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" className="bi bi-linkedin" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a></div>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
                <div className="container my-5">

                    <div className="text-center mx-2"><AddressMap /></div>

                </div>


            </section>
        </>
    )
};





