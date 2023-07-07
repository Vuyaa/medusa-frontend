import ProductDetailsForm from "../ProductDetailsForm/ProductDetailsForm";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100;
  };

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "eur",
  }).format(convertToDecimal(props.price));

  return (
    <div>
      <img
        src={props.thumbnail}
        alt={props.name}
        className={classes.thumbnail}
      />
      <div className={classes.details}>
        <h1>{props.name}</h1>
        <p>{price}</p>
        <p>{props.description}</p>
        <ProductDetailsForm variants={props.variants} />
      </div>
    </div>
  );
};

export default ProductDetails;
