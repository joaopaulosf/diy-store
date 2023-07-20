import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { ProductProps } from "models";

export const ImageSwiper = ({ product }: { product: ProductProps }) => {
  const { image, name } = product;

  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="product__image" src={image.main} alt={name} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="product__image" src={image.content} alt={name} />
      </SwiperSlide>
    </Swiper>
  );
};
