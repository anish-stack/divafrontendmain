import React, { useEffect, useState } from 'react'
import './collectionwithbanner.css'
import ops from '../../../assets/opsss.jpg'
import ps from '../../../assets/po.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CollectionWithBanner = () => {
  const [banners,setBanners] = useState([])
  const fetchBanners = async()=>{
    try {
      const res = await axios.get('http://localhost:4000/api/get-sales-Banners') 
      console.log(res.data.data)
      setBanners(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchBanners()
  },[])
  return (
    <div className='w-full py-3'>
    <div className='max-w-[1400px] mx-auto mt-5 p-2'>
      <div className='grid grid-cols-1  space-x-3 gap-2 md:grid-cols-2'>
        {banners && banners.map((items, index) => (
          <div key={index} className='w-full hover:shadow-2xl rounded-xl relative'>
            <img src={items.image} className='w-full h-[70vh] object-cover object-center rounded-xl' alt="" />
            {/* <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> */}
            <div className='absolute inset-0  flex flex-col justify-end items-center text-center'>
              <div className='z-20 mb-5'>
                {/* <h3 className='text-white text-3xl font-bold mb-4'>{items.title}</h3> */}
                {/* <p className='text-white text-lg mb-8'>{items.Para}</p> */}
                <Link to={'/Shop'} className='btn-views  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-all duration-300'>{items.BtnTitle}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default CollectionWithBanner
