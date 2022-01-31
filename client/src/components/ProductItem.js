// THIS IS EACH PRODUCT WITH ITS NAME, PRICE AND ADD TO CART BUTTOM
import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Button } from "antd";
// importing css styling for productItem
import "../productItem.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img className="imagesStyle" alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <p className="desc">{description}</p>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );
}

export default ProductItem;
