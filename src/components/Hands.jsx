import background from '../assets/images/background.jpg';

import { GiRobotGrab } from "react-icons/gi";

const Hands = () => {
        return (
                <div>

                  <div className='text-white absolute inset-0 mt-12 text-2xl font-semibold flex justify-center'><h1>Hands Status</h1><br /></div>
                  
      {/* Boxes positioned over the background */}
      <div className="absolute inset-0 flex mt-24 justify-around">
        {/* Each box */}
        <div className="bg-gray-200 transition-transform duration-300  hover:scale-110 bg-opacity-60 text-green-800 flex flex-col items-center justify-center text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
          
          <GiRobotGrab className='w-[80px] h-[60px]' />
          <p className="font-semibold text-xl">Hand 1</p> <br />

          
        </div>

        <div className="bg-gray-200 transition-transform duration-300 hover:scale-110 bg-opacity-60 text-red-800 flex flex-col items-center justify-center text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
          
          <GiRobotGrab className='w-[80px] h-[60px]' />
          <p className="font-semibold text-xl">Hand 2</p> <br />
        </div>

        <div className="bg-gray-200 transition-transform duration-300 hover:scale-110 bg-opacity-60 text-black flex flex-col items-center justify-center text-black shadow-2xl rounded-3xl w-[250px] h-[140px] border-0">
          
          <GiRobotGrab className='w-[80px] h-[60px]' />
          <p className="font-semibold text-xl">Add New Hand</p> <br />   
        </div>
      </div>
    </div>
                      
        );
};

export default Hands;