import React from "react";
import ProductDetailsForm from "../ProductDetailsForm/ProductDetailsForm";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  //Conver to two decimal points
  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100;
  };

  //Define price format (Weather its EU or US) and currency(eur, usd)
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "eur",
  }).format(convertToDecimal(props.price));

  //Details template with the separate logic for the form
  return (
    <div className={classes.card}>
      <img src={props.thumbnail} alt={props.name} />
      <div className={classes.details}>
        <h1>{props.name}</h1>
        <p className="mt-1 font-bold text-purple-800 text-lg">{price}</p>
        <p>{props.description}</p>
        <ProductDetailsForm variants={props.variants} />
      </div>
    </div>
  );
};

export default ProductDetails;
