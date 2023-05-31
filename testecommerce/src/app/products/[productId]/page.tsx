type Props = {
  params: {
    productId: string;
  };
};

import { IProduct } from "@types";

import axios from "axios";
import BackButton from "./components/BackButton";

async function page({ params: { productId } }: Props) {
  const { data: product } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  //   const products: IProduct[] = [];     
  return (
    <div className="grid justify-center">
      <div
        className="  border-sky-500 grid justify-center  max-w-2xl"
        key={product.id}
      >
        <BackButton />
        <h1 className="text-2xl font-bold  capitalize grid justify-center">
          {product.title} 
        </h1>
        <div className="grid justify-center">
          <img
            src={`${product.image}`}
            alt="detail image"
            className="max-h-70"
          />
        </div>
        <p className="">{product.description}</p>
      </div>
    </div>
  );
}

export default page;
