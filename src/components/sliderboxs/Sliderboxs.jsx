import React, { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import "./Sliderboxs.css";
import { baseUrl, addtocart, addtowishlist } from "../../service";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { toast } from "react-toastify";

function Sliderboxs({ items }) {
  const { token, refreshCartCount } = useContext(DataContext);
  const [modalopen, setmodalopen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtocart(token, items?.id, quantity).then((data) => {
      console.log("add to cart:", data);
      toast.success("Savatga qo'shildi!");
      refreshCartCount();
      setmodalopen(false);
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtowishlist(token, items?.id).then(() => {
      toast.success("Wishlistga qo'shildi!");
    });
  };

  return (
    <>
      <Link to={`/productdetail/${items?.id}`}>
        <div className="sliderboxs">
          <div className="sliderboxtop">
            <div className="rotateplace">
              <div className="rotetarte" onClick={handleWishlist}>
                <CiHeart />
              </div>
              <div className="rotetarte">
                <IoEyeOutline />
              </div>
            </div>

            <img
              className="clasterimgslar"
              src={`${baseUrl}${items?.pictures?.[0]}`}
              alt={items?.title}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setmodalopen(true);
              }}
              className="addtocars"
            >
              Add To Cart
            </button>
          </div>

          <div className="sliderbottom">
            <div className="titleslar">
              <h2>{items?.title?.slice(0, 30)}</h2>
              <div className="ratingsx">
                <span>${items?.discount_price || items?.price}</span>
                <div className="stars">
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                </div>
                <div className="p">{items?.stars}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {modalopen && (
        <div className="modalslar" onClick={() => setmodalopen(false)}>
          <div className="modalinfo" onClick={(e) => e.stopPropagation()}>
            <button className="closebtn" onClick={() => setmodalopen(false)}>X</button>

            <div className="modalinfoleft">
              <img src={`${baseUrl}${items?.pictures?.[0]}`} alt="" />
              <button className="showmorebtn">Show More →</button>
            </div>

            <div className="modalinforights">
              <h1>{items?.title?.slice(0, 70)}</h1>

              <div className="colors">
                <h2>Color:</h2>
                <div className="colorrow">
                  <button className="black"></button>
                  <button className="gray"></button>
                  <button className="green"></button>
                  <button className="yellow"></button>
                </div>
              </div>

              <div className="sizes">
                <h2>Size:</h2>
                <div className="sizerow">
                  <button>L</button><button>XL</button>
                  <button>XXL</button><button>XXXL</button>
                </div>
              </div>

              <div className="quantity">
                <h2>Quantity:</h2>
                <div className="quanitiyrow">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="price">
                Price: ${items?.discount_price || items?.price}
              </div>

              <button className="cartbtn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sliderboxs;
