import React, { useContext, useState } from "react";
import { CiHeart, CiLogout, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { DataContext } from "../../App";

function Navbar() {
  const [modal, setmodal] = useState(false);
  const { token, settokenslar, cartCount, wishlistCount } = useContext(DataContext);

  return (
    <>
      <nav>
        <div className="nav_top">
          <div className="rows">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <div className="navend">
              <select className="selection" name="" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="nav_btomo">
            <Link to={"/"}>
              <img src="/imgs/Logo.svg" alt="" />
            </Link>

            <ul className="links">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
              
              <li><NavLink to={"/signup"}>Sign Up</NavLink></li>
            </ul>

            <div className="navleft">
              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="forminputs"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <button type="submit">
                  <CiSearch />
                </button>
              </form>

              <NavLink to={"/wishlist"}>
                <div className="hearticons">
                  <CiHeart />
                  {wishlistCount > 0 && (
                    <span className="wishlist-badge">{wishlistCount}</span>
                  )}
                </div>
              </NavLink>

              <NavLink to={"/cart"}>
                <div className="carticonslar">
                  <CiShoppingCart />
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                  )}
                </div>
              </NavLink>

              {token && (
                <button
                  className="userslar"
                  onClick={() => setmodal(!modal)}
                >
                  <FaUser />
                </button>
              )}
            </div>
          </div>

          {modal && (
            <div className="modal">
              <Link className="usericons" to={"/acount"} onClick={() => setmodal(false)}>
                <FaUser />
                <h2>Manage My Account</h2>
              </Link>
              <div className="usericons">
                <FaBagShopping />
                <h2>My Order</h2>
              </div>
              <div className="usericons">
                <MdOutlineCancel />
                <h2>My Cancellations</h2>
              </div>
              <div className="usericons">
                <IoStarOutline />
                <h2>My Reviews</h2>
              </div>
              <div
                onClick={() => {
                  settokenslar(null);
                  localStorage.removeItem("token");
                  setmodal(false);
                }}
                className="usericons"
                style={{ cursor: "pointer" }}
              >
                <CiLogout />
                <h2>Logout</h2>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
