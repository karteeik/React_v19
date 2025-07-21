import React from "react";

const ProductsCard = ({ name, price, image }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  width: "200px",
  textAlign: "center",
  borderRadius: "10px",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
};

export default ProductsCard;
