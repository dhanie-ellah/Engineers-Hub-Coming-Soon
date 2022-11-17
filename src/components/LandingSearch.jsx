import React from 'react'
import landingSearch from '../assets/landing-search.png'
import Envelope from '../assets/envelope.png'
// import lightSquare from '../assets/3.png'
// import darkSquare from '../assets/2.png'
// import landingImage from '../assets/1.png'

const LandingSearch = () => {  
  return (
    <div className="p-10 w-4/5 m-auto my-12 flex justify-between items-center lg:flex-col-reverse lg:w-full lg:p-5 lg:gap-1 lg:my-3">
      <div className="w-6/12 flex flex-col gap-1.5 px-12 py-5 lg:w-full lg:px-0 lg:gap-1.5">
        <h1 className="text-blue text-2xl lg:text-3xl md:text-xl font-semibold">
          The Engineers Community
        </h1>
        <h1 className="text-orange text-4xl lg:text-5xl md:text-4xl font-bold">
          Coming Soon
        </h1>
        <p className="font-semi-bold text-dark-grey text-[12px] lg:text-lg md:text-sm">
          Be the first to hear about latest updates, opportunities and freebies
          from Engineers Hub when you subscribe to our News letter
        </p>
        <form className="flex flex-col gap-2 lg:gap-1.5">
          <div className="relative">
            <img
              src={Envelope}
              alt=""
              className="absolute top-3.5 left-2.5 w-3.5 lg:top-4 md:top-3.5"
            />
            <input
              className="w-full rounded-full py-2 lg:py-3 md:py-2 px-7 placeholder:text-dark-grey placeholder:text-xs border text-dark-grey outline-none border-dark-grey text-sm"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <input
            className="bg-orange w-fit text-xs rounded-full px-5 py-2.5 lg:py-3 cursor-pointer md:py-2.5"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>

      <div className="w-4/12 h-fit relative lg:w-[90%] lg:m-auto">
        <img
          className="w-full flex items-center justify-center"
          src={landingSearch}
          alt=""
        />
        {/* <img src={lightSquare} alt="" className='absolute top-10 left-10'/>
        <img src={darkSquare} alt="" className='absolute top-5 left-5'/>
        <img src={landingImage} alt="" className='absolute top-0 left-0'/> */}
      </div>
    </div>
  );
}

export default LandingSearch