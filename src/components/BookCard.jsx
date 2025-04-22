// BookCard.jsx
import './BookCard.css';

const BookCard = ({ title, author, description, imageUrl }) => {
  return (
    <div className="book-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
