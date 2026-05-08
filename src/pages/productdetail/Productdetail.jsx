import React, { useContext, useEffect, useState } from "react";
import "./Productdetail.css";
import Flashslider from "../../components/flashslider/Flashslider";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { baseUrl, getproductdetail, addtocart, addtowishlist } from "../../service";
import { DataContext } from "../../App";
import { toast } from "react-toastify";

function Productdetail() {
  const { token, refreshCartCount } = useContext(DataContext);
  const [info, setinfo] = useState(null);
  const { id } = useParams();
  const [activeImg, setActiveImg] = useState(null);
  const [number, setnumber] = useState(1);

  useEffect(() => {
    getproductdetail(id)?.then((item) => {
      setinfo(item);
      setActiveImg(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [id]);

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtocart(token, info?.id, number).then((data) => {
      console.log("add to cart:", data);
      toast.success("Savatga qo'shildi!");
      refreshCartCount();
    });
  };

  const handleWishlist = () => {
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtowishlist(token, info?.id).then(() => {
      toast.success("Wishlistga qo'shildi!");
    });
  };

  const mainImg = activeImg
    ? `${baseUrl}${activeImg}`
    : info?.pictures?.[0]?.file
    ? `${baseUrl}${info.pictures[0].file}`
    : null;

  return (
    <>
      <div className="descriptionitems">
        <div className="container">
          <div className="productdetailleft">
            <div className="smallimg">
              {info?.pictures?.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setActiveImg(item?.file)}
                  src={`${baseUrl}${item?.file}`}
                  alt=""
                  style={{
                    cursor: "pointer",
                    border: activeImg === item?.file ? "2px solid red" : "none",
                  }}
                />
              ))}
            </div>
            <div className="mainimg">
              {mainImg && <img src={mainImg} alt={info?.title} />}
            </div>
          </div>

          <div className="productdetailright">
            <h1>{info?.title?.slice(0, 50)}</h1>
            <div className="rowstars">
              <div className="startslar">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>{info?.review_quantity} Reviews</p>
              <span>In Stock</span>
            </div>
            <div className="detailprice">
              ${info?.discount_price || info?.price}
            </div>
            <p className="detaildescription">
              {info?.description?.slice(0, 130)}
            </p>
            <div className="colorslar">
              Colours: <button></button> <button></button>
            </div>
            <div className="sixelars">
              <h2>Size:</h2>
              <button>XS</button><button>S</button>
              <button>M</button><button>L</button><button>XL</button>
            </div>
            <div className="itemnubers">
              <div className="numberdetails">
                <button onClick={() => number > 1 && setnumber(number - 1)}>-</button>
                <span>{number}</span>
                <button className="plusbuttons" onClick={() => setnumber(number + 1)}>+</button>
              </div>
              <button className="buyitemslarda" onClick={handleAddToCart}>
                Buy Now
              </button>
              <button className="hearticonslar" onClick={handleWishlist}>
                <CiHeart />
              </button>
            </div>
            <div className="freedelivered">
              <div className="deleveriditems">
                <img src="/imgs/icon-delivery (1).svg" alt="" />
                <div className="deliveredslar">
                  <h4>Free Delivery</h4>
                  <h2>Enter your postal code for Delivery Availability</h2>
                </div>
              </div>
              <div className="deleveriditems">
                <img src="/imgs/Icon-return.svg" alt="" />
                <div className="deliveredslar">
                  <h4>Return Delivery</h4>
                  <h2>Free 30 Days Delivery Returns.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div>
            <h1>Related Item</h1>
          </div>
          <div className="flashboxslar">
            <Flashslider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetail;
