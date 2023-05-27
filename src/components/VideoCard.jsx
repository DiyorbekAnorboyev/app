import {useEffect, useState} from 'react'
import Cards from './Cards';
import {
    ref,
    getDownloadURL,
    listAll,
  } from "firebase/storage";
  import { storage } from "./firebase";


const VideoCard = ({username}) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, `images/`);

    listAll(storageRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        return Promise.all(imagePromises);
      })
      .then(urls => {
        setImageUrls(urls);
      })
      .catch(error => {
        console.error('Error retrieving images:', error);
      });
  }, [imageUrls]);

  return (
    <div>
        { imageUrls.map(url => <Cards url={url} username={username} />) }
    </div>
  )
}

export default VideoCard