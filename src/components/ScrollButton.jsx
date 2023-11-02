import React, { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };


    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behaviour: 'smooth'
      });
    };

  return (
    <>
      <button>
          <FaArrowCircleUp className='text-orange' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
      </button>
    </>
  )
}

export default ScrollButton;