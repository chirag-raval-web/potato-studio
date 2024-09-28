import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
  scrollBtn: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'none', // Initially hidden
    cursor: 'pointer',
    zIndex: '1000',
  },
  svg: {
    width: '49px',
    height: '49px',
    fill: 'none',
  },
};
const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);  

   
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);  
      } else {
        setIsVisible(false);  
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id='scrollToTopBtn'
      style={{
        ...styles.scrollBtn,
        display: isVisible ? 'block' : 'none', // Conditionally show/hide button
      }}
      onClick={scrollToTop}
    >
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        style={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.673828"
          y="48.75"
          width="48"
          height="48"
          rx="24"
          transform="rotate(-90 0.673828 48.75)"
          fill="#EA5A0B"
        />
        <path
          d="M25.8372 19.6794L25.8372 32.5943C25.8372 32.9217 25.7265 33.1962 25.505 33.4177C25.2835 33.6392 25.009 33.75 24.6815 33.75C24.3541 33.75 24.0796 33.6392 23.8581 33.4177C23.6366 33.1962 23.5258 32.9217 23.5258 32.5943L23.5258 19.6794L17.8629 25.3423C17.6318 25.5734 17.3621 25.6842 17.0539 25.6746C16.7458 25.6649 16.4761 25.5445 16.245 25.3134C16.0331 25.0823 15.9223 24.8126 15.9127 24.5044C15.9031 24.1962 16.0138 23.9266 16.245 23.6954L23.8726 16.0678C23.9881 15.9522 24.1133 15.8704 24.2482 15.8222C24.383 15.7741 24.5275 15.75 24.6815 15.75C24.8356 15.75 24.9801 15.7741 25.1149 15.8222C25.2498 15.8704 25.375 15.9522 25.4905 16.0678L33.1181 23.6954C33.33 23.9073 33.436 24.1721 33.436 24.49C33.436 24.8078 33.33 25.0823 33.1181 25.3134C32.887 25.5445 32.6125 25.6601 32.2947 25.6601C31.9769 25.6601 31.7024 25.5445 31.4713 25.3134L25.8372 19.6794Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ScrollToTopBtn;

// ScrollToTop.js
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export const StartWithTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when pathname changes
  }, [pathname]);

  return null; // This component does not render anything
};

 
