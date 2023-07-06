import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import Products from "./components/Products/Products/Products";
import Header from "./components/Layout/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <Header />
      <Products />
    </MedusaProvider>
  );
};

export default App;
