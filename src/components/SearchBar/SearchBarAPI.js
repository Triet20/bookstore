import React, { useState } from 'react';
import './SearchBarAPI.css';
import BooksList from '../BooksList/BooksList';

const SearchBarAPI = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDey5y13cnqcSS6DAqTvpUROnz2xwOftUQ&maxResults=40`);
        if (response.ok) {
          const data = await response.json();
          setBookData(data.items);
        } else {
          console.error("Error fetching response in book data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }
  };

  return (
    <>
      <div className="searchBarAPI">
        <input
          type="text"
          placeholder="Enter Book Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchBook(e);
            }
          }}
        />
        <button><i className="fas fa-search"></i></button>
      </div>
      <div className="container">
        <BooksList books={bookData} />
      </div>
    </>
  );
};

export default SearchBarAPI;
