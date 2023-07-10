import { Fragment } from "react";
import logo from "../../assets/medusa-logo.png";
import NavbarFilterButton from "./NavbarFilterButton";

const Header = (props) => {
  //Instead of using classic i use this to go back to the main page
  const redirectToMainScreen = () => {
    window.location.href = "/";
  };
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-16 justify-center items-center bg-white text-purple-700 p-0 shadow-md z-10">
        <div className="absolute left-0 pt-2">
          {/* If on details screen, remove NavbarFilter */}
          {props.visibleDetails ? (
            <>
              {props.visibleDetails && props.visibleDetails}
              <NavbarFilterButton
                categories={props.categories}
                category={props.category}
                handleCategoryChange={props.handleCategoryChange}
              />
            </>
          ) : (
            <div>
              {/* Else render home button  */}
              <button
                onClick={redirectToMainScreen}
                className={
                  "flex-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-0 "
                }
              >
                Home
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center flex-grow">
          <img
            src={logo}
            alt="medusa logo"
            className="max-w-full max-h-full object-contain w-48 h-18 ml-4"
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
