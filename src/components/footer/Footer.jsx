import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="exculiseive">
            <div className="exculiveleft">
              <h1>Exclusive</h1>
              <h2>Subscribe </h2>
              <h2>Get 10% off your first order</h2>
              <div className="inputdata">
                <input type="text" placeholder="Enter your email" />
              </div>
            </div>
          </div>
          <div className="suppoerts">
            <h2>Support</h2>
            <h3>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h3>
            <h3>exclusive@gmail.com</h3>
            <h3>+88015-88888-9999</h3>
          </div>
          <div className="acounstsalr">
            <h2>Account</h2>
            <h4>My Account</h4>
            <h4>Login / Register</h4>
            <h4>Cart</h4>
            <h4>Wishlist</h4>
            <h4>Shop</h4>
          </div>
          <div className="quicklinks">
            <h2>Quick Link</h2>
            <h4>Privacy Policy</h4>
            <h4>Terms Of Use</h4>
            <h4>FAQ</h4>
            <h4>Contact</h4>
          </div>
          <div className="downlandapp">
            <h2>Download App</h2>
            <p>Save $3 with App New User Only</p>
            <div className="footer_right">
              <img src="/imgs/Qr Code.svg" alt="" />
              <div className="foterimgright">
                <img src="/imgs/GooglePlay.svg" alt="" />
                <img src="/imgs/download-appstore.svg" alt="" />
              </div>
            </div>
            <img src="/imgs/Frame 741.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
