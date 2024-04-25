import loadingGif from "../assets/loading.gif";
import { useProductsContext } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products, loading, search,setSearch } = useProductsContext();
  console.log(products);
  return (
    <div className="mx-auto max-w-2xl text-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 font-anta">
      <div>
      <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          name="default-search"
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          placeholder="Search products..."
          value={search}
        />
      </div>
      <h2 className="text-2xl text-center font-bold mt-8 tracking-tight text-gray-900">
        {loading ? "Loading..." : "All Products"}
      </h2>
      {loading ? (
        <div className="flex justify-center p-20">
          <img src={loadingGif} alt="loading" width="250px" />
        </div>
      ) : products?.length ? (
        <div className="mt-6 grid md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
    </div>
  );
};

export default Products;
