import { useProducts } from "medusa-react";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./Products.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useState } from "react";

const Products = () => {
  //Making use of Medusas useProducts hook to get products array from the backend
  const { products, isLoading } = useProducts();
  const [visibleDetails, setVisibleDetails] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  //Handler to open details based on productId and changing state
  const detailsHandler = (productId) => {
    setSelectedProductId(productId);
    setVisibleDetails(false);
  };

  //Logic for accessing endpoint for the props in product details
  let selectedProduct;
  if (products !== undefined) {
    selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );
  }

  const productItems = products?.map((product) => (
    <ProductItem
      name={product.title}
      price={product.variants[0].prices[0].amount}
      thumbnail={product.thumbnail}
      id={product.id}
      key={product.id}
      description={product.description}
      onClick={() => detailsHandler(product.id)}
    />
  ));

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {visibleDetails ? (
            <div
              className={`animate-productList-appear ${classes.productList}`}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 list-none grid-rows-auto pt-32 pl-5 pr-5">
                {productItems}
              </ul>
            </div>
          ) : (
            <ProductDetails
              name={selectedProduct.title}
              thumbnail={selectedProduct.thumbnail}
              description={selectedProduct.description}
              price={selectedProduct.variants[0].prices[0].amount}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
