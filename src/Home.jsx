// Home.jsx
import { useNavigate } from 'react-router-dom';
import BookCard from './components/BookCard';
import books from './booksData'; // assuming booksData.jsx exports a book array

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="header">
        <h1>Book Library</h1>
        <button onClick={() => navigate('/add-book')}>Add Book</button>
      </div>

      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
