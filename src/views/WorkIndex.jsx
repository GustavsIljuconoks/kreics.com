import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "../components/Image";
import "../css/WorkIndex.css"

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from "../firebase/config";

const Work = () => {

    const photoQuery = collection(db, "test/Photo/children");
    const videoQuery = collection(db, "test/Video/children");
    
    const [docs, loading, error] = useCollectionData(photoQuery);
    const [videos] = useCollectionData(videoQuery);

    return (
        <>
           <div id="content" className="w-full lg:px-16 lg:py-20 xl:px-32">
                <div className="lg:flex w-full">
                    
                    <NavBar id="work-sidebar"/>
    
                    <div className="lg:w-5/6 text-center lg:ml-2">
                        <section id="photo-showcase" className="w-full md:flex flex-wrap lg:flex-nowrap items-start">
                        
                            { loading && "Loading..." }

                            <h1 className="project-type text-[30vw] lg:text-[5vw]">photo</h1>

                            <div className="image-collection-container md:-mt-[6.5rem] lg:grid-cols-2 lg:mt-0">
                                {docs?.map(doc => (
                                    <Image imageUrl={doc.imageUrl} key={doc.event_name} eventName={doc.event_name} alt={doc.event_name} description={doc.description} type="Photo"/>
                                ))}
                            </div>
                        </section>
                        
                        <section id="video-showcase" className="w-full md:flex flex-wrap lg:flex-nowrap items-start mt-8">
                            { loading && "Loading..." }

                            <h1 className="project-type w-100 text-[30vw] lg:text-[5vw]">video</h1>

                            <div className="image-collection-container md:-mt-[6.5rem] lg:grid-cols-2 lg:mt-0">
                                {videos?.map(video => (
                                    <Image imageUrl={video.imageUrl} key={video.event_name} eventName={video.event_name} alt={video.event_name} type="Video"/>
                                ))}
                            </div>

                        </section>

                    </div>
                </div>
            </div> 
        </>
    )
}
export default Work