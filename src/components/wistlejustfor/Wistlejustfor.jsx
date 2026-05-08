import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import "./Wistlejustforyoular.css"
function Wistlejustfor() {
  return (
    <>
      <div className="sliderboxs">
        <div className="sliderboxtop">
          <div className="rotateplcsace">
            <div className="rotetartvdsze">
              <button>-35%</button>
            </div>
            <div className="rotetarte">
              <button className="outlinerotate">
                <IoEyeOutline />
              </button>
            </div>
          </div>
          <img src="/imgs/computer.svg" alt="" />
          <button className="addtocars">
            <FaShoppingCart /> Add To Cart
          </button>
        </div>
        <div className="sliderbottomlar">
          <div className="titleslar">
            <h2>Gucci duffle bag</h2>
            <div className="ratingsxdasd">
              <span className="currentlarprice">$960</span>
              <span className="pastpricelarda">$1160</span>
            </div>

            <div className="starlsaerda">
              <div className="stars">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <div className="p">(35)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wistlejustfor;
