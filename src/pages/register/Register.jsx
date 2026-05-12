import React, { useContext, useState } from "react";
import "./Register.css";
import { loginfunction } from "../../service";
import { useNavigate } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

function Register() {
  const [email, setEmail] = useState();
  const [pasword, setPaswword] = useState();
  const navigate = useNavigate();
  const { settokenslar } = useContext(DataContext);
  const [hidepaswor, sethidepasswor] = useState(false);
  return (
    <>
      <div className="loginentrance">
        <div className="container">
          <div className="logiinleft">
            <img src="/imgs/phonewithcrt.svg" alt="" />
          </div>
          <div className="loginright">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginfunction(pasword, email).then((info) => {
                  if (info?.access) {
                    console.log(info);
                    toast("royhatdan otdingiz");

                    settokenslar(info.access);
                    localStorage.setItem("token", info.access);
                    navigate("/");
                  } else {
                    toast("hatolilar bor");
                  }
                });
              }}
              className="nameslardan"
            >
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
                  type={hidepaswor ? "text" : "password"}
                  placeholder="Password"
                />

                <button
                  type="button"
                  className="newhideslar"
                  onClick={() => {
                    if (hidepaswor == true) {
                      sethidepasswor(false);
                    } else {
                      sethidepasswor(true);
                    }
                  }}
                >
                  {hidepaswor ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className="loginforgetbtn">
                <button>Log In</button>
                <button>Forget Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
