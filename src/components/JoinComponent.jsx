import React from 'react';
import './styles.css';

const JoinComponent = () => {
  return (
    <div className="relative h-auto">
      <div className="flex flex-wrap">
        <img src="/assets/1.png" alt="Image 1" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/2.png" alt="Image 2" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/3.png" alt="Image 3" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/4.png" alt="Image 4" className="h-full object-cover w-1/4 opacity-20" />

        <div className="relative w-1/4 h-full">
          <img src="/assets/5.png" alt="Image 5" className="h-full object-cover w-full opacity-20" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 pt-12">
            
          </div>
        </div>

        <div className="relative w-1/4 h-full">
          <img src="/assets/6.png" alt="Image 6" className="h-full object-cover w-full opacity-20" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 pt-12">
            
          </div>
        </div>

        <div className="relative w-1/4 h-full">
          <img src="/assets/7.png" alt="Image 7" className="h-full object-cover w-full opacity-20" />
         
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 pt-12">
          </div>
        </div>

        <img src="/assets/8.png" alt="Image 8" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/9.png" alt="Image 9" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/10.png" alt="Image 10" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/11.png" alt="Image 11" className="h-full object-cover w-1/4 opacity-20" />
        <img src="/assets/12.png" alt="Image 12" className="h-full object-cover w-1/4 opacity-20" />
       
      </div>
      <div className="absolute inset-0 flex flex-col z-10 pt-12">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-roca-one pl-14">
          Why Should You
        </div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-roca-one pl-16">
          Join AirBlack?
        </div>
        <div>
        <img src="/assets/shooting.png" alt="Overlay Image 1" className="absolute inset-0 m-auto ml-14 mt-40 w-1/4 h-1/4" />
        </div>
        
        <div>
        <img src="/assets/CircleStart.png" alt="Overlay Image 3" className="absolute inset-0 m-auto mt-40 w-1/4 h-1/4" />
        </div>

        <div>
        <img src="/assets/Contact1.png" alt="Overlay Image 2" className="absolute inset-0 mt-40 ml-80 w-1/4 h-1/4" />
        <div className='mt-32 mr-2'>
        <button className="ml-3 mr-8 px-40 gradient-bg text-white font-bold rounded">
            Apply Now
          </button>

        </div>
        </div>
      </div>
    </div>
  );
}

export default JoinComponent;