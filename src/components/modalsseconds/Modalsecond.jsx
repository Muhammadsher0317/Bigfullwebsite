import React, { useContext, useState } from "react";
import "./Modalsecond.css";
import { baseUrl, addtocart } from "../../service";
import { DataContext } from "../../App";
import { toast } from "react-toastify";

function Modalsecond({ item, setsliderbuton }) {
  const { token, refreshCartCount } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Iltimos avval tizimga kiring!");
      return;
    }
    addtocart(token, item?.id, quantity).then((data) => {
      if (data?.error || data?.product_id || data?.non_field_errors) {
        toast.error("Xatolik: " + JSON.stringify(data));
      } else {
        toast.success("Savatga qo'shildi!");
        refreshCartCount();
        setsliderbuton(false);
      }
    });
  };

  return (
    <div className="modalslar" onClick={() => setsliderbuton(false)}>
      <div className="modalinfo" onClick={(e) => e.stopPropagation()}>
        <button className="closebtn" onClick={() => setsliderbuton(false)}>
          X
        </button>

        <div className="modalinfoleft">
          <img src={`${baseUrl}${item?.pictures?.[0]}`} alt="" />
          <button className="showmorebtn">Show More →</button>
        </div>

        <div className="modalinforights">
          <h1>{item?.title?.slice(0, 70)}</h1>

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
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
              <button>XXXL</button>
            </div>
          </div>

          <div className="quantity">
            <h2>Quantity:</h2>
            <div className="quanitiyrow">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="price">
            Price: ${item?.discount_price || item?.price}
          </div>

          <button className="cartbtn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modalsecond;
