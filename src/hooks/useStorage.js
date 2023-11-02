import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorage = () => {

  //Get all the images from Storage
  const [url, setUrl] = useState(null);

  useEffect(() => {
      const fetchImages = async () => {
          let storageRef = ref(storage, 'gallery');
          let result = await listAll(storageRef);
          let urlPromises = result.items.map(
              (imageRef) => getDownloadURL(imageRef)
          );

          return Promise.all(urlPromises);
      };

      const loadImages = async () => {
          const urls = await fetchImages();
          setUrl(urls);
      };
      loadImages();
  }, []);
}

export default useStorage;