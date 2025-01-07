import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = (e) => {
   
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";
    button.appendChild(ripple);


    setTimeout(() => {
      ripple.remove();
    }, 600);

 
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);


    onAddToCart(product);
  };

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="product-card" aria-label={`Product: ${product.name}`}>
      <div className={`image-wrapper ${imageLoaded ? "fade-in" : ""}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{truncateTitle(product.title, 2)}</h3>
        <p className="product-price">${product.price}</p>
        <button
          className={`add-to-cart-btn ${isClicked ? "clicked" : ""}`}
          onClick={handleAddToCart}
          aria-label="Add to Cart"
        >
          <FaShoppingCart className="cart-icon" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
