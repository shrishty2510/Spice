import React, {useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/navbarmenu.css"
import mainlogo from "./images/banner/main-logo.png"

export const Navbarmenu = () => {
  
  
  const [show, setShow] = useState(true);
  const [navtrue,setnavtrue] = useState('nav-false');
  const [value,setValue] = useState('fas fa-bars');

  let category_name1 = "ctc-spices";
  let category_name2 = "blended-spices";
  let category_name3 = "pure-spices";
  let category_name4 = "soya-chunks";
  let category_name5 = "western-spices";
  let category_name6 = "quick-fry";

  const url =
    "https://www.amazon.in/stores/page/041686AB-A79B-4F17-8E89-81E51C2AB179";
  const controlNavbar = () => {
      if (window.scrollY > 1000) {
          setShow(false)
      } else {
          setShow(true)
      }
      if (window.scrollY > 150) {
        setnavtrue('nav-true')
    } else {
        setnavtrue('nav-false')
    }
  }

  const navclose = (e) =>{
    let result = document.getElementById('btn').checked = false;
    setValue("fas fa-bars");
  }
  const click_function = () => {
    value === "fas fa-bars"
      ? setValue("fa-solid fa-xmark")
      : setValue("fas fa-bars");
  };

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    // className={`${show && 'container'}`}
    <section className="nav-container">
      <nav className={`${show && 'nav'}`} id={navtrue}>
       
        <div className="logo">
          <Link to="/" >
            <img src={mainlogo} alt="pushp-logo" />
          </Link>
            
          </div>
  
            <label htmlFor="btn" className="nav-icon  mt-4 mx-3 " onClick={click_function}>
                <span  className={value}></span>
              </label>
              <input type="checkbox" id="btn"  />

        <ul className="main-ul">
          <li>
            <NavLink className="hover-underline-animation" to="/"  onClick={navclose} >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink className="hover-underline-animation" to="/about-us" onClick={navclose} >
              About
            </NavLink>
          </li>
          <li >
            <label htmlFor="btn-1" className="show">
              Products 
            </label>
            <Link className="hover-underline-animation  " to="#">
              Products
            </Link>
            <input type="checkbox" name="" id="btn-1" />
            <ul className="second-ul">
              <li>
                <NavLink to="/all-products"  onClick={navclose} >All Products</NavLink>
              </li>
              <li className="second-li">
                <label htmlFor="btn-2" className="show">
                  Pushp Masale
                </label>
                <NavLink to="#">Pushp Masale </NavLink>
                <input type="checkbox" name="" id="btn-2" />
                <ul className="third-ul">
                  <li>
                    <NavLink to={`/pushp-product/${category_name1}/`}  onClick={navclose} >
                      CTC Spices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/pushp-product/${category_name2}/`}  onClick={navclose} >
                      Blended Spices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/pushp-product/${category_name3}/`}  onClick={navclose} >
                      Pure Spices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/pushp-product/${category_name4}/`}  onClick={navclose} >
                      Soya Chunks
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to={`/pushp-product/${category_name6}/`}  onClick={navclose} >
                     Quick Fry
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to={`/pushp-product/${category_name5}/`}  onClick={navclose} >
                     Western Spices
                    </NavLink>
                  </li>
                
                </ul>
              </li>
              <li>
                <NavLink to="/munimji-masale"  onClick={navclose} >Munimji Masale </NavLink>
              </li>
            </ul>
          </li>  
          <li>
            <NavLink className="hover-underline-animation" to="/recipe/videos"  onClick={navclose} >
              Recipe
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-underline-animation" to="/gallery"  onClick={navclose} >
              Gallery
            </NavLink>
          </li>

          <li className="">
            <a className=" buy-online " href={url} target="_blank"  onClick={navclose} >
              Buy Online
            </a>
          </li>
          <li>
            <NavLink className="hover-underline-animation" to="career-pushp"  onClick={navclose} >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-underline-animation" to="/csr"  onClick={navclose} >
              CSR
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-underline-animation" to="/contact-us"  onClick={navclose} >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
