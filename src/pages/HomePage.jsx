import React, { useState, useEffect } from "react";
import ProductList from "../components/productlist/ProductList";
import Footer from "../components/footer/Footer";
import FilterBar from "../components/filterbar/FilterBar";
import ToastNotification from "../components/notification/ToastNotification";
import ScrollToTopButton from "../components/scroll/ScrollToTopButton";

const HomePage = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null); // Reset error state on each request
      const cachedProducts = localStorage.getItem("products");

      // Use cached data if available
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
        setFilteredProducts(JSON.parse(cachedProducts));
        setTimeout(() => setIsLoading(false), 2000); // Simulate delay of 2 seconds
      } else {
        try {
          const response = await fetch("https://fakestoreapi.com/products", { timeout: 5000 });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setProducts(data);
          setFilteredProducts(data);
          localStorage.setItem("products", JSON.stringify(data)); // Cache the data
          setTimeout(() => setIsLoading(false), 2000); // Simulate delay of 2 seconds
        } catch (error) {
          setError("Failed to load products. Please try again later.");
          console.error("Failed to fetch products:", error);
        }
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filterText) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [filterText, sortOrder, products]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setToastMessage(`${product.title} added to cart!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleFilterChange = (category) => {
    setFilterText(category);
  };

  const handleSortChange = (sortOrder) => {
    setSortOrder(sortOrder);
  };

  return (
    <div className="home-page">
      <div className="hero-image">
        <img id="img-1" src="images/banner-img-1.jpg" alt="Hero" />
      </div>

      {toastMessage && <ToastNotification message={toastMessage} />}

      <FilterBar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p> Loading...</p>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      )}

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default HomePage;
