// MB: THIS IS THE LIST OS ALL THE PRODUCTS
// THIS WILL MAP ProductItem
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  const products = data?.products || [];

  return (
    <div className="my-2">
      <h2>Products and Fleet:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {products.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <p>Loading ...</p> : null}
    </div>
  );
}

export default ProductList;
