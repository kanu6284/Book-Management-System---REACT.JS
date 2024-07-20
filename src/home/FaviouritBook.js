import React, { useEffect, useState } from 'react';
import BokkCard from '../components/BokkCard';

const FavouriteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")  // Correct endpoint name
      .then(res => res.json())
      .then(data => setBooks(data.slice(0,8)))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <BokkCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavouriteBook;
