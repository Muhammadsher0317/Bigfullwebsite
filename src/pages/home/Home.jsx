import React, { useContext, useState } from "react";
import SlidersHome from "../../components/slider/SlidersHome";
import "./Home.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sliderboxs from "../../components/sliderboxs/Sliderboxs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Flashslider from "../../components/flashslider/Flashslider";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

function Home() {
  const { categoryData } = useContext(DataContext);
  const { productData } = useContext(DataContext);
  const [showall, setshoeall] = useState(false);
  const [fleshslidershow, setflashslider]=useState(false)
  return (
    <>
      <div className="homeentrancce">
        <div className="container">
          <div className="homentrance_left">
            {categoryData?.map((item, index) => {
              return (
                <Link key={index} to={`/category/${item?.id}`} className="titlewithimg">
                  <img src={item?.image} alt="" />
                  <p>{item?.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="homeentrance_right">
            <SlidersHome />
          </div>
        </div>
      </div>
      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Today’s</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Flash Sales</h1>
              <div className="dayscounter">
                <div className="dayscountertop">
                  <div className="days">
                    <p>Days</p>
                    <span>03</span>
                  </div>
                  <div className="dropins">:</div>

                  <div className="hours">
                    <p>Hours</p>
                    <span>23</span>
                  </div>
                  <div className="dropins">:</div>
                  <div className="hours">
                    <p>Minutes</p>
                    <span>19</span>
                  </div>
                  <div className="dropins">:</div>
                  <div className="hours">
                    <p>Seconds</p>
                    <span>56</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="btnslarhome">
              <button>
                <GoArrowLeft />
              </button>
              <button>
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="flashboxslar">
            <Flashslider />
            


            
          </div>
        </div>
      </div>

      <div className="Todayproduct_one">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Categories</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Browse By Category</h1>
            </div>

            <div className="btnslarhome">
              <button>
                <GoArrowLeft />
              </button>
              <button>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="categoryslar">
        <div className="category-track-wrap">
          <div className="category-track">
            {/* ikki marta takrorlaymiz — uzluksiz loop uchun */}
            {[...(categoryData || []), ...(categoryData || [])].map((item, index) => (
              <Link key={index} to={`/category/${item?.id}`} className="phones">
                <img src={item?.image} alt={item?.title} />
                <h2>{item?.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>This Month</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Best Selling Products</h1>
            </div>

            <div className="btnslarhome">
              <button onClick={()=>{
                if(fleshslidershow==false){
                  setflashslider(true)
                }else{
                  setflashslider(false)
                }

              }} className="viewall">View All</button>
            </div>
          </div>
          <div className="flashboxslar">
            <Flashslider fleshslidershow={fleshslidershow} />
          </div>
        </div>
      </div>

      <div className="encanceyourcolonka">
        <div className="container">
          <div className="leftsite">
            <h1>Categories</h1>
            <h2>Enhance Your Music Experience</h2>
            <div className="dayslar">
              <div className="dayscounter">
                <div className="dayscountertop">
                  <button>
                    <h1> 23</h1>
                    <h2>Hours</h2>
                  </button>
                  <button>
                    <h1> 05</h1>
                    <h2>Days</h2>
                  </button>
                  <button>
                    <h1> 59</h1>
                    <h2>Minutes</h2>
                  </button>
                  <button>
                    <h1> 35</h1>
                    <h2>Seconds</h2>
                  </button>
                </div>
              </div>
            </div>
            <div className="buybutton">
              <button>Buy Now!</button>
            </div>
          </div>
          <div className="rightimg">
            <img src="/imgs/kalonka.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="products_page">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Our Products</h1>
          </div>
          <div className="exportslar">
            <h2>Explore Our Products</h2>
            <div className="exportbtns">
              <button>
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="explorecards">
            {(showall == true ? productData : productData?.slice(0, 8))?.map(
              (items, index) => {
                return <Sliderboxs key={index} items={items} />;
              },
            )}
          </div>
          <button
            onClick={() => {
              if (showall == false) {
                setshoeall(true);
              } else {
                setshoeall(false);
              }
            }}
            className="addviewlar"
          >
            {showall ? "Hide Product" : "View all Products"}
          </button>
        </div>
      </div>

      <div className="arriwals">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Featured</h1>
          </div>
          <div className="exportslar_one">
            <h2>New Arrival</h2>
          </div>
          <div className="imgcards">
            <div className="imgleft">
              <div className="positionbutton">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="imgright">
              <div className="imgtop">
                <div className="imgtoptitle">
                  <h1>Women’s Collections </h1>
                  <p>Featured woman collections that give you another vibe.</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="imgrightright">
                <div className="imgright_left">
                  <div className="imgright_left_info">
                    <h1>Speakers</h1>
                    <p>Amazon wireless speakers</p>
                    <button>Shop Now</button>
                  </div>
                </div>
                <div className="imgrigt_leftsecond">
                  <div className="imgrigt_leftsecondinfo">
                    <h1>Perfume</h1>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <button>Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deliveredtaxis">
        <div className="container">
          <div className="fastdelevorerd">
            <img
              className="fastedeleiverimg"
              src="/imgs/icon-delivery.svg"
              alt=""
            />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>

          <div className="fastdelevorerd">
            <img
              className="fastedeleiverimg"
              src="/imgs/icon-delivery.svg"
              alt=""
            />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>

          <div className="fastdelevorerd">
            <img
              className="fastedeleiverimg"
              src="/imgs/icon-delivery.svg"
              alt=""
            />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
