import React from 'react'

export default function Contact() {
  return (
<>
  <div>
    <div className="title text-dark text-center p-4">
      <h1>CONTACT SECTION</h1>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <div className="bar bg-dark" />
        <div className="star"><i className="fa-solid fa-star text-dark" /></div>
        <div className="bar bg-dark" />
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <form style={{ width: '100%', maxWidth: '400px' }}>
        <div className="d-flex flex-column">
          <div className="floating-input-group mb-3">
            <input
              className="shadow-sm w-100 border-0 p-2 bg-white rounded"
              id="userName"
              placeholder=" "
              type="text"
            />
            <label htmlFor="userName" className="floating-label">userName :</label>
          </div>

          <div className="floating-input-group mb-3">
            <input
              className="shadow-sm w-100 border-0 p-2 bg-white rounded"
              id="userAge"
              placeholder=" "
              type="text"
            />
            <label htmlFor="userAge" className="floating-label">userAge :</label>
          </div>

          <div className="floating-input-group mb-3">
            <input
              className="shadow-sm w-100 border-0 p-2 bg-white rounded"
              id="userEmail"
              placeholder=" "
              type="email"
            />
            <label htmlFor="userEmail" className="floating-label">userEmail :</label>
          </div>

          <div className="floating-input-group mb-3">
            <input
              className="shadow-sm w-100 border-0 p-2 bg-white rounded"
              id="userPass"
              placeholder=" "
              type="password"
            />
            <label htmlFor="userPassword" className="floating-label">userPassword :</label>
          </div>

          <button className="form-button border-0 rounded-2 primary-bg p-2 text-white w-100">Send message</button>
        </div>
      </form>
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
