import React from 'react'
import { Link } from 'react-router-dom'

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
    <div className='flex flex-col md:flex-row justify-between item-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-sung '>2023 National Book Awards For Fiction ShortList</h2>
            <Link to="/shop" className=' block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>

        </div>
        <div>
            <img src='https://media.istockphoto.com/id/1313300194/photo/contemporary-art-collage-modern-design-summertime-mood.jpg?s=612x612&w=0&k=20&c=Ey0kzQmM1zAJJ_8GNRR3lkO-VHdAa8sN8Wlgi6vuzjQ= ' alt=' ' width='200' height= '200'  />
        </div>
    </div>
    </div>
  )
}

export default PromoBanner