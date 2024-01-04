import React from 'react';
import { FaBoxOpen } from "react-icons/fa";

const Box = () => {
        return (
                <div className=''>

                <div className='text-white inset-0 absolute inset-0 mt-[19rem] text-2xl font-semibold flex justify-center'><h1>Boxs Status</h1><br /></div>
      {/* Boxes positioned over the background */}
                <div className="absolute inset-0 flex mt-[20%] bg-black items-center bg-opacity-30 h-56 justify-around">
        {/* Each box */}
                <div className="bg-black transition-transform duration-300  hover:scale-110 bg-opacity-60 text-white flex flex-col  text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
                <div className='flex justify-center '>
                <FaBoxOpen className='w-[30px] h-[30px]'/>
                <p className="font-semibold text-xl">Box 1</p> <br />
                </div>
                <div className='flex justify-center mt-4'>
                        <p>Sorted Packages: 0</p>
                </div>
                </div>

                <div className="bg-black transition-transform duration-300  hover:scale-110 bg-opacity-60 text-white flex flex-col  text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
                <div className='flex justify-center '>
                <FaBoxOpen className='w-[30px] h-[30px]'/>
                <p className="font-semibold text-xl">Box 2</p> <br />
                </div>
                <div className='flex justify-center mt-4'>
                        <p>Sorted Packages: 0</p>
                </div>
                </div>

                <div className="bg-black transition-transform duration-300  hover:scale-110 bg-opacity-60 text-white flex flex-col  text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
                <div className='flex justify-center '>
                <FaBoxOpen className='w-[30px] h-[30px]'/>
                <p className="font-semibold text-xl">Box 3</p> <br />
                </div>
                <div className='flex justify-center mt-4'>
                        <p>Sorted Packages: 0</p>
                </div>
                </div>

                
      </div>
    </div>
        );
};

export default Box;