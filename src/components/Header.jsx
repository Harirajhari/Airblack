import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[125px] md:h-[200px] lg:h-[250px] xl:h-[300px] flex items-center justify-between">
      <img src="/assets/1.png" alt="Image 1" className="h-full object-cover w-1/4" />
      <img src="/assets/2.png" alt="Image 2" className="h-full object-cover w-1/4" />
      <img src="/assets/3.png" alt="Image 3" className="h-full object-cover w-1/4" />
      <img src="/assets/4.png" alt="Image 4" className="h-full object-cover w-1/4" />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col z-10">
        <div className="flex items-center pl-4">
          <img src="/assets/Logo_image.png" alt="Logo" className="h-8 md:h-12 lg:h-16 xl:h-20 mr-1 mb-2" />
          <div className="flex flex-col">
            <p className="text-white font-inter text-[8px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] font-medium leading-[12.1px] sm:leading-[16.8px] md:leading-[21.6px] lg:leading-[28.8px] xl:leading-[36px] tracking-[0.5px] sm:tracking-[3.1px] md:tracking-[4.0px] lg:tracking-[5.3px] xl:tracking-[6.5px]">
              airblack
            </p>
            <p className="text-f56563 font-inter text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] font-medium leading-[12.1px] sm:leading-[16.8px] md:leading-[21.6px] lg:leading-[28.8px] xl:leading-[36px] tracking-[0.8px] sm:tracking-[3.1px] md:tracking-[4.0px] lg:tracking-[5.3px] xl:tracking-[6.5px]">
              beauty
            </p>
            <p className="text-f56563 font-inter text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] font-medium leading-[12.1px] sm:leading-[16.8px] md:leading-[21.6px] lg:leading-[28.8px] xl:leading-[36px] tracking-[0.8px] sm:tracking-[3.1px] md:tracking-[4.0px] lg:tracking-[5.3px] xl:tracking-[6.5px]">
              club
            </p>
          </div>
        </div>
        <div className="text-white font-inter text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] font-medium leading-[12.1px] sm:leading-[16.8px] md:leading-[21.6px] lg:leading-[28.8px] xl:leading-[36px] tracking-[2.2px] sm:tracking-[3.1px] md:tracking-[4.0px] lg:tracking-[5.3px] xl:tracking-[6.5px] pl-3 pt-2">
          PRESENTS
        </div>
      </div>
    </div>
  );
};

export default Header;
