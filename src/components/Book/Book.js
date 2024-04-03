
import React from 'react';
import './Book.css';
const Book = ({ book }) => {
  const bookCover = book.volumeInfo.imageLinks?.smallThumbnail;
  const price = book.saleInfo.retailPrice?.amount;

  if (!bookCover || !price) {
    return null; 
	// Don't return anything if book cover or price is missing
  }

  return (
    <div className="book">
      <img src={bookCover} alt="" />
      <div className="description">
        <h3 className="title">{book.volumeInfo.title}</h3>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default Book;

