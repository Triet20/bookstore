// App.js
import './App.css';
import React, { useState } from 'react';
import { API, BooksList } from './components';
import { Category, Header, Slogan, Footer } from './containers';

function App() {
  const [bookData, setBookData] = useState([]);
  const searchResult = async (searchTerms) => {
    const bookData = await API(searchTerms);
    setBookData(bookData);
  };

  return (
    <div className="App">
      <div className="pageBorder-header">
        <Header searchResult={searchResult}/>
      </div>
      <div className="pageSlogan">
        <Slogan />
      </div>
      <div className="pageBorder-books">
        <Category />
        <BooksList books={bookData} />
        </div>
        <Footer />
    </div>
  );
}

export default App;
