import React, { useRef } from "react";
import { useParams, useLocation } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from "../firebase/config";

import Masonry from 'react-masonry-css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Project = () => {

    const lightboxRef = useRef(null);

    const params = useParams();

    const location = useLocation();
    const propsData = location.state;

    const query = collection(db, `test/Photo/children/${params.project}/all_photos`);
    const [docs, loading, error] = useCollectionData(query);

    return (
        <>
            <div id="content" className="w-full px-8 py-20 sm:p-lg md:px-16 md:py-20 xl:px-32">
                <div className="lg:flex w-full">

                    <NavBar />
      

                    <div className="w-full lg:w-5/6 text-center">
                        <div className="project-module w-full h-[400px] bg-black-10 mb-8"></div>
                    
                        <div className="description mb-32 p-6 text-start lg:mb-56 lg:p-0">
                            <h1 className="text-2xl font-bold mb-4">{propsData.eventName}</h1>
                            <p>{propsData.description}</p>
                        </div>

                        <Masonry breakpointCols={3} className="flex gap-2" columnClassName="">                        

                            {loading && "Loading..."}

                            {docs?.map((doc, idx) => (
                                <div key={Math.random()}>
                                    <LazyLoadImage 
                                        src={doc.imageUrl} 
                                        effect="blur" 
                                        className='my-4 hover:opacity-70 cursor-pointer'
                                        onClick={() => {
                                            lightboxRef.current?.openGallery(idx);
                                        }}/>
                                </div>
                            ))}
                        </Masonry>

                        <LightGallery
                            onInit={(ref) => {
                                if (ref) {
                                    lightboxRef.current = ref.instance;
                                }
                            }}
                            speed={500}
                            download={false}
                            closable
                            licenseKey
                            dynamic
                            dynamicEl={docs?.map(image => ({
                                src: image.imageUrl,
                                thumb: image.imageUrl
                            }))}
                        >                            
                        </LightGallery>

                        <div className="grid grid-cols-1 gap-4 place-items-center ">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">                            


                                {/* <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                </div>
                            

                                <div>
                                    <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                </div> */}
                            </div>

                            {/* <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                </div>              
                            </div>

                            <div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-1">
                                <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-rows-1">
                                <div>
                                    <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                </div>

                                <div>
                                    <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                </div>
                                </div>
                                <div>
                                    <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">              
                                <div className="col-span-2">
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                </div>            
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                </div>
                            </div> */}
                        
                            {/* <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;