import { useProductCategories } from "medusa-react";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";

function Categories() {
  const { product_categories, isLoading } = useProductCategories();

  return (
    <Menu>
      <nav className="bg-transparent">
        <Menu.Button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Menu.Button>
        <Transition
          enter="transition duration-150 ease-out"
          enterFrom="transform scale-95 opacity-10"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-150 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-10"
        >
          <Menu.Items>
            <nav className="border-gray-200 bg-transparent dark:bg-gray-800 dark:border-gray-700">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Menu.Item>
                  <div>
                    {isLoading && <span>Loading...</span>}
                    {product_categories && !product_categories.length && (
                      <span>No Categories</span>
                    )}
                    {product_categories &&
                      product_categories.length > 0 &&
                      product_categories.slice(0, -2).map((category) => (
                        <li key={category.id} className="list-none">
                          <a
                            type="button"
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            href="a"
                            key={category.id}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                  </div>
                </Menu.Item>
              </div>
            </nav>
          </Menu.Items>
        </Transition>
      </nav>
    </Menu>
  );
}

export default Categories;
