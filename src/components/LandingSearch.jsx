import React from 'react'
import landingSearch from '../assets/landing-search.png'
import Envelope from '../assets/envelope.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const LandingSearch = () => {  
  return (
    <div className="p-10 py-5 w-4/5 m-auto my-5 flex justify-between items-center lg:flex-col-reverse lg:w-full lg:p-5 lg:gap-1 lg:my-3">
      <div className="w-[65%] flex flex-col gap-1.5 px-12 py-5 lg:w-full lg:px-0 lg:gap-1.5">
        <h1 className="text-blue w-10/12 lg:w-full text-2xl lg:text-4xl md:text-xl font-semibold lg:text-center">
          Online Social Platform For Engineers.
        </h1>
        <h1 className="text-orange text-4xl lg:text-5xl md:text-4xl font-bold lg:text-center">
          Coming Soon
        </h1>
        <p className="font-semi-bold text-dark-grey text-[12px] lg:text-lg md:text-sm lg:text-center">
          Be the first to know when we launch.
        </p>
        <form className="flex flex-col gap-2 lg:gap-1.5 mb-2">
          <div className="relative">
            <img
              src={Envelope}
              alt=""
              className="absolute top-3 left-2.5 w-3.5 lg:w-5 lg:top-[18px] lg:left-3.5 md:top-3.5 md:w-3.5"
            />
            <input
              className="w-[75%] rounded-full py-1.5 lg:py-4 lg:px-10 md:py-2 px-7 placeholder:text-dark-grey placeholder:text-xs lg:placeholder:text-base border text-dark-grey outline-none border-dark-grey text-sm lg:w-full md:placeholder:text-xs md:px-8"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <input
            className="bg-orange w-fit text-xs rounded-full px-5 py-2 lg:py-3 cursor-pointer md:py-2.5 hover:bg-orange-80 lg:m-auto lg:text-base md:text-xs"
            type="submit"
            value="Subscribe"
          />
        </form>

        <div className="flex justify-between flex-wrap">
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">Connect with other engineers</p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Connect with top engineering firms
            </p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Get employed by top Engineering firms
            </p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Collaborate with other Engineering firms
            </p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Access professional Training Firms for Engineers
            </p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">Be visible to the world</p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Share your engineering contents, innovations, and research updates
              with the world
            </p>
          </div>
          <div className="about-items">
            <FontAwesomeIcon icon={faCheck} className="about-items-icon" />
            <p className="about-items-text">
              Connect with local and international Engineering organizations
            </p>
          </div>
        </div>

        <h1 className="text-blue font-semibold text-sm lg:text-lg md:text-sm">
          All engineers in one platform.
        </h1>
      </div>

      <div className="w-[35%] h-fit relative lg:w-[90%] lg:m-auto">
        <img
          className="w-full flex items-center justify-center"
          src={landingSearch}
          alt=""
        />
      </div>
    </div>
  );
}

export default LandingSearch