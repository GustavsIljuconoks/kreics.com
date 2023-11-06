import React from 'react';
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Image = (props) => {
  return (
    <>
    <Link to={{ pathname: "/work/" + props.type + "/" + props.eventName}} state={props}>
        <div className='project-cover'>
            <div className="cover-container">
                <div className="cover-image-wrap w-full h-full relative">
                    <div className="cover-image relative">
                        <div className="cover-image-normal" key={props.alt}>
                            <LazyLoadImage src={props.thumbnail} alt={props.alt} className='object-cover' />
                        </div>
                    </div>
                </div>

                <div className="details-wrap">
                    <div className="details">
                        <div className="details-inner w-full p-[0%]">
                               <div className="title-preserver-whitespace text-black-70" key={props.eventName}>
                                    <p>{props.eventName}</p>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    </>
  )
}

export default Image;