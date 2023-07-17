import { useParams } from "react-router-dom";

import productsData from "data/products.json";
import { formatCurrency } from "utils";
import { ImageSwiper } from "./components/imageSwiper";
import { ErrorPage } from "pages/Error";
import { useShoppingCart } from "context/ShoppingCart";

interface productProps {
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

type ProductType = productProps | undefined;

export const SingleProduct = () => {
  const { productId } = useParams();
  const { getItemQuantity, increaseQuantity, removeFromCart } =
    useShoppingCart();
  const product: ProductType = productsData.find(
    (product) => product.id === productId
  );

  const quantity = getItemQuantity(Number(product?.id));

  if (!product) {
    return <ErrorPage />;
  }

  return (
    <section className="product">
      <ImageSwiper product={product} />
      <h1 className="product__title">{product?.name}</h1>
      <div className="product__content">
        <p className="product__price">
          {product?.sale
            ? formatCurrency(product?.sale)
            : formatCurrency(product?.price)}
        </p>
        {product?.sale ? (
          <p className="product__price product__price--sale">
            {formatCurrency(product?.price)}
          </p>
        ) : null}
      </div>
      <button
        className="product__button"
        onClick={() => increaseQuantity(Number(product.id))}
      >
        Add to cart {quantity ? <span>(x{quantity})</span> : null}
      </button>
      {quantity ? (
        <button
          className="product__button product__button--remove"
          onClick={() => removeFromCart(Number(product.id))}
        >
          Remove
        </button>
      ) : null}
      <p className="product__description">{product?.description}</p>
    </section>
  );
};
