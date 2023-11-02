import React from "react";
import NavBar from "../components/NavBar/NavBar";

import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <div id="content" className="w-full px-8 py-20 sm:p-lg md:px-16 md:py-20 xl:px-32">
        <div className="lg:flex w-full">
          <NavBar />

          <div className="lg:w-5/6 text-left">
            <div className="text-start text-md lg:text-xl px-10">
              <div id="bio-section" className="mt-6">
                <div id="photo-box" className="flex justify-start mb-6">
                  <LazyLoadImage
                    src="https://firebasestorage.googleapis.com/v0/b/kreics-image-gallery.appspot.com/o/gallery%2Fcontact.jpg?alt=media&token=f88ea833-cf50-4817-ac55-b1802aff307a"
                    width={1000}
                    effect="blur"
                    className="my-4"
                  />
                </div>
                <p className="mt-2 max-w-[1000px]">
                  hello! i am ingus, a <b>filmmaker</b> and a <b>photographer</b> that specializes in capturing life in its
                  purest form. love abstract and alternative approaches to video
                  and photo products. i believe that everyone has a unique
                  perspective, if you are interested in what i can produce -
                  <a href="/contact" className="underline hover:text-black-90">
                    contact me
                  </a>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
