import React, { useState } from 'react';
import Modal from './Modal';
import Book from '../Book/Book';

const BooksList = ({ books = [] }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setDisplayModal(true);
  };

  const minHeight = books.length === 0 ? 'calc(4 * 100px)' : 'auto';

  return (
    <div className="bookslist" style={{ minHeight }}>
      {books.length === 0 ? (
        <p>No books available.</p> // Placeholder for no data
      ) : (
        books.map((book) => (
          <Book key={book.id} book={book} onClick={() => handleBookClick(book)} />
        ))
      )}

      {displayModal && <Modal book={selectedBook} onClose={() => setDisplayModal(false)} />}
    </div>
  );
};

export default BooksList;
