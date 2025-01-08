# E-Shop

E-Shop is a simple e-commerce website that allows users to browse a variety of products, filter and sort them, and add them to their cart. It integrates a loading spinner animation to show when the data is being fetched and uses local storage to maintain the user's cart data.

## Live site - https://digital-mantraaz-e-shop-santhosh.netlify.app/

## Features
- **Product List**: Displays a list of products fetched from an external API (Fake Store API).
- **Filter and Sort**: Filters products by category and sorts them by price (low-high or high-low).
- **Add to Cart**: Allows users to add products to their shopping cart.
- **Cart Page**: Users can view their cart, update quantities, or remove items.
- **Loading Spinner**: Shows a spinner animation while products are being loaded.
- **Toast Notifications**: Provides feedback when a product is added to the cart.

## Technologies Used
- **React**: For building the user interface and managing state.
- **CSS**: For styling the components.
- **Fake Store API**: For fetching the product data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eshop.git

2. Install the dependencies:
cd e-com
npm install

3.Start the development server:
npm start
Open your browser and go to http://localhost:3000 to view the app.

How to Use
-Browse Products: You can view a list of products on the homepage. Filter them by category and sort by price.
-Add to Cart: Click the "Add to Cart" button next to any product to add it to your shopping cart.
-View Cart: You can view your cart by clicking the "View Cart" link in the navigation bar. From there, you can update the quantities or remove items.
-Loading Spinner: A loading spinner is displayed while products are being fetched from the API.


Animation Choices
-Spinner Design:
The spinner is created using border properties to form a circular shape, with the top border having a different color (#3498db for a blue shade) to create the rotating effect.
This design ensures the spinner is visually clean and simple while providing a clear indication of loading.

Rotation Effect:
The rotation is handled using CSS @keyframes, where the spinner rotates from 0deg to 360deg infinitely over 2 seconds (animation: spin 2s linear infinite;).
The linear timing function ensures the animation runs at a constant speed, and the infinite keyword allows the rotation to continue without interruption.

Positioning:
The spinner is centered on the page using flexbox (display: flex, justify-content: center, align-items: center) to ensure it is always positioned in the center of the screen.
