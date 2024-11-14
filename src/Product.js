import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("This is the basket = ", basket);
  const addtocart = () => {
    //dispatch item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt={props.title} />
      <button onClick={addtocart}>Add to cart</button>
    </div>
  );
}

export default Product;
