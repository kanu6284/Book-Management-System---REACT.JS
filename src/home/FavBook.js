import React from 'react'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between item-center gap-12 '>
    <div className='md:w-1/2 '>
    <img src='https://news.virginia.edu/sites/default/files/article_image/header_faculty_alumni_books.jpg' alt='' className='eounded md:w-10/12' />

    </div>
    <div className='md:w-1/2 space-y-6'>
       <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-sung '>find your faviourtie <span className='text-blue-700'>Book Here!</span></h2>
     <p className='mb-10 text-lg md:w-5/6'>100 Yellow® Perfect Time Theme Wooden Photo Album Scrapbook for Gifting| 40 A5 pages | Size : 1| 40 A5 pages | Size : 15.2 cm x 21.5 cm |Multicolour ... Sehaz Artworks Photo Album Scrap ...</p>
    
    {/*stats */}
    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>book listing</p>
        </div>
        <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Register Users</p>
        </div>
        <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>Pdf Downloded</p>
        </div>
    </div>
     
      <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explor More</button></Link>

    </div>

    </div>
  )
}

export default FavBook