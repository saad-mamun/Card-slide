import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Slider() {
    const slides =[
        {
            id:1,
            heading:"Make more time for the work that matters most",
            description:"Best software platform for running an internet business",
            image:"/Group.png"
        },
        {
            id:2,
            heading:"take more time for the work that matters most",
            description:"Best software platform for running an internet business",
            image:"/Group.png"
        },
        {
            id:3,
            heading:"vote more time for the work that matters most",
            description:"Best software platform for running an internet business",
            image:"/Group.png"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const {heading, description, image} = slides[currentIndex]

    const prevSlide =() =>{
        setCurrentIndex((prevIndex)=> (prevIndex === 0 ? slides.length -1  : prevIndex - 1) )
    }

    const nextSlide=() =>{
        setCurrentIndex((prevIndex)=> (prevIndex === slides.length -1 ? 0 : prevIndex + 1))
    }
  return (
    <section className='max-w-[1400px] py-24 px-6 md:px-12 mx-auto'>
        <div className='flex flex-col justify-between md:flex-row items-center gap-20'>
            {/* left side */}
            <div className='flex flex-col justify-between w-full md:w-1/2 space-y-6'>
                <h1 className='text-2xl font-bold md:text-5xl max-w-md text-black'>{heading}</h1>
                <p className='text-gray-400 max-w-sm text-[20px]'>{description}</p>
                <div className='flex items-center space-x-4 mt-4'>
                    <button onClick={prevSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'>
                        <ChevronLeftIcon className='text-black' />
                    </button>

                    <button  onClick={nextSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'>
                        <ChevronRightIcon className='text-black' />
                    </button>
                </div>
            </div>
            {/* right side */}
            <div className='w-full md:w-1/2 flex justify-center'>
                <img className='w-full md:w-[65%] object-cover' src={image} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Slider
