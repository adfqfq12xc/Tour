import React, { useRef, useState } from "react";
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";
import { getDatabase, push, set, ref as dbRef } from 'firebase/database'; // Adjust import paths for Firebase modules
import { app } from '../../firebaseconfud';  // Adjust the import path as needed
import './Add.css';
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate=useNavigate()
  const countries = [
    'Select a country',
    'USA',
    'Canada',
    'Australia',
    'India',
    'UK',
    'Germany',
    'France'
    // Add more countries as needed
  ];

  const [selectedCountry, setSelectedCountry] = useState('Select a country');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const nameRef = useRef(null); // Ref for name input
  const infoRef = useRef(null); // Ref for info input

  const saveData = async (imageUrl) => {
    const db = getDatabase(app);
    const infoRefKey = push(dbRef(db, 'info')).key; // Generate a new key for the info reference

    const data = {
      id:infoRefKey,
      city: selectedCountry,
      name: nameRef.current.value, // Access value using ref
      info:  infoRef.current.value,
      img: imageUrl // Save imageUrl to database if needed
    };

    try {
      await set(dbRef(db, `tours/${infoRefKey}`), data); // Set data to the database reference
      console.log("Data saved successfully");
      navigate('/')
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    setUploading(true);
    setError('');

    const storage = getStorage(app);
    const storageRef1 = storageRef(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef1, file);
      const url = await getDownloadURL(storageRef1);
      setImageUrl(url);
      setFile(null);
      saveData(url); // Call saveData with imageUrl
    } catch (err) {
      setError("Failed to upload file");
      console.error(err);
    }

    setUploading(false);
  };

  return (
    <div className="containeradd">
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div className="containerform">
          <p>Selected file: {file.name}</p>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          
          <select id="country" value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)}>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

          <input type="text" placeholder="PutName" ref={nameRef} />
          <input type="text" placeholder="PutInfo" ref={infoRef} />
        </div>
      )}

      {imageUrl && <img src={imageUrl} alt="Uploaded" width="200" />}
      
      {error && <p className="error-message">{error}</p>}
      {imageUrl && <p>Image uploaded successfully!</p>}
    </div>
  );
}

export default Add;
