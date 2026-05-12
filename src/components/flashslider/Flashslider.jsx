import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Flashslider.css";
import { FreeMode, Pagination } from "swiper/modules";
import Cardslarone from "../carfdslar/Cardslarone";

import { useContext, useState } from "react";
import Modalsecond from "../modalsseconds/Modalsecond";
import { DataContext } from "../../context/DataContext";

function Flashslider({ fleshslidershow }) {
  const { productData } = useContext(DataContext);

  const [sliderbuton, setsliderbuton] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320:  { slidesPerView: 1 },
          640:  { slidesPerView: 2 },
          900:  { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperpkpjasd"
      >
        {fleshslidershow === true
          ? productData?.map((item) => {
              return (
                <SwiperSlide className="onebox" key={item.id}>
                  <Cardslarone
                    item={item}
                    setsliderbuton={setsliderbuton}
                    setSelectedProduct={setSelectedProduct}
                  />
                </SwiperSlide>
              );
            })
          : productData?.slice(0, 6)?.map((item) => {
              return (
                <SwiperSlide className="onebox" key={item.id}>
                  <Cardslarone
                    item={item}
                    setsliderbuton={setsliderbuton}
                    setSelectedProduct={setSelectedProduct}
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>

      {sliderbuton && (
        <Modalsecond
          item={selectedProduct}
          setsliderbuton={setsliderbuton}
        />
      )}
    </>
  );
}

export default Flashslider;