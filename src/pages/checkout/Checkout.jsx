import React from "react";
import "./Checkouts.css";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <>
      <div className="checkoutsa">
        <div className="container">
          <div className="checkoutro">
            <Link className="acoountsacces" to={"/acount"}>
              <h2>Account</h2>
            </Link>

            /<h2>My Account</h2>/<h2>Product</h2>/
            <Link to={"/cart"}>
            <h2>View Cart</h2></Link>/  
            <h4>CheckOut</h4>

          </div>

          <div className="checkoutmainfeature">
            <div className="mainfeatureleft">
              <h1>Billing Details</h1>
              <div className="chechoutname">
                <h2>First Name*</h2>
                <input type="text" />
              </div>

              <div className="chechoutname">
                <h2>Company Name</h2>
                <input type="text" />
              </div>

              <div className="chechoutname">
                <h2>Street Address*</h2>
                <input type="text" placeholder="" />
              </div>

              <div className="chechoutname">
                <h2>Apartment, floor, etc. (optional)</h2>
                <input type="text" />
              </div>

              <div className="chechoutname">
                <h2>Town/City*</h2>
                <input type="text" />
              </div>

              <div className="chechoutname">
                <h2>Phone Number*</h2>
                <input type="text" />
              </div>

              <div className="chechoutname">
                <h2>Email Address*</h2>
                <input type="text" />
              </div>

              <div className="svaesinfolar">
                <input type="checkbox" />
                <p>Save this information for faster check-out next time</p>
              </div>
            </div>
            <div className="checkfeatureright">
              <div className="chechboxcards">
                <div className="checkboxrow">
                  <div className="checkboxlardarow">
                    <img src="/imgs/Gamepad-Cart-Small.svg" alt="" />
                    <h2>LCD Monitor</h2>
                  </div>
                  <div className="narxiprice">$650</div>
                </div>

                <div className="checkboxrow">
                  <div className="checkboxlardarow">
                    <img src="/imgs/Gamepad-Cart-Small.svg" alt="" />
                    <h2>LCD Monitor</h2>
                  </div>
                  <div className="narxiprice">$650</div>
                </div>
              </div>

              <div className="subtotalchechbox">
                <h2>Subtotal:</h2>
                <span>$1750</span>
              </div>

              <div className="subtotalchechbox">
                <h2>Shipping:</h2>
                <span>Free</span>
              </div>
              <div className="subtotalchechbox">
                <h2>Total:</h2>
                <span>$1750</span>
              </div>

              <div className="bankchoice">
                <div className="inputbank">
                  <input type="radio" />
                  <h4>Bank</h4>
                </div>
                <img src="/imgs/bakslar.svg" alt="" />
              </div>
              <div className="cashdelivered">
                <input type="radio" />
                <h4>Cash on delivery</h4>
              </div>

              <div className="billingdetails">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <div className="placeorder">
                <button>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
