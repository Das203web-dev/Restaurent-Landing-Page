import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import aboutImg from '../../assets/images/Banner Image/bannerImg.jpg'
import { FaPhone } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import about from '../../assets/images/Banner Image/sideImg.jpg'



function About() {
  const [activeIndex, setActiveindex] = useState('about')


  const tabContent = [
    {
      name: 'About',
      title: 'Exceptional culinary experience and delicious food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.',
      buttonText: 'about More',
      contactNmbr: '+883426739485'
    },
    {
      name: 'Experience',
      title: 'Affordable Pricing Plans',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.',
      buttonText: 'View more'
    },
    {
      name: 'Contact',
      title: 'Get in Touch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod exercitation.',
      buttonText: 'Contact Us',
      contactNmbr: '+883426739485'

    }
  ];



  const contentItems = [
    {
      icon: <BsBox></BsBox>, // You can replace with an icon component or icon class
      title: "fast delivery",
      description: "Within 30 minutes",
    },
    {
      icon: <FaMedal></FaMedal>,
      title: "absolute dining",
      description: "Best buffet restaurant",
    },
    {
      icon: <LuShoppingBag></LuShoppingBag>,
      title: "pickup delivery",
      description: "Grab your food order",
    },
  ];



  return (
    <div id='about' className='lg:h-screen lg:mt-0 my-10 h-auto w-full flex items-center overflow-hidden relative'>
      <Layout>
        <div className='flex justify-between md:flex-row flex-col gap-10 items-start'>
          <div className='md:w-1/2'>
            <img src={aboutImg} alt="" />
          </div>

          <div className='md:w-1/2 flex flex-col gap-4'>
            <div className="flex justify-start items-center gap-5 border-b-[1px] border-black">
              {
                tabContent.map((tab, index) => <div onClick={() => setActiveindex(tab.name)} className={`cursor-pointer ${tab?.name.toLowerCase() === activeIndex.toLowerCase() ? "bg-red-600 text-white" : ""}`} key={index}>
                  <p className='p-2'>{tab.name}</p></div>
                )
              }
            </div>
            <div>
              {
                tabContent.map((tabName, index) => tabName.name.toLowerCase() === activeIndex.toLowerCase() ?
                  <div key={index} className='flex flex-col gap-5'>
                    <h3 className='font-semibold text-4xl uppercase '>{tabName.title}</h3>
                    <p>{tabName.description}</p>
                    <div className='flex gap-5 md:gap-5 items-center'>
                      <button className='bg-[#FEBF00] w-fit uppercase py-2 font-semibold text-black px-3 text-nowrap'>{tabName?.buttonText}</button>
                      {tabName?.contactNmbr && <p className='flex items-center gap-1'><FaPhone></FaPhone>{tabName?.contactNmbr}</p>}
                    </div>
                  </div>
                  :
                  "")
              }
            </div>
          </div>
        </div>

        <div className='flex items-center md:flex-row flex-col justify-start w-full gap-10 mt-16 2xl:relative'>
          {
            contentItems.map((item, index) => <div className='flex w-full items-center gap-5' key={index}>
              <div className='w-14 h-14 flex justify-center items-center rounded-full shadow-xl shadow-[#0000001A]'>
                <p className='text-xl'>{item?.icon}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='uppercase font-semibold text-2xl'>{item?.title}</h3>
                <p>{item?.description}</p>
              </div>
            </div>)
          }
          <img className='md:absolute hidden md:block w-32 h-32 -right-12 bottom-44' src={about} alt="side image" />
        </div>
      </Layout>
    </div>
  )
}

export default About