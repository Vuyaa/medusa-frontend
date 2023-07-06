import { Fragment } from "react";
import logo from "../../assets/medusa-logo.png";
import NavbarFilterButton from "./NavbarFilterButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-20 justify-center items-center bg-white text-purple-700 p-0 shadow-md z-10">
        <div className="absolute left-0 pt-7">
          <NavbarFilterButton
            categories={props.categories}
            onFilter={props.handleFilter}
            key={props.id}
          />
        </div>
        <div className="flex justify-center flex-grow">
          <img
            src={logo}
            alt="medusa logo"
            className="max-w-full max-h-full object-contain w-48 h-24 ml-4"
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
