import React from 'react';
import NavBar from '../components/NavBar/NavBar';

import { LazyLoadImage } from "react-lazy-load-image-component";

const Main = () => {
  return (
    <div id="content" className="w-full px-8 py-20 sm:p-lg md:px-16 md:py-20 xl:px-32">
        <div className="lg:flex w-full">

            <NavBar />

            <div className="lg:w-5/6 text-center mt-16">
                <h1 className="text-orange text-6xl lg:text-8xl font-bold mb-4">KREICS</h1>

                <h4 className="text-black-70 text-md lg:text-2xl font-bold mb-8">portraying a feeling</h4>

                <div id="photo-box" className="flex justify-center mb-6">
                  <LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/kreics-image-gallery.appspot.com/o/gallery%2Findex.jpg?alt=media&token=d334bee8-f98e-4968-9739-be573e6b8444" width={1000} effect="blur" className='my-4' />
                </div>

                <p className='text-black-40 font-semibold text-md lg:text-2.5xl'>
                  check out my work <a href="/works" className='underline hover:text-black-70'>here</a>.
                </p>                
            </div>
        </div>
  </div>
  )
}

export default Main;