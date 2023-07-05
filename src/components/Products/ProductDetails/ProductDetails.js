import Card from "../../UI/Card";

const ProductDetails = (props) => {
  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100;
  };

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "eur",
  }).format(convertToDecimal(props.price));

  return (
    <div className="m-24">
      <Card>
        <div>
          <h1>{props.name}</h1>
          <p>{price}</p>
          <img
            src={props.thumbnail}
            className="object-scale-down w-60 md:w-96 lg:w-96"
            alt={props.name}
          />

          <p>{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
