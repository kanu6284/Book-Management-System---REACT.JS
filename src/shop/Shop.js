import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

function Shop() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); // Initialize useHistory

  useEffect(() => {
    fetch("http://localhost:3001/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleBuyNow = (book) => {
    // Redirect to cart page with book details as URL parameters
    navigate(`/cart?title=${book.title}&imageUrl=${book.imageUrl}&author=${book.author}`);
  };

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here!</h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
        {books.map(book => (
          <Card key={book.id}>
            <img src={book.imageUrl} alt='' className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
            <p>{book.title}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button onClick={() => handleBuyNow(book)}>Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
