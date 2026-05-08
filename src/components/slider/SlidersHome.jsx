// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Sliderhome.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
function SlidersHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperonce"
      >
        <SwiperSlide className="slider_homesla">
          <div className="sliderhomesliderleft">
            <div className="row">
              <img src="/imgs/1200px-Apple_gray_logo 1.svg" alt="" /> iPhone 14
              Series
            </div>
            <h1>Up to 10% off Voucher</h1>
            <button>
              Shop Now <BiArrowFromLeft />
            </button>
          </div>
          <div className="homesliderright">
            <img src="/imgs/homeslideriphone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_homesla">
          <div className="sliderhomesliderleft">
            <div className="row">
              <img src="/imgs/1200px-Apple_gray_logo 1.svg" alt="" /> iPhone 14
              Series
            </div>
            <h1>Up to 10% off Voucher</h1>
            <button>
              Shop Now <BiArrowFromLeft />
            </button>
          </div>
          <div className="homesliderright">
            <img src="/imgs/homeslideriphone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_homesla">
          <div className="sliderhomesliderleft">
            <div className="row">
              <img src="/imgs/1200px-Apple_gray_logo 1.svg" alt="" /> iPhone 14
              Series
            </div>
            <h1>Up to 10% off Voucher</h1>
            <button>
              Shop Now <BiArrowFromLeft />
            </button>
          </div>
          <div className="homesliderright">
            <img src="/imgs/homeslideriphone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_homesla">
          <div className="sliderhomesliderleft">
            <div className="row">
              <img src="/imgs/1200px-Apple_gray_logo 1.svg" alt="" /> iPhone 14
              Series
            </div>
            <h1>Up to 10% off Voucher</h1>
            <button>
              Shop Now <BiArrowFromLeft />
            </button>
          </div>
          <div className="homesliderright">
            <img src="/imgs/homeslideriphone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_homesla">
          <div className="sliderhomesliderleft">
            <div className="row">
              <img src="/imgs/1200px-Apple_gray_logo 1.svg" alt="" /> iPhone 14
              Series
            </div>
            <h1>Up to 10% off Voucher</h1>
            <button>
              Shop Now <BiArrowFromLeft />
            </button>
          </div>
          <div className="homesliderright">
            <img src="/imgs/homeslideriphone.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlidersHome;
