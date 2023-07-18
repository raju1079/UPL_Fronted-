import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/image');
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container image-gallery">
      <h2>Image Gallery</h2>
      <div className="gallery">
       <div className='row'>
        {images.map((image) => (
            <div className='col-lg-4' key={image.image_id}>
                <div  className="image-item">
                    <img src={`http://localhost:8000/api/image/${image.image_id}`} alt={image.file_name} className='img-fluid' />
                </div>
            </div>
            ))}
       </div>
      </div>
    </div>
  );
};

export default ImageGallery;
