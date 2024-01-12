import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import HeroImage from "../assets/icons/images/hero 1.png"
import WomenImage from "../assets/icons/images/Women.svg"
import MenImage from "../assets/icons/images/Men.svg"
import pregnentwomenImage from "../assets/icons/images/pregnent women.svg"
import ChildrenImage from "../assets/icons/images/Children.svg"
import SerumImage from "../assets/icons/images/Serum.svg"
import GirlImage from "../assets/icons/images/Girl.svg"
import FooterImage from "../assets/icons/images/Footer.svg"
import { ReactComponent as StarIcon } from "../assets/icons/star.svg"
import { CategoryCard } from './categoryCard'

export default function Home() {

  const [data, setData] =useState()

  useEffect(() => {
    const home_data = fetch("https://miralou-api.sagarlama.com/api/home").then((response) => {
      return response.json();
    }).then((data) => {
      setData(data.data)
    })
    .catch(() => {
      setData({
        categories: [],
        new_arrivals: [],
      })
    })
  }, [])


  const categories = [
    {
      category: 'Women',
      img: WomenImage,
    },
    {
      category: 'Men',
      img: MenImage,
    },
    {
      category: 'pregnent Women',
      img: pregnentwomenImage,
    },
    {
      category: 'Children',
      img: ChildrenImage,
    },
  ]

  const product = [
    <div className='w-60 mb-5'>
      <div>
        <img src={SerumImage} />
      </div>
      <div className='flex mt-2'>
        <button> <StarIcon /> </button>
        <p className='ml-1 text-sm mt-1'>1 review</p>
      </div>
      <div>
        <p className='text-base font-bold'>Anti-Ance Serum</p>
        <p className='text-base font-bold'>$ 4.99</p>
      </div>
    </div>
  ]

  const About = [
    <div className='w-4/12'>
      <img className='w-11/12' src={SerumImage} alt="face cream" />
      <div>
        <p className='leading-6 text-sm'>25th July</p>
        <h1 className='text-2xl leading-9 font-medium'>Anti-Acne Serum</h1>
        <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis</p>
      </div>
    </div>
  ]

  return (
    <div>
      <Navbar />
      <section className='relative flex items-center'>
        <img src={HeroImage} alt="Hero Image" />
        <div className='absolute w-full'>
          <div className='container mx-auto'>
            <div className='w-5/12'>
              <h1 className='text-6xl font-bold'>Scandinavian Supremacy</h1>
              <h2 className='text-2xl mt-10  w-full font-medium '>At miralou we have turned traditional skin care
                ingredients lists on its head</h2>
              <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold text-2xl py-2 px-10 rounded mt-10">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='conatiner mx-auto p-4 m-5 w-10/12'>
          <div className='flex flex-wrap justify-between'>
            {data?.categories.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='w-7/12 mx-auto mb-12'>
          <div>
            <h1 className='text-center font-medium font-serif text-5xl mx-auto mt-40 mb-5'>New Arrivals</h1>
            <p className='text-center text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi enim. Duis in tortor sit amet turpis rutrum fermentum
              in non arcu. Praesent porta auctor odio a suscipit. Quisque sagittis suscipit ultricies.</p>
          </div>
          <div className=' flex flex-wrap  justify-between  mt-5'>
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
          </div>
          <div className='mt-10 mx-auto flex items-center justify-center'>
            <button className='rounded-md border-2 p-2 px-12 border-black'>
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='mt-28 w-7/12 mx-auto mb-12 '>
          <div className='flex justify-between'>
            <img className='w-4/12' src={GirlImage} alt='GIRL' />
            <div className='w-7/12 mt-12'>
              <h1 className='font-serif text-5xl font-medium mb-5'>
                About Miralou
              </h1>
              <div>
                <div className='text-xl text-justify'>
                  <p className='mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit amet felis tempus placerat. Suspendisse cursus fringilla sapien ut mattis. Aenean bibendum metus est, vitae egestas massa elementum vitae. Fusce eleifend urna nec est finibus, nec</p>
                  <p className='mb-4 '>Duis neque velit, posuere sed mauris eu, ullamcorper convallis elit. Sed posuere volutpat mauris, non venenatis est ultrices a. Ut sit amet sapien dapibus lectus suscipit gravida. Fusce a justo dolor.</p>
                  <p className='mb-4'>Pellentesque nec neque in augue vulputate congue at sit amet ante. Pellentesque euismod est at sapien suscipit, at blandit diam gravida. In est lacus, convallis eget dui ut, bibendum fermentum velit. Praesent et consequat elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='w-7/12 mx-auto mb-24 mt-20'>
          <div className='flex w-8/12 mx-auto flex-col items-center justify-center'>
            <h1 className='font-serif text-5xl font-medium mb-3'>About Miralou</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit  amet feli s tempus placerat. Suspendisse </p>
          </div>
          <div className='flex mt-10 justify-between'>
            {About}
            {About}
            {About}
          </div>
        </div>
      </section>
      <section>
        <>
          <div className='w-full flex min-h-40'>
            <div className='w-7/12 bg-gray-700 min-h-40'>
              <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='font-sans text-3xl w-5/12 text-white'>Get Our Emails For Info On New
                  Items, Sales and More
                </h1>
                <p className='text-lg w-5/12 mt-5 mb-3 text-white'>Subscribe to receive 10% off your next purchase.
                  Plus hear about new arrivals and offers
                </p>
              </div>
              <div className='flex w-11/12 mt-5 mx-auto justify-center items-center'>
                <input className='w-5/12 p-2.5' placeholder='Your Email' type="text" />
                <div className='outline-white px-6 p-2 border-2'>
                  <button className='text-center text-white' type='button'>Subscribe</button>
                </div>
              </div>
            </div>
            <div className='w-5/12'>
              <img src={FooterImage} alt="" />
            </div>
          </div>
        </>
      </section>

    </div>
  )
}