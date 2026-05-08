  import React, { useEffect, useState } from "react";
  import "./Account.css";
  import { getuserinfo } from "../../service";
  function Account() {
    const [user, setuser] = useState();
    // const [firsname, setfirstname] = useState();
    // const [lastname, setlastname] = useState();
    // const [lastemail, setlemail] = useState();
    // const [phonme, setphone] = useState();
    // const [pasword, setpasword] = useState();
    // const [adress, setaddres] = useState();
    useEffect(() => {
      const localstoregtoken = localStorage.getItem("token");
      if (localstoregtoken) {
        getuserinfo(localstoregtoken).then((data) => {
          if (data) {
            setuser(data);
          }
        });
      }

      // const updateprofile = () => {
      //   const myHeaders = new Headers();
      //   myHeaders.append("Content-Type", "application/json");

      //   const raw = JSON.stringify({
      //     first_name: firsname,
      //     last_name: lastname,
      //     email: lastemail,
      //     phone: phonme,
      //     address: adress,
      //     password: pasword,
      //   });

      //   const requestOptions = {
      //     method: "PUT",
      //     headers: myHeaders,
      //     body: raw,
      //     redirect: "follow",
      //   };

      //   fetch(
      //     "https://ecommercev01.pythonanywhere.com/user/update-profile/",
      //     requestOptions,
      //   )
      //     .then((response) => response.json())
      //     .then((result) => console.log(result))
      //     .catch((error) => console.error(error));
      // };
    }, []);
    console.log(user);

    return (
      <>
        <div className="acountslar">
          <div className="container">
            <div className="acoounttop">
              <div className="myaccountslar">
                <p>Home</p>/<span>My Account</span>
              </div>
              <h1>
                Welcome! <span> Md Rimel</span>
              </h1>
            </div>
            <div className="myaccountmidd">
              <div className="myaccounlefts">
                <h1>Manage My Account</h1>
                <div className="servie_accounts">
                  <h3>My Profile</h3>
                  <h3>Address Book</h3>
                  <h3>My Payment Options</h3>
                </div>
                <h1>My Orders</h1>
                <div className="servie_accounts">
                  <h3>My Returns</h3>
                  <h3>My Cancellations</h3>
                </div>
                <h1>My WishList</h1>
              </div>
              <div className="myaccounright">
                <h2 className="editlarright">Edit Your Profile</h2>
                <div className="firstandlastnames">
                  <div className="firstnames">
                    <h2>First Name</h2>
                    <input
                      defaultValue={user?.first_name}
                      type="text"
                      placeholder="Md"
                      onInput={(e) => {
                        e.preventDefault();
                        
                      }}
                    />
                  </div>
                  <div className="firstnames">
                    <h2>Last Name</h2>
                    <input
                      defaultValue={user?.last_name}
                      type="text"
                      placeholder="Rimel"
                      onInput={(e) => {
                        e.preventDefault();
                       
                      }}
                    />
                  </div>
                </div>

                <div className="firstandlastnames">
                  <div className="firstnames">
                    <h2>Email</h2>
                    <input
                      onInput={(e) => {
                        e.preventDefault();
                       
                      }}
                      defaultValue={user?.email_or_phone}
                      type="email"
                      placeholder="rimel1111@gmail.com"
                    />
                  </div>
                  <div className="firstnames">
                    <h2>Address</h2>
                    <input
                      defaultValue={user?.address}
                      type="text"
                      placeholder="Kingston, 5236, United State"
                      onInput={(e) => {
                        e.preventDefault();
                        // setaddres(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="paswordchanges">
                  <h2>Password Changes</h2>
                  <div className="currenpaswords">
                    <input
                      onInput={(e) => {
                        e.preventDefault();
                        // setpasword(e.target.value);
                      }}
                      type="text"
                      placeholder="Current Passwod"
                    />
                  </div>

                  <div className="currenpaswords">
                    <input
                      onInput={(e) => {
                        e.preventDefault();
                        // setphone(e.target.value);
                      }}
                      type="text"
                      placeholder="phone"
                    />
                  </div>

                  <div className="currenpaswords">
                    <input type="text" placeholder="Confirm New Passwod" />
                  </div>
                </div>
                <div className="myacccountrightbtns">
                  <button>Cancel</button>
                  <button>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Account;
