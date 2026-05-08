import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { baseUrl, addtowishlist } from "../../service";
import "./Cardsonce.css";
import { useContext } from "react";
import { DataContext } from "../../App";
import { toast } from "react-toastify";

function Cardslarone({ item, setsliderbuton, setSelectedProduct }) {
  const { token } = useContext(DataContext);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtowishlist(token, item?.id).then(() => {
      toast.success("Wishlistga qo'shildi!");
    });
  };

  return (
    <>
      <Link to={`/productdetail/${item?.id}`}>
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
                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
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
