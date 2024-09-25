import React from 'react';
import { Link } from 'react-router-dom';  

const Items = ({ itemName, isActive, to }) => {
  return (
    <>
      <li className="nav-item">
        
        <Link className={`nav-link ${isActive ? 'active' : ''}`} aria-current="page" to={to}>
          {itemName}
        </Link>
      </li>
    </>
  );
};

export default Items;


 
export const RepNavBtn = () => {
  return (
    <>
      <button className="btn border-0 rep-nv-btn text-black-50 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" className="nav-rep-btn"
          stroke="currentColor"><path
            strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </>
  );
};

export const NavLogo =({width,height})=>{
  return(
    <>
    <img src="media/logo/nav-logo.webp" alt="Logo"
                        width={width}
                        height={height} />
    </>
  )
}