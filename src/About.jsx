import React from 'react'

export default function About() {
  return (
    <>
    <div className='primary-bg text-white text-center d-flex flex-column justify-content-center vh-100'>
      <h1>ABOUT COMPONENT</h1>
       <div className="d-flex align-items-center justify-content-center gap-2">
  <div className="bar bg-white"></div>
  <div className="star"><i class="fa-solid fa-star text-white"></i></div>
  <div className="bar  bg-white"></div>
</div>
<div className="about-content row justify-content-center">
  <div className=" col-md-3">
  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
  <div className=" col-md-3">
  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
</div>
    </div>
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
