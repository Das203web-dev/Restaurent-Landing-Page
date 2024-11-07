import React, { useEffect, useState, useRef } from 'react';
import contactBg from '../../assets/images/contact image/contact5.jpg';
import { useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Contact() {
  const [selectNumber, setSelectNumber] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null); // State to hold selected value
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [dropUp, setDropUp] = useState(false);


  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    let numbers = [];
    for (let i = 1; i <= 50; i++) {
      numbers.push(i);
    }
    setSelectNumber(numbers);
  }, []);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    // Check if space below the button is less than the dropdown height
    setDropUp(spaceBelow < 200); // Adjust 200 based on the expected dropdown height
    setIsDropdownOpen(!isDropdownOpen);
  };


  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  // Set initial selected number for `totalPeople` in form
  useEffect(() => {
    setValue("totalPeople", selectedNumber);
  }, [selectedNumber, setValue]);

  return (
    <div style={{ backgroundImage: `url(${contactBg})` }} id='contact' className='bg-center bg-cover bg-no-repeat w-full h-auto md:h-screen relative text-white flex justify-start items-center'>
      <div className='w-full h-full absolute z-0 bg-black bg-opacity-45'></div>

      <div className='z-20 p-5 md:p-0 relative w-full max-w-6xl mx-auto flex flex-col gap-5 justify-start'>
        <div className='md:w-1/2 space-y-5'>
          <div>
            <div className='flex items-center gap-2 font-bold text-red-600'>
              <div className='w-3 h-3 bg-red-600'></div><p>Book Now</p>
            </div>
            <h3 className='font-bold text-5xl'>Book Your Table</h3>
          </div>

          <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

          <div>
            <form className='md:grid space-y-2 md:space-y-0 md:grid-cols-2 w-full h-auto gap-5' onSubmit={handleSubmit(onSubmit)}>

              <div className='flex w-full flex-col gap-1 min-h-[50px]'>
                <input
                  placeholder='Your Name'
                  className='bg-transparent w-full p-2 focus:outline-none border border-white placeholder:capitalize placeholder:text-white'
                  {...register("yourName", { required: 'This field is required' })}
                />
                {errors.yourName && <p className="text-red-500 text-sm">{errors.yourName.message}</p>}
              </div>

              <div className='flex w-full flex-col gap-1 min-h-[50px]'>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='bg-transparent w-full p-2 focus:outline-none border border-white placeholder:capitalize placeholder:text-white'
                  {...register("yourEmail", { required: 'This field is required' })}
                />
                {errors.yourEmail && <p className="text-red-500 text-sm">{errors.yourEmail.message}</p>}
              </div>

              <div className="relative flex flex-col gap-1 min-h-[50px]">
                <input
                  type='date'
                  placeholder='Reservation Date'
                  className='bg-transparent p-[7px] focus:outline-none border border-white placeholder:text-white w-full'
                  {...register("reservationDate", { required: 'Reservation date is required' })}
                  style={{ colorScheme: "dark" }} // Ensures the calendar icon is white in many browsers
                />
                {errors.reservationDate && <p className="text-red-500 text-sm">{errors.reservationDate.message}</p>}
              </div>

              <div className='flex flex-col gap-1 min-h-[50px]' ref={dropdownRef}>
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from closing dropdown if clicked inside the button
                      toggleDropdown();
                    }}
                    className="bg-transparent p-2 w-full focus:outline-none border border-white placeholder:text-white"
                  >
                    <div className='flex justify-between items-center'>
                      <p>{selectedNumber || 'Select People'}</p>
                      <div>{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                    </div>
                  </button>

                  {isDropdownOpen && (
                    <div
                      className={`absolute custom-scrollbar left-0 w-full bg-black bg-opacity-70 text-white max-h-40 overflow-y-auto ${dropUp ? 'bottom-full mb-2' : 'top-full mt-2'
                        }`}
                      style={{ zIndex: 99 }}
                    >
                      {selectNumber.map((number, index) => (
                        <div
                          key={index}
                          className="py-2 text-center cursor-pointer w-full hover:bg-black hover:bg-opacity-50 hover:text-white"
                          onClick={() => {
                            setSelectedNumber(number);
                            setValue("totalPeople", number); // Register the value with react-hook-form
                            setIsDropdownOpen(false); // Close the dropdown after selection
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                  )}

                </div>
                {errors.totalPeople && <p className="text-red-500 text-sm">{errors.totalPeople.message}</p>}
              </div>


              <textarea
                placeholder='Message'
                className='col-span-2 focus:outline-none w-full placeholder:text-white grow bg-transparent border border-white p-2'
                {...register("message")}
                rows="3"
              ></textarea>

              <input
                className='bg-[#FEBF00] w-fit uppercase py-2 font-semibold text-black px-3 text-nowrap'
                type="submit"
                value="Book Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
