import Card from "../../UI/Card";

const ProductItem = (props) => {
  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100;
  };

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "eur",
  }).format(convertToDecimal(props.price));

  return (
    <Card>
      <li
        onClick={props.onClick}
        className="flex justify-center flex-row-reverse m-4 pb-4 border-b-2 border-gray-300 flex-wrap items-end cursor-pointer"
      >
        <div>
          <img
            className="w-full max-w-lg h-auto mb-4 min-w-[200px]"
            alt="Product"
            src={props.thumbnail}
          />
        </div>
        <footer className="absolute min-w-[200px]">
          <div>
            <h3 className="m-0 mb-1">{props.name}</h3>
          </div>
          <div className="mt-1 font-bold text-purple-800 text-lg">{price}</div>
        </footer>
      </li>
    </Card>
  );
};

export default ProductItem;
