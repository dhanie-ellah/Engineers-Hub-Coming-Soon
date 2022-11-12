import React from 'react'
import landingSearch from '../assets/landing-search.png'
import Envelope from '../assets/envelope.png'

const LandingSearch = () => {  
  return (
    <div className='p-10 w-4/5 m-auto my-12 flex justify-between items-center lg:flex-col-reverse lg:w-full lg:p-5 lg:gap-2'>
      <div className='w-6/12 flex flex-col gap-3 px-12 py-5 lg:w-full lg:px-0'>
        <h1 className='text-blue text-2xl font-semibold'>The Engineers Community</h1>
        <h1 className='text-orange text-5xl font-bold'>Coming Soon</h1>
        <p className='font-semi-bold text-dark-grey text-sm'>Be the first to hear about latest updates, opportunities and freebies from Engineers Hub when you subscribe to our News letter</p>
        <form className='flex flex-col gap-2'>
          <div className='relative'>
            <img src={Envelope} alt="" className='absolute top-3 left-2.5 w-3.5'/>
            <input className='w-full rounded-full py-1.5 px-7 placeholder:text-dark-grey placeholder:text-xs border text-dark-grey outline-none border-dark-grey text-sm' type="text" placeholder='Enter Email Address'/>
          </div>
          <input className='bg-orange w-fit text-xs rounded-full px-5 py-2 cursor-pointer' type="submit" value="Subscribe" />
        </form>
      </div>

      <div className='w-4/12 relative flex items-center justify-center lg:w-full'>
        <img className='w-full flex items-center justify-center' src={landingSearch} alt="" />
      </div>
    </div>
  )
}

export default LandingSearch