import React from 'react';
import bannerBg from '../../assets/images/Banner Image/banner3.jpg';  // Import the banner background image
import bannerImg from '../../assets/images/Banner Image/bannerImg.jpg';  // Import the main banner image
import { FaRegStar } from "react-icons/fa6";  // Import star icon from react-icons

function Home() {
  return (
    // Main container for the Home section with a background image, covering the full viewport height
    <div
      id='home'
      style={{ backgroundImage: `url(${bannerBg})` }}
      className='w-full text-white bg-cover bg-no-repeat h-fit py-10 md:h-screen overflow-hidden 2xl:h-[600px] 2xl:py-20 relative'
    >
      {/* Flex container to center and align content for different screen sizes */}
      <div
        className='flex justify-center px-5 md:px-0 md:gap-0 gap-5 pt-10 md:pt-0 md:justify-between md:flex-row flex-col items-center mx-auto max-w-6xl h-full'
      >
        {/* Text content section, including title and description */}
        <div className='flex flex-col gap-4 md:gap-6 w-full'>
          <h1 className='font-semibold text-3xl md:text-6xl uppercase'>
            Taste the authentic Saudi cuisine
          </h1>
          <p>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
          <button className='bg-[#FEBF00] w-fit uppercase py-2 font-semibold text-black px-3 text-nowrap'>explore menu</button>
        </div>

        {/* Image container section, holding the main banner image and additional elements */}
        <div className='relative z-10 w-full'>
          <div className='absolute -top-5 -right-2'>
            <FaRegStar className='text-2xl'></FaRegStar>
          </div>
          <div
            className='w-20 h-20 absolute bottom-0 right-0 md:-right-10 rounded-full bg-yellow-400 flex justify-center items-center text-black font-semibold'
          >
            <div
              className='flex justify-center items-center w-16 h-16 rounded-full bg-yellow-400 border border-dotted border-black'
            >
              <p className='uppercase text-center text-sm'>todays offer</p>
            </div>
          </div>

          {/* Main banner image */}
          <img src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
