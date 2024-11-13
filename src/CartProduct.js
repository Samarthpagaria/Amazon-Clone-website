import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";
function CartProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  function removefromBasket() {
    //remove item from cart
    dispatch({
      type: "Remove_From_Cart",
      id: id,
    });
  }
  return (
    <div className="cartProduct">
      <img className="cartProduct_image" src={image} alt="" />
      <div className="cartProduct_info">
        <p className="cartProduct_title">{title}</p>

        <p className="cartProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removefromBasket} className="cartProduct_button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
