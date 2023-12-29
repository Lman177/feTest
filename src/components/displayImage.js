import React, { useState, useEffect } from 'react';
import api from './api';


const FetchImages = () => {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(10);

  useEffect(() => {
    const fetchImages = async () => {
    const token = localStorage.getItem('token');

      const response = await api.get('file/get/u', {
        params: {
            page: currentPage,
            limit: imagesPerPage
          },
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });

      setImages(response.data);
    };

    fetchImages();
  }, [currentPage]);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
{images.map((image, index) => (
  <div key={index}>
    <a href={`/api/images/${image.fileId}`} target="_blank" rel="noopener noreferrer">
      {image.fileName}
    </a>
  </div>
))}
      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default FetchImages;