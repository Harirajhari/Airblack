import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className="relative h-auto">
            <div className="flex flex-wrap">
                <img src="/assets/1.png" alt="Image 1" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/2.png" alt="Image 2" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/3.png" alt="Image 3" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/4.png" alt="Image 4" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/5.png" alt="Image 5" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/6.png" alt="Image 6" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/7.png" alt="Image 7" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/8.png" alt="Image 8" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/9.png" alt="Image 9" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/10.png" alt="Image 10" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/11.png" alt="Image 11" className="h-full object-cover w-1/4 opacity-20" />
                <img src="/assets/12.png" alt="Image 12" className="h-full object-cover w-1/4 opacity-20" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center z-10">
                <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-roca-one pl-14 pt-12">
                    Join our groing
                </div>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-roca-one pl-20">
                    community of
                </div>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-roca-one pl-20">
                    35,000+ alumni
                </div>
                <button className="ml-3 mr-8 px-40 gradient-bg text-white font-bold rounded">
            Apply Now
          </button>

                <div>
                <div className="flex mt-5 ml-8 mb-4">
                    <a href="#" className="mr-6"><img src="/assets/instagram.png" alt="Instagram" className="w-12 h-12" /></a>
                    <a href="#" className="mr-6"><img src="/assets/facebook.png" alt="Facebook" className="w-12 h-12" /></a>
                    <a href="#" className="mr-6"><img src="/assets/linkedin.png" alt="LinkedIn" className="w-12 h-12" /></a>
                    <a href="#" ><img src="/assets/twitter.png" alt="Twitter" className="w-12 h-12" /></a>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
