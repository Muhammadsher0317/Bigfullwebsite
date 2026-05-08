import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function Boxwishlist() {
  return (
    <>
      <div className="sliderboxwhishlist">
        <div className="sliderboxtop">
          <div className="rotateplcsace">
            <div className="rotetartvdsze">
              <button>-35%</button>
            </div>
            <div className="rotetarte">
              <button className="newslabutonwishlist">
              <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <img src="/imgs/boximg.svg" alt="" />
          <button className="addtocars">
            
            <FaShoppingCart /> Add To Cart
          </button>
        </div>
        <div className="sliderbottom">
          <div className="titleslar">
            <h2>Gucci duffle bag</h2>
            <div className="ratingsxdasd">
              <span className="currentlarprice">$960</span>
              <span className="pastpricelarda" >$1160</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxwishlist;
