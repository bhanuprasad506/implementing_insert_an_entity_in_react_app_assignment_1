// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddBook from './components/AddBook'; // We'll create this next

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  );
}

export default App;
