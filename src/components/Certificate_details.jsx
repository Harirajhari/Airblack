import React from 'react';
import './styles.css';


const Certificate_details = () => {
    return (
        <div className='pl-5 flex items-center'>
            <div className='flex flex-col'>
                <h1 className='text-white font-roca-one pt-10'>Professional Online</h1>
                <h1 className='text-white font-roca-one'>Makeup Course</h1>
                <div className='mt-3 pt-2 pl-4 rounded-md' style={{ backgroundColor: '#313235', maxWidth: '250px' }}>
                    <div className="flex pb-2" style={{ opacity: 0.8 }}>
                        <img src="/assets/certificate-payment.png" alt="certificate-design" className="mr-4" />
                        <h3 className='text-white'>Certification Programme</h3>
                    </div>
                </div>
                <div className='pt-5'>
                <h2 className='text-white'><span role="img" aria-label="checkmark" style={{ marginRight: '12px' }}>✓</span> India's No.1 Online Makeup Course</h2>
                <h2 className='text-white pt-3'><span role="img" aria-label="checkmark" style={{ marginRight: '12px' }}>✓</span> Learn by LIVE Do-it-Together Classes</h2>
                <h2 className='text-white pt-3'><span role="img" aria-label="checkmark" style={{ marginRight: '12px' }}>✓</span> Unlimited Practice Session to master skills</h2>
                </div>
            </div>
            <div></div>
            <span role="img" aria-label="star emoji" className="text-white mr mt-7">⭐</span>
            <h3 className="text-white ml-4 mt-7" style={{ color: '#fcd53f' }}>Rated 4.85/5</h3>
        </div>

    );
}

export default Certificate_details;

