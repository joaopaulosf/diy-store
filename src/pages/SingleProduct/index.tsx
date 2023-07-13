import { useParams } from "react-router-dom";
import productsData from "data/products.json";

export const SingleProduct = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === productId);

  return (
    <div>
      <img src={product?.image.main} alt={product?.name} />
      <h1>{product?.name}</h1>
    </div>
  );
};
