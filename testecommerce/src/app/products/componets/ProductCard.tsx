import { IProduct } from "@types";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`products/${product.id}`}
      className="p-2 rounded-xl bg-white m-2 flex flex-col justify-around"
      key={product.id}
    >
      <h1 className="text-xl font-thin  capitalize grid justify-center py-2">
        {product.title}
      </h1>
      <div className="  bg-slate-200 grid justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-fill max-h-full max-w-full"
        />
      </div>
      <p className=" line-clamp-4">{product.description}</p>
    </Link>
  );
};

export default ProductCard;
