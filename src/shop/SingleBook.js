import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, title, imageUrl } = useLoaderData();

  // Add console logs for debugging
  console.log('SingleBook Data:', { _id, title, imageUrl });

  return (
    <div className='mt-28 px-4 lg:px-24'>
      {/* Check if imageUrl exists before rendering */}
      {imageUrl && <img src={imageUrl} alt={title} className='h-96' />}
      <h2>{title}</h2>
    </div>
  );
};

export default SingleBook;
