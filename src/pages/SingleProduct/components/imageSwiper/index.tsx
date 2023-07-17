import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  sale?: number;
  image: {
    main: string;
    content: string;
  };
}

export const ImageSwiper = ({ product }: { product: ProductProps }) => {
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
        <img
          className="product__image"
          src={product?.image.main}
          alt={product?.name}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="product__image"
          src={product?.image.content}
          alt={product?.name}
        />
      </SwiperSlide>
    </Swiper>
  );
};
