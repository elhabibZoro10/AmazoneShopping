import React from "react";
import starIcon from "../images/icons/star.png";
import "./Product.css";
import { useAuth } from "../context/GlobalState";

const Product = ({ title, price, image, rating, id }) => {
  const { dispatch, basket } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  console.log(basket);

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <small>{price}</small>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <img src={starIcon} alt="starIcon" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
