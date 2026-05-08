import React, { useContext, useEffect, useState } from "react";
import "./Wishlistlar.css";
import { getwishlist, removefromwishlist, addtocart } from "../../service";
import { DataContext } from "../../App";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

function Wishlist() {
  const { token, refreshCartCount } = useContext(DataContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = () => {
    if (!token) { setLoading(false); return; }
    getwishlist(token).then((data) => {
      const items = Array.isArray(data) ? data : [];
      setWishlist(items);
      setLoading(false);
    });
  };

  useEffect(() => { fetchWishlist(); }, [token]);

  const handleRemove = (productId) => {
    if (!token) { toast.error("Tizimga kiring!"); return; }
    removefromwishlist(token, productId).then(() => {
      toast.success("Wishlistdan o'chirildi");
      fetchWishlist();
    });
  };

  const handleAddToCart = (productId) => {
    if (!token) { toast.error("Tizimga kiring!"); return; }
    addtocart(token, productId, 1).then(() => {
      toast.success("Savatga qo'shildi!");
      refreshCartCount();
    });
  };

  const handleMoveAll = () => {
    if (!token) { toast.error("Tizimga kiring!"); return; }
    wishlist.forEach((item) => {
      const product = item?.product || item;
      addtocart(token, product?.id, 1);
    });
    toast.success("Barchasi savatga qo'shildi!");
    refreshCartCount();
  };

  return (
    <>
      <div className="wishlist-page">
        <div className="container">
          {/* Top */}
          <div className="wishlist-top">
            <h2>Wishlist ({wishlist.length})</h2>
            <button className="move-all-btn" onClick={handleMoveAll}>
              Move All To Bag
            </button>
          </div>

          {/* Cards */}
          {!token ? (
            <div className="wishlist-empty">
              <p>Ko'rish uchun <Link to="/register">tizimga kiring</Link></p>
            </div>
          ) : loading ? (
            <div className="wishlist-empty"><p>Yuklanmoqda...</p></div>
          ) : wishlist.length === 0 ? (
            <div className="wishlist-empty"><p>Wishlist bo'sh.</p></div>
          ) : (
            <div className="wishlist-grid">
              {wishlist.map((item, index) => {
                const product = item?.product || item;
                const pic = product?.pictures?.[0];
                const picPath = pic?.file || pic || "";
                const imgUrl = picPath
                  ? picPath.startsWith("http") ? picPath
                    : `https://ecommercev01.pythonanywhere.com${picPath}`
                  : "/imgs/boximg.svg";

                const discount = product?.price && product?.discount_price
                  ? Math.round(((product.price - product.discount_price) / product.price) * 100)
                  : null;

                return (
                  <div className="wl-card" key={index}>
                    {/* Badge + Delete */}
                    <div className="wl-card-top-row">
                      {discount ? (
                        <span className="wl-badge">-{discount}%</span>
                      ) : <span />}
                      <button
                        className="wl-delete-btn"
                        onClick={() => handleRemove(product?.id)}
                        title="O'chirish"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>

                    {/* Image */}
                    <Link to={`/productdetail/${product?.id}`}>
                      <div className="wl-img-wrap">
                        <img src={imgUrl} alt={product?.title} />
                      </div>
                    </Link>

                    {/* Add to cart */}
                    <button
                      className="wl-cart-btn"
                      onClick={() => handleAddToCart(product?.id)}
                    >
                      <FaShoppingCart /> Add To Cart
                    </button>

                    {/* Info */}
                    <div className="wl-info">
                      <h3>{product?.title?.slice(0, 28)}</h3>
                      <div className="wl-prices">
                        <span className="wl-price-new">${product?.discount_price || product?.price}</span>
                        {product?.price && product?.discount_price && (
                          <span className="wl-price-old">${product?.price}</span>
                        )}
                      </div>
                      <div className="wl-stars">
                        {[1,2,3,4,5].map((s) => (
                          <IoStar key={s} className="wl-star" />
                        ))}
                        <span>({product?.review_quantity || 0})</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Just For You */}
      <div className="justforyou-section">
        <div className="container">
          <div className="jfy-top">
            <div className="hlars">
              <div className="reds"></div>
              <h1>Just For You</h1>
            </div>
            <button className="jfy-see-all">See All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
