import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl, addtowishlist } from "../../service";
import "./Cardsonce.css";
import { useContext, useState } from "react";

import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

function Cardslarone({ item, setsliderbuton, setSelectedProduct }) {
  const { token } = useContext(DataContext);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      navigate("/register");
      return;
    }
    setIsLiked(!isLiked);
    addtowishlist(token, item?.id).then(() => {
      toast.success("Yoqtirilgan qatorga qo'shildi!");
    });
  };

  return (
    <>
      <Link to={`/productdetail/${item?.id}`}>
        <div className="sliderboxs">
          <div className="sliderboxtop">
            <div className="rotateplace">
              <div className="rotetarte" onClick={handleWishlist} style={{ cursor: "pointer" }}>
                {isLiked ? <FaHeart size={28} color="red" /> : <CiHeart size={28} color="black" />}
              </div>
              <div className="rotetarte">
                <IoEyeOutline />
              </div>
            </div>

            <img
              className="clasterimgslar"
              src={`${baseUrl}${item?.pictures?.[0]}`}
              alt={item?.title}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setsliderbuton(true);
                setSelectedProduct(item);
              }}
              className="addtocars"
            >
              Add To Cart
            </button>
          </div>

          <div className="sliderbottom">
            <div className="titleslar">
              <h2>{item?.title?.slice(0, 30)}</h2>
              <div className="ratingsx">
                <div className="boxnarlari">
                  <span className="cuurentprice">
                    ${item?.discount_price || item?.price}
                  </span>
                  <span className="pastproce">${item?.price}</span>
                </div>
                <div className="starlsaerda">
                  <div className="stars">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                  <div className="p">{item?.stars}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cardslarone;
