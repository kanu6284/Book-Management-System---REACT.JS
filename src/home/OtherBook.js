import React from 'react'
import { useState,useEffect } from 'react';
import BokkCard from '../components/BokkCard';

const OtherBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/all-books")  // Correct endpoint name
        .then(res => res.json())
        .then(data => setBooks(data.slice(0,12)))
        .catch(error => console.error("Error fetching books:", error));
    }, []);
  
    return (
      <div>
        <BokkCard books={books} headline="Other Books " />
      </div>
    );
}

export default OtherBook