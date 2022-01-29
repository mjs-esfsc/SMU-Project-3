// HOME IS A PAGE AND POPULATES ProductList AND Cart
import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
