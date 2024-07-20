import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';


const EditBook = () => {
  const {id} = useParams();
  const {title,author,imageUrl,category,description,pdfUrl,} = useLoaderData();


  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Programming',
    'Science',
    'Fantasy',
    'Horror',
    'Bibliographic',
    'Autobiographic',
    'History',
    'Self-Help',
    'Memoir',
    'Business',
    'Children-Books',
    'Travel',
    'Religion',
    'Art And Culture',
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedBookValue = (event) => {
    setSelectBookCategory(event.target.value);
  };

  //handle book  submition
  const handlUdateBook = (event) => {
    event.preventDefault();
    const  form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const updateBookObj = {
      title,
      author,
      imageUrl,
      category,
      description,
      pdfUrl,
    };
    //console.log(bookObj);
    //Edit book data
    fetch(`http://localhost:3001/update-book/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    }) 
      
   .then((res) => res.json())
   .then(data => {
        alert("bookk updted successfully");
        //form.reset();
      })
   

    
  };
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit A Book</h2>
      <form onSubmit={handlUdateBook} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='title' value='Book title' />
            </div>
            <TextInput id='title' name='booktitle' type='text' defaultValue={title} placeholder='Enter a book title' required />
          </div>

          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='author' value='Author Name' />
            </div>
            <TextInput id='author' name='author' type='text' defaultValue={author} placeholder='Author Name' required />
          </div>
        </div>

        <div className='flex gap-8'>
         <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label htmlFor='imageUrl' value='Book image' />
          </div>
          <TextInput id='imageUrl' name='imageUrl' type='text' defaultValue={imageUrl} placeholder='Enter a book imageUrl' required />
        </div>

        {/* Category */}
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label htmlFor='inputState' value='Book Category' />
          </div>
          <select
            id='inputState'
            name='category'
            className='w-full rounded'
            value={selectBookCategory}
            onChange={handleChangeSelectedBookValue}
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        </div>

         {/* decripation*/}
         <div>
          <div className='mb-2 block'>
            <Label htmlFor='description' value='Description' />
          </div>
          <Textarea id='description' name='description' defaultValue={description} placeholder="Leave your book descripation ..." required rows={6} className='w-full'/>

        </div>

        {/*book pdf line */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="pdfUrl" value="Your book pdf" />
        </div>
        <TextInput id="pdfUrl" name='pdfUrl' type="text" defaultValue={pdfUrl} placeholder="Book Pdf" required />
      </div>

      <Button type="submit">Edit Book</Button>

      </form>
    </div>
  );
}

export default EditBook