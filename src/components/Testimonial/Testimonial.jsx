import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import testimonial from '../../assets/video/testimonial.mp4'
import testimonial2 from '../../assets/video/video2.mp4'
import client1 from '../../assets/images/ClientImage/c1.png'
import client2 from '../../assets/images/ClientImage/c2.png'
import client3 from '../../assets/images/ClientImage/c3.png'
import client4 from '../../assets/images/ClientImage/c4.png'
import popularSecSideImg from '../../assets/images/popular image/popularSectionimg.png'
import { FaQuoteLeft } from "react-icons/fa";



function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 1
    const [display, setDisplay] = useState({})

    const datas = [
        {
            image: testimonial,
            clientImg: client1,
            clientName: "Khalid Al Dawsry",
            review: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            location: 'Saudi , Jeddah'
        },
        {
            image: testimonial2,
            clientImg: client2,
            clientName: "Ralid Al Dawsry",
            review: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            location: 'Bangladesh , Dhaka'
        },
        {
            image: testimonial,
            clientImg: client3,
            clientName: "Lalid Al Lawsry",
            review: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            location: 'America , New York'
        },
        {
            image: testimonial2,
            clientImg: client4,
            clientName: "Cuisin chicken",
            review: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            location: 'India , Delhi'
        },
    ];

    useEffect(() => {
        if (currentIndex < datas.length) {
            const ans = datas[currentIndex]
            setDisplay(ans)
        }
    }, [currentIndex])


    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prev=>(prev + 1) % datas.length)
        },4000)
        return ()=>clearInterval(interval)
    },[])


    const increase = () => {
        // let itemsPerPage = getItemsPerPage()
        if (currentIndex <= datas.length) {
            setCurrentIndex((prev)=>(prev + 1) % datas.length)
        }
    }
    const decrease = () => {
        if (currentIndex > 0 && currentIndex < datas.length) {
            setCurrentIndex((prev)=>(prev - 1) % datas.length)
        }
    }

    console.log(currentIndex)

    return (
        <div className='h-auto bg-white md:h-screen 2xl:h-auto 2xl:py-20 w-full flex items-center py-10 md:my-0 relative'>
            <Layout>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-between space-y-8 items-center'>
                    <div className='flex flex-col gap-3 md:col-span-2'>
                        <div className='flex items-center gap-2 font-bold text-red-600'>
                            <div className='w-3 h-3 bg-red-600'></div><p> Crispy, Every Bite Taste</p>
                        </div>
                        <h3 className='font-bold text-5xl'>What Some of my Customers Say</h3>
                    </div>
                    <div className='flex md:order-2 order-3 justify-center md:justify-end gap-5 col-span-1'>
                        <div onClick={decrease} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
                            <IoIosArrowBack className='text-2xl'></IoIosArrowBack>
                        </div>
                        <div onClick={increase} className='bg-white w-10 h-10 rounded-full shadow-xl cursor-pointer shadow-[#0000001A] flex justify-center items-center'>
                            <IoIosArrowForward className='text-2xl'></IoIosArrowForward>
                        </div>
                    </div>


                    <div className='flex md:flex-row flex-col-reverse col-span-3 order order-2 mt-10 lg:h-[300px]'>
                        <div className='md:w-1/2 w-full flex items-start p-4 md:p-10 bg-[#FEBF00]'>
                            <FaQuoteLeft className='text-5xl'></FaQuoteLeft>
                            <div className='md:p-5 p-3 flex flex-col gap-10 md:gap-0 justify-between h-full'>
                                <p className='text-[#0A1425]'>{display?.review}</p>
                                <div className='flex justify-between  items-center border-b border-[#0A1425]'>
                                    <div>
                                        <h4 className='text-lg font-bold'>{display.clientName}</h4>
                                        <p>{display.location}</p>
                                    </div>
                                    <div className='border-b-2 pb-2 border-[#BD1F17]'>
                                    <img className='w-10 h-10 rounded-full' src={display.clientImg} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='md:w-1/2'>
                        <video className=' h-full object-fill' src={display?.image} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>

                <img className='w-32 h-32 hidden md:block md:absolute -left-16 bottom-20' src={popularSecSideImg} alt="" />

            </Layout>
        </div>
    )
}

export default Testimonial