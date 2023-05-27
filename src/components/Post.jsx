import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css"
import { Link, Navigate } from "react-router-dom"
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Add() {
  const [imageUpload, setImageUpload] = useState(null);
  const [upload, setUpload] = useState(false)
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
      });
    });
    setUpload(true)
  };

  return (
    <div className="Add">
      <div className="Absalute">
        <input
      className="chose-btn"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button className="btn btn-outline-primary" onClick={uploadFile}> Upload Image</button>
      </div> 
      <button className="btn btn-back btn-outline-primary "><Link to="/home">back to home</Link></button>
      {upload && <Navigate to="/home" />}
    </div>
  );
}

export default Add;


