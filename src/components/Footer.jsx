import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MetricJet</h1>
        <p className='py-4'>Gain full visibility into your data operations with our centralized analytics dashboard. Monitor key metrics, track performance in
      real-time, and make informed decisions backed by data. Whether you're analyzing customer behavior or optimizing business processes,
      our platform brings everything together in one intuitive interface.</p>
    <div className='flex justify-between md:w-[75%] my-6'>
        {/* <FaDribbbleSquare size={30}/>
        <FaFacebookSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaInstagramSquare size={30}/>
        <FaTwitterSquare size={30}/> */}
        <a href="https://facebook.com/ujiro-eruteya" target="_blank" rel="noopener noreferrer">
  <FaFacebookSquare size={30} />
</a>
<a href="https://github.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
  <FaGithubSquare size={30} />
</a>
<a href="https://instagram.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
  <FaInstagramSquare size={30} />
</a>
<a href="https://x.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
  <FaTwitterSquare size={30} />
</a>
<a href="https://dribbble.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
  <FaDribbbleSquare size={30} />
</a>

      </div>        
     </div>
     <div className='lg:col-span-3 flex justify-between'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
           {/*  <li className='py-2 text-sm'>Press</li> */}
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>

     </div>
    </div>
  )
}

export default Footer