import React from "react";
import starIcon from "../images/icons/star.png";
import "./CheckoutProduct.css";
import { useAuth } from "../context/GlobalState";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="imgprod" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="product-rating" key={i}>
                <img src={starIcon} alt="starIcon" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
