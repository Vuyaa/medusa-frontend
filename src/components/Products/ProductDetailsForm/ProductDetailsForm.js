import React, { useState } from "react";
import { useProducts } from "medusa-react";

const ProductDetailsForm = ({ variants }) => {
  const [selectedVariantId, setSelectedVariantId] = useState("");
  //Taking advantage of a useProducts hook with expanding options parameter to get access to different product options
  const { isLoading } = useProducts({ expand: "options" });
  const [quantity, setQuantity] = useState(1);

  //Use Different variants
  const handleVariantChange = (event) => {
    setSelectedVariantId(event.target.value);
  };

  //Increment button with input space
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) ? 0 : value);
  };

  //Logic for adding item to the cart(not working at the moment)
  const handleAddToCart = (event) => {
    event.preventDefault();
    const selectedVariant = variants.find(
      (variant) => variant.id === selectedVariantId
    );
    console.log("Chosen Variant:", selectedVariant);
    console.log("Chosen Quantity:", quantity);

    setQuantity(1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4">
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="variant-select" className="mb-2">
            Select a Size:
          </label>
          <select
            id="variant-select"
            value={selectedVariantId}
            onChange={handleVariantChange}
            className="border border-gray-300 rounded-md px-2 py-1 w-full sm:w-96"
          >
            {variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity-input" className="mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            className="border w-full sm:w-96 border-gray-300 rounded-md px-2 py-1 "
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-gray-900 w-full sm:w-96 text-white py-2 px-4 rounded"
        >
          ADD TO CART +
        </button>
      </form>
    </div>
  );
};

export default ProductDetailsForm;
