import { useProducts } from "medusa-react";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./Products.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useState } from "react";
import Header from "../../Layout/Header";

const Products = () => {
  // Default categories
  const categories = ["pcat_shirts", "pcat_pants", "pcat_merch"];
  const [category, setCategory] = useState(categories);
  //Making use of Medusas useProducts hook to get products array from the backend
  const { products, isLoading } = useProducts({
    category_id: category,
  });
  const [visibleDetails, setVisibleDetails] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  //Handler to open details based on productId and changing state
  const detailsHandler = (productId) => {
    setSelectedProductId(productId);
    setVisibleDetails(false);
  };

  const handleCategoryChange = (categoryId) => {
    if (category.includes(categoryId)) {
      // If the category is already selected, remove it
      setCategory(category.filter((cat) => cat === categoryId));
    } else {
      // If the category is not selected, add it
      setCategory([...category, categoryId]);
    }
  };

  //Logic for accessing endpoint for the props in product details
  let selectedProduct;
  if (products !== undefined) {
    selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );
  }

  //Get data from products we got from the useProducts hook
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
          <Header
            categories={categories}
            category={category}
            handleCategoryChange={handleCategoryChange}
            visibleDetails={visibleDetails}
          />

          {visibleDetails ? (
            <div
              className={`animate-productList-appear ${classes.productList}`}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 list-none grid-rows-auto pt-24 pl-5 pr-5">
                {productItems}
              </ul>
            </div>
          ) : (
            <ProductDetails
              name={selectedProduct.title}
              thumbnail={selectedProduct.thumbnail}
              description={selectedProduct.description}
              price={selectedProduct.variants[0].prices[0].amount}
              variants={selectedProduct.variants}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
