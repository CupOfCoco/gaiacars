import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="hcontact">
        <h1 data-aos="zoom-out-down" data-aos-duration="1000">
          Wanna be an owner of a Luxury Car ?
        </h1>
        <button
          className="btnstart"
        >
          GET STARTED
        </button>
      </div>

      <div className="mail" data-aos="zoom-in-down" data-aos-duration="1000">
        <h1 className="mailTitle">Save Time,Save Money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button className="btnend">Subscribe</button>
        </div>
      </div>

      <div className="footer">
        <div class="fList"
        data-aos="fade-up"
        data-aos-duration="1000">
          <div class="footer-box">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
          </div>

          <div class="footer-box">
            <h3>Extra Links</h3>
            <a href="#">My account</a>
            <a href="#">My order</a>
            <a href="#">My favorites</a>
          </div>

          <div class="footer-box">
            <h3>Location</h3>
            <a href="#">USA</a>
            <a href="#">Nigeria</a>
            <a href="#">Canada</a>
            <a href="#">UK</a>
          </div>

          <div class="footer-box">
            <h3>Contact Info</h3>
            <a href="#">+ 123-456-7890</a>
            <a href="#">Gaia@gmail.com</a>
            <a href="#">Lagos, Nigeria - 400104</a>
          </div>
        </div>
        <div className="fText">Copyright &copy; 2024 CupofCoco</div>
      </div>
    </>
  );
};
export default Contact;
