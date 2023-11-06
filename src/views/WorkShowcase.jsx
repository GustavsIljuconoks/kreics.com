import React, { useRef } from "react";
import { useParams, useLocation } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";
import ScrollButton from '../components/ScrollButton';

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

	const projectInfo = useParams();
	const location = useLocation();
	const propsData = location.state;
	console.log(propsData);

	// TODO:
	// Change project titles all lowercase
	// Change field names for global use
	// Refactor code for photo and video display
	const query = collection(db,`test/${projectInfo.type}/children/${projectInfo.project}/all_photos`,);
	const [docs, loading, error] = useCollectionData(query);

	return (
		<>
			<div
				id="content"
				className="w-full px-8 pt-20 pb-16 md:px-16 xl:px-32">
				<div className="lg:flex w-full">
					<NavBar />

					<div className="w-full lg:w-5/6 text-center">
						<div className="project-module w-full bg-black-10 mb-8">
							<img
								src={propsData.thumbnail}
								srcSet={propsData.thumbnail}
							/>
						</div>

						<div className="description mb-32 p-6 text-start lg:mb-56 lg:p-0">
							<h1 className="text-2xl font-bold mb-4">
								{propsData.eventName}
							</h1>
							<p>{propsData.description}</p>
						</div>

						<Masonry
							breakpointCols={{ default: 3, 800: 1 }}
							className="flex gap-2 lg:w-33">
							{loading && 'Loading...'}

							{docs?.map((doc, idx) => (
								<div key={Math.random()}>
									<LazyLoadImage
										src={doc.imageUrl}
										srcSet={doc.imageUrl}
										effect="blur"
										className="my-4 hover:opacity-70 cursor-pointer"
										onClick={() => {
											lightboxRef.current?.openGallery(
												idx,
											);
										}}
									/>
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
							dynamicEl={docs?.map((image) => ({
								src: image.imageUrl,
								thumb: image.imageUrl,
							}))}></LightGallery>

						<ScrollButton />
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;