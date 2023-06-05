import { IProduct } from "@types";
export default async function sitemap() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = (await res.json()) as IProduct[];
  const products = allProducts.map((product: IProduct) => ({
    url: `https://fakestoreapi.com/products${product.id}`,
    lastModified: new Date().toISOString(),
  }));
  const routes = ["/products", "/about", "/dashboard", "/"].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes, ...products];
}
