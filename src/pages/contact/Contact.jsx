import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className="contsrlar">
        <div className="container">
          <div className="contactopslar">
            <p>
              <Link className="constlinks" to={"/"}>
               Home 
              </Link>
             / <span>Cantact</span>
            </p>
          </div>
          <div className="contactmain">
            <div className="contactmainleft">
              <div className="calltous">
                <img src="/imgs/icons-phone.svg" alt="" />
                <h2>Call To Us</h2>
              </div>
              <div className="availablenumber">
                <h2>We are available 24/7, 7 days a week.</h2>
                <h3>Phone: +8801611112222</h3>
              </div>
              <div className="writetous">
                <img src="/imgs/icons-mail.svg" alt="" />
                <h2>Write To US</h2>
              </div>
              <div className="custumerserviselar">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <h3>Emails: customer@exclusive.com</h3>
                <h3>Emails: support@exclusive.com</h3>
              </div>
            </div>
            <div className="containermainright">
              <div className="nameemailslar">
                <input type="text" placeholder="Your Name *" />

                <input type="text" placeholder="Your Email *" />
                <input type="text" placeholder="Your Phone *" />
              </div>
              <div className="maininputs">
                <input type="Your Massage" placeholder="Your Massage" />
              </div>
              <div className="sebdmessage">
                <button>Send Massage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
