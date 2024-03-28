import './App.css';
import {BookList} from './components';
import { BookDisplay, Category, Header, Slogan, Footer } from './containers';
function App() {
  return (
    <div className="App">
      <div className = 'pageBorder-header'>
      <Header />
      </div>
      <div className= 'pageSlogan'>
      <Slogan />
      </div>
      <div className = 'pageBorder-books'>
      <Category />
      <BookDisplay />
      <BookList />
      <Footer />
      </div>
    </div>
  );
}

export default App;

