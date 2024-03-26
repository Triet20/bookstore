import React, { useState } from 'react';
import './Category.css';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Add logic to run the reflink or perform other actions based on the selected category
  };

  return (
    <div className="category-container">
      <button
        className={`category-button ${selectedCategory === 'All' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('All')}
      >
        All Categories
      </button>
      <button
        className={`category-button ${selectedCategory === 'New' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('New')}
      >
        New Books
      </button>
      <button
        className={`category-button ${selectedCategory === 'Popular' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Popular')}
      >
        Popular
      </button>
      <button
        className={`category-button ${selectedCategory === 'Discount' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Discount')}
      >
        Discount
      </button>
    </div>
  );
};

export default Category;
