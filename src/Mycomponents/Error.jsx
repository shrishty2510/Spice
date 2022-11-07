import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - Error`;

    }, []);
 
  return (
    <>
        <div className="errorsetstyle2">
            <h1>404 Error Page</h1>
            <p>Sorry, This page does not exist</p>
            <div className="mt-4 text-center">
                    <NavLink className='btn' to="/" style={{ backgroundColor: ' #aa1008', border: '1px solid  white', margin: 'auto', display: 'block', fontFamily: 'sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '30px', textAlign: 'center', textDecoration: 'none', width: '200px', color: 'white', letterSpacing: '0.1rem', }}>Back To Website</NavLink>
            </div>
        </div>
    </>
  )
}
