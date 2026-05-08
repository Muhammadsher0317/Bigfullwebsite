import React, { useState } from "react";
import "./Login.css";
import { Link, Links, NavLink, useNavigate } from "react-router-dom";
import { registerfunc } from "../../service";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState();
  const [pasword, setPaswword] = useState();
  const [name, setName] = useState();
  const [hide, sethide] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="loginentrance">
        <div className="container">
          <div className="logiinleft">
            <img src="/imgs/phonewithcrt.svg" alt="" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerfunc(email, pasword, name).then((info) => {
                if (
                  info?.message ==
                  "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi."
                ) {
                  toast.success("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi.");
                  navigate("/register");
                } else {
                  console.log(info?.email_or_phone[0]);
                  toast.error(info?.email_or_phone[0]);
                }
              });
            }}
            className="loginright"
          >
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <div
              onInput={(e) => {
                setName(e.target.value);
              }}
              className="name"
            >
              <input type="text" placeholder="Name" />
            </div>
            <div className="name">
              <input
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="name">
              <input
                onInput={(e) => {
                  setPaswword(e.target.value);
                }}
                type={hide ? "text" : "password"}
                placeholder="Password"
              />
              <button type="button" className="newhideslar"  onClick={()=>{
                if(hide==true){
                  sethide(false)
                }else{
                  sethide(true)
                }
              }}>
                {hide?<FaRegEyeSlash />:<FaRegEye />}
              </button>
            </div>

            <button className="creationaccount">Create Account</button>
            <button className="iconswithimg">
              <img src="/imgs/Icon-Google.svg" alt="" /> Sign up with Google
            </button>
            <div className="entranceaccoutn">
              <p>Already have account?</p>
              <NavLink to={"/register"}>
                <button>Log in</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
