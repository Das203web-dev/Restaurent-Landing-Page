// import React, { useEffect, useState } from 'react'
// import Layout from '../Layout/Layout'
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import burger from '../../assets/images/popular image/burger.webp'
// import pizza from '../../assets/images/popular image/pizza.png'
// import frenchFrie from '../../assets/images/popular image/french-fries.webp'
// import cuisinChicken from '../../assets/images/popular image/cuisinChicken.webp'
// import hotdog from '../../assets/images/popular image/hotdog.webp'
// import noodles from '../../assets/images/popular image/noodles.png'
// import { data } from 'autoprefixer';
// import Card from './Card';
// import popularSecSideImg from '../../assets/images/popular image/popularSectionimg.png'


// function PopularItems() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4

//   const getItemsPerPage = () => (window.innerWidth < 768 ? 1 : 4)

//   const datas = [
//     {
//       image: burger,
//       title: "Fresh Burgers",
//       description: "Enjoy our freshly made, juicy burgers with a side of crispy fries.",
//     },
//     {
//       image: pizza,
//       title: "Spicy Pizza",
//       description: "Crispy and spicy chicken wings, perfect for any occasion.",
//     },
//     {
//       image: frenchFrie,
//       title: "french fries",
//       description: "A healthy and refreshing salad packed with organic veggies.",
//     },
//     {
//       image: cuisinChicken,
//       title: "Cuisin chicken",
//       description: "Indulge in a cheesy pizza with a delicious thin crust.",
//     },
//     {
//       image: hotdog,
//       title: "hotdog",
//       description: "Savor our perfectly grilled, tender and juicy steak.",
//     },
//     {
//       image: noodles,
//       title: "noodles Bowls",
//       description: "A nutritious bowl of smoothies topped with fresh fruits.",
//     },
//   ];

//   // let intialPosition = 0
//   // let endingPosition = 4
//   const increase = () => {
//     let itemsPerPage = getItemsPerPage()
//     if (currentIndex + itemsPerPage < datas.length) {
//       setCurrentIndex((prev) => prev + 1)
//     }
//   }
//   const decrease = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1)
//     }
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       setCurrentIndex(0); // Reset to start when screen size changes
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   return (
//     <div className='bg-[#FBF7F2] h-auto md:h-screen 2xl:h-auto 2xl:py-20 w-full flex items-center py-10 md:my-0 relative'>
//       <Layout>
//         <div className='grid grid-cols-1 md:grid-cols-3 justify-between space-y-8 items-center'>
//           <div className='flex flex-col gap-3 md:col-span-2'>
//             <div className='flex items-center gap-2 font-bold text-red-600'>
//               <div className='w-3 h-3 bg-red-600'></div><p> Crispy, Every Bite Taste</p>
//             </div>
//             <h3 className='font-bold text-5xl'>POPULAR FOOD ITEMS</h3>
//           </div>
//           <div className='flex md:order-2 order-3 justify-center md:justify-end gap-5 col-span-1'>
//             <div onClick={decrease} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
//               <IoIosArrowBack className='text-2xl'></IoIosArrowBack>
//             </div>
//             <div onClick={increase} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
//               <IoIosArrowForward className='text-2xl'></IoIosArrowForward>
//             </div>
//           </div>


//           <div className='flex gap-5 col-span-3 order order-2 mt-10'>
//             {
//               datas.slice(currentIndex, currentIndex + getItemsPerPage()).map((data, index) => <Card key={index} img={data?.image} title={data?.title} desc={data?.description}></Card>)
//             }
//           </div>
//         </div>

//         <img className='w-32 h-32 absolute -left-16 bottom-20' src={popularSecSideImg} alt="" />

//       </Layout>
//     </div>
//   )
// }

// export default PopularItems



import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import burger from '../../assets/images/popular image/burger.webp'
import pizza from '../../assets/images/popular image/pizza.png'
import frenchFrie from '../../assets/images/popular image/french-fries.webp'
import cuisinChicken from '../../assets/images/popular image/cuisinChicken.webp'
import hotdog from '../../assets/images/popular image/hotdog.webp'
import noodles from '../../assets/images/popular image/noodles.png'
import Card from './Card';
import popularSecSideImg from '../../assets/images/popular image/popularSectionimg.png'

function PopularItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 4);

  const datas = [
    { image: burger, title: "Fresh Burgers", description: "Enjoy our freshly made, juicy burgers with a side of crispy fries." },
    { image: pizza, title: "Spicy Pizza", description: "Crispy and spicy chicken wings, perfect for any occasion." },
    { image: frenchFrie, title: "French Fries", description: "A healthy and refreshing salad packed with organic veggies." },
    { image: cuisinChicken, title: "Cuisin Chicken", description: "Indulge in a cheesy pizza with a delicious thin crust." },
    { image: hotdog, title: "Hotdog", description: "Savor our perfectly grilled, tender and juicy steak." },
    { image: noodles, title: "Noodles Bowls", description: "A nutritious bowl of smoothies topped with fresh fruits." },
  ];

  const increase = () => {
    if (currentIndex + itemsPerPage < datas.length) {
      setCurrentIndex((prev) => prev + 1);
    }
    else{
      setCurrentIndex(0)
    }
  };

  const decrease = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 4;
      setItemsPerPage(newItemsPerPage);
      setCurrentIndex(0); // Reset to start when screen size changes
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(()=>{
    const interval = setInterval(() => {
      increase()
    }, 3000);
    return ()=>clearInterval(interval)
  },[currentIndex,itemsPerPage])


  return (
    <div className='bg-[#FBF7F2] h-auto md:h-screen 2xl:h-auto 2xl:py-20 w-full flex items-center py-10 md:my-0 relative'>
      <Layout>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between space-y-8 items-center'>
          <div className='flex flex-col gap-3 md:col-span-2'>
            <div className='flex items-center gap-2 font-bold text-red-600'>
              <div className='w-3 h-3 bg-red-600'></div><p>Crispy, Every Bite Taste</p>
            </div>
            <h3 className='font-bold text-5xl'>POPULAR FOOD ITEMS</h3>
          </div>
          <div className='flex md:order-2 order-3 justify-center md:justify-end gap-5 col-span-1'>
            <div onClick={decrease} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
              <IoIosArrowBack className='text-2xl'></IoIosArrowBack>
            </div>
            <div onClick={increase} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
              <IoIosArrowForward className='text-2xl'></IoIosArrowForward>
            </div>
          </div>

          <div className='flex gap-5 col-span-3 order order-2 mt-10'>
            {
              datas.slice(currentIndex, currentIndex + itemsPerPage).map((data, index) => (
                <Card key={index} img={data.image} title={data.title} desc={data.description} />
              ))
            }
          </div>
        </div>

        <img className='w-32 h-32 absolute -left-16 bottom-20' src={popularSecSideImg} alt="" />
      </Layout>
    </div>
  )
}

export default PopularItems;
