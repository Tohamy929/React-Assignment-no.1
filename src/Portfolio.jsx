import React from 'react'
import port1 from './assets/poert1.png'
import port2 from './assets/port2.png'
import port3 from './assets/port3.png'
import { useState } from 'react';


export default function Portfolio() {
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioImages = [
    { id: 1, src: port1, alt: 'Portfolio 1' },
    { id: 2, src: port2, alt: 'Portfolio 2' },
    { id: 3, src: port3, alt: 'Portfolio 3' },
    { id: 4, src: port1, alt: 'Portfolio 1' },
    { id: 5, src: port2, alt: 'Portfolio 2' },
    { id: 6, src: port3, alt: 'Portfolio 3' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  return (
    <>
     
      <div className="port-title text-dark text-center my-4">
        <h1 className="fw-bolder">PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <div className="bar bg-dark" />
          <div className="star">
            <i className="fa-solid fa-star text-dark" />
          </div>
          <div className="bar bg-dark" />
        </div>
      </div>

    
      <div className="port-content text-center row justify-content-center align-items-center">
        {portfolioImages.map((image) => (
          <div key={image.id} className="portimg position-relative col-md-4 p-3">
            <img src={image.src} alt={image.alt} />
            <div
              onClick={() => handleImageClick(image)}
              className="text-white primary-bg text-center layer"
            >
              <i className="fa-solid fa-plus position-relative top-50 translate-middle-y" />
            </div>
          </div>
        ))}
      </div>

      
      {isModalOpen && (
        <div
          className="modal-background"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
      <div className="footerno1 bg-dark row d-flex justify-content-around p-5">
    <div className=" text-white text-center col-md-3">
      <h2>LOCATION</h2>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className=" text-white text-center col-md-3">
      <h2>AROUND THE WEB</h2>
      <ul className="d-flex gap-2  justify-content-center list-unstyled footer-list">
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-linkedin-in"></i></li>
        <li><i class="fa-solid fa-globe"></i></li>
      </ul>
    </div>
    <div className=" text-white text-center col-md-3">
      <h2>AROUND THE WEB</h2>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
    </div>
    <footer className=" bg-black text-center text-white p-4">
      <p>Copyright © Your Website 2021</p>
    </footer>
    </>
  )
}
