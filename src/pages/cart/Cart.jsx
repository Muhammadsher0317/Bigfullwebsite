import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { getcartitems, removefromcart, addtocart } from "../../service";
import { DataContext } from "../../App";
import { toast } from "react-toastify";

function Cart() {
  const { token, refreshCartCount } = useContext(DataContext);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCart = () => {
    if (!token) {
      setLoading(false);
      return;
    }
    getcartitems(token).then((data) => {
      const items = data?.cart_items || (Array.isArray(data) ? data : []);
      setCartItems(items);
      // har bir item uchun quantity state ni set qilamiz
      const qMap = {};
      items.forEach((item, i) => {
        qMap[i] = item?.quantity || 1;
      });
      setQuantities(qMap);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  const handleRemove = (cartItemId) => {
    if (!token) return;
    removefromcart(token, cartItemId).then((data) => {
      toast.success("O'chirildi");
      refreshCartCount();
      fetchCart();
    });
  };

  const handleQtyChange = (index, newQty) => {
    if (newQty < 1) return;
    setQuantities((prev) => ({ ...prev, [index]: newQty }));
  };

  const subtotal = cartItems.reduce((sum, item, i) => {
    const product = item?.product || item;
    const price = parseFloat(product?.discount_price || product?.price || 0);
    const qty = quantities[i] ?? item?.quantity ?? 1;
    return sum + price * qty;
  }, 0);

  if (!token) {
    return (
      <div className="cart">
        <div className="container">
          <p style={{ padding: "40px 0", textAlign: "center" }}>
            Savatni ko'rish uchun{" "}
            <Link to="/register" style={{ color: "red" }}>
              tizimga kiring
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="cart">
        <div className="container">
          <p style={{ padding: "40px 0" }}>Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="carttop">
          <p>Home / <span>Cart</span></p>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ padding: "40px 0", textAlign: "center" }}>
            <p>Savat bo'sh.</p>
            <Link to="/"><button style={{ marginTop: "12px" }}>Xarid qilish</button></Link>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <div className="cart-header">
              <span className="ch-product">Product</span>
              <span className="ch-price">Price</span>
              <span className="ch-qty">Quantity</span>
              <span className="ch-sub">Subtotal</span>
              <span className="ch-del"></span>
            </div>

            {/* ── Rows ── */}
            <div className="cards">
              {cartItems.map((item, index) => {
                const product = item?.product || item;
                const price = parseFloat(product?.discount_price || product?.price || 0);
                const qty = quantities[index] ?? item?.quantity ?? 1;

                const pic = product?.pictures?.[0];
                const picPath = pic?.file || pic || "";
                const imgUrl = picPath
                  ? picPath.startsWith("http")
                    ? picPath
                    : `https://ecommercev01.pythonanywhere.com${picPath}`
                  : "/imgs/monitors.svg";

                return (
                  <div className="cards_row" key={index}>
                    {/* Product */}
                    <div className="cr-product">
                      <img src={imgUrl} alt={product?.title} />
                      <span>{product?.title?.slice(0, 30)}</span>
                    </div>

                    {/* Price */}
                    <div className="cr-price">${price.toLocaleString()}</div>

                    {/* Quantity */}
                    <div className="cr-qty">
                      <button
                        className="qty-btn"
                        onClick={() => handleQtyChange(index, qty - 1)}
                      >−</button>
                      <input
                        className="qty-input"
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) =>
                          handleQtyChange(index, parseInt(e.target.value) || 1)
                        }
                      />
                      <button
                        className="qty-btn"
                        onClick={() => handleQtyChange(index, qty + 1)}
                      >+</button>
                    </div>

                    {/* Subtotal */}
                    <div className="cr-sub">${(price * qty).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>

                    {/* Remove */}
                    <button
                      className="cr-del"
                      onClick={() => handleRemove(item?.id)}
                    >✕</button>
                  </div>
                );
              })}
            </div>

            {/* ── Buttons ── */}
            <div className="cardsbtns">
              <Link to="/"><button>Return To Shop</button></Link>
              <button onClick={fetchCart}>Update Cart</button>
            </div>

            {/* ── Coupon + Total ── */}
            <div className="cuponslar">
              <div className="couponleft">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <div className="coupenright">
                <h1>Cart Total</h1>
                <div className="subtotal">
                  <h2>Subtotal:</h2>
                  <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="subtotal">
                  <h2>Shipping:</h2>
                  <span>Free</span>
                </div>
                <div className="subtotal">
                  <h2>Total:</h2>
                  <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="checkoutout">
                  <Link to="/checkout"><button>Proceed to Checkout</button></Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
