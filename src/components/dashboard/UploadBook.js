import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
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
  const handleSubmitBook = (event) => {
    event.preventDefault();
    const  form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = {
      title,
      author,
      imageUrl,
      category,
      description,
      pdfUrl,
    };
    console.log(bookObj);

    //send data to the datbase
    fetch('http://localhost:3001/upload-book',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    })
   .then((res) => res.json())
   .then((data) => {
        console.log(data);
        alert("book created successfully")
        form.reset();
      })
   .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleSubmitBook} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='title' value='Book title' />
            </div>
            <TextInput id='title' name='booktitle' type='text' placeholder='Enter a book title' required />
          </div>

          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='author' value='Author Name' />
            </div>
            <TextInput id='author' name='author' type='text' placeholder='Author Name' required />
          </div>
        </div>

        <div className='flex gap-8'>
         <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label htmlFor='imageUrl' value='Book image' />
          </div>
          <TextInput id='imageUrl' name='imageUrl' type='text' placeholder='Enter a book imageUrl' required />
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
          <Textarea id='description' name='description' placeholder="Leave your book descripation ..." required rows={6} className='w-full'/>

        </div>

        {/*book pdf line */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="pdfUrl" value="Your book pdf" />
        </div>
        <TextInput id="pdfUrl" name='pdfUrl' type="text" placeholder="Book Pdf" required />
      </div>

      <Button type="submit">Uplode Book</Button>

      </form>
    </div>
  );
};

export default UploadBook;
