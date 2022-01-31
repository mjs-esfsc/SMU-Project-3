// THIS IS THE SHOPPING CART WHICH WILL INCLUDE CartItem
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";

import "../cart.css";

// CHECK THIS KEY
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

// This is your call back to verify the data variable
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  //responsible for populating the cart
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
//verify contents of cart
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>You haven't added anything to your cart yet!</h3>
      )}
    </div>
  );
};

export default Cart;

// THIS IS THE PREVIOUS CODE
// import React from "react";

// export default function Cart() {
//   return (
//     <div className="header">
//       <h1>Cart</h1>
//       <h2>Front-end Profciencies</h2>
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JavaScript</li>
//         <li>React</li>
//       </ul>
//       <h2>Back-end Profciencies</h2>
//       <ul>
//         <li>APIs</li>
//         <li>Node.js</li>
//         <li>Express.js</li>
//         <li>MySQL</li>
//         <li>NoSQL</li>
//       </ul>

//       <h2>Download My Cart</h2>
//       <a href="https://umnovjp.github.io/updatedPortfolio/assets/Alexander_Github.pdf">
//         <span class="book">🕮</span>
//       </a>
//       <br></br>
//       <br></br>
//     </div>
//   );
// }
