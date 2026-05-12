import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Productdetail from "./pages/productdetail/Productdetail";
import Wishlist from "./pages/wishlist/Wishlist";
import Category from "./pages/category/Category";

import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";
import {
  getcategory,
  getproductlist,
  getcartitems,
  getwishlist,
} from "./service";
import { ToastContainer } from "react-toastify";
import { DataContext } from "./context/DataContext";

function App() {
  const [categoryData, setcategoryData] = useState();
  const [productData, setproductdata] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [token, settokenslar] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null,
  );

  useEffect(() => {
    getcategory().then((data) => setcategoryData(data?.value || data));
    getproductlist().then((item) => setproductdata(item?.value || item));
  }, [token]);

  // Cart count ni token o'zgarganda va sahifa yuklanganda yangilash
  useEffect(() => {
    if (token) {
      Promise.all([
        getcartitems(token).then((data) => {
          const items = data?.cart_items || (Array.isArray(data) ? data : []);
          return items.length;
        }),
        getwishlist(token).then((data) => {
          const items = Array.isArray(data) ? data : [];
          return items.length;
        })
      ]).then(([cartLen, wishlistLen]) => {
        setCartCount(cartLen);
        setWishlistCount(wishlistLen);
      });
    }
  }, [token]);

  const refreshCartCount = () => {
    if (token) {
      getcartitems(token).then((data) => {
        const items = data?.cart_items || (Array.isArray(data) ? data : []);
        setCartCount(items.length);
      });
    }
  };

  const refreshWishlistCount = () => {
    if (token) {
      getwishlist(token).then((data) => {
        const items = Array.isArray(data) ? data : [];
        setWishlistCount(items.length);
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <DataContext.Provider
          value={{
            categoryData,
            productData,
            token,
            settokenslar,
            cartCount,
            refreshCartCount,
            wishlistCount,
            refreshWishlistCount,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productdetail/:id" element={<Productdetail />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/acount" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </DataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
