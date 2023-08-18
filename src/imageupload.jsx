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
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.image_id} className="image-item">
            <img src={`http://localhost:8000/api/image/${image.image_id}`} alt={image.file_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
