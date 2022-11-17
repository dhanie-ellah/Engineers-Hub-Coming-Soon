import React from 'react'
import Envelope from '../assets/envelope.png'
import Close from '../assets/close.png'

const Modal = ({setShowModal}) => {
  return (
    <div
      className="w-screen h-screen bg-black-opacity fixed top-0 left-0 justify-center items-center cursor-pointer flex z-20"
      onClick={() => setShowModal(false)}
    >
      <div
        className="w-4/12 bg-blue rounded-lg p-10 lg:p-5 flex flex-col gap-5 md:w-10/12 lg:w-6/12 lg:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={Close}
          alt=""
          className="bg-orange rounded-full p-1 w-7 ml-auto flex justify-end"
          onClick={() => setShowModal(false)}
        />
        <h1 className="text-4xl font-bold text-orange text-center">
          COMING SOON
        </h1>
        <p className="font-semi-bold text-dark-grey text-sm text-center">
          Be the first to hear about latest updates, opportunities and freebies
          from Engineers Hub when you subscribe to our News letter
        </p>
        <form className="flex gap-4 bg-white rounded-full items-center justify-between">
          <div className="relative w-3/4 lg:w-8/12">
            <img
              src={Envelope}
              alt=""
              className="absolute top-2 left-3.5 w-4"
            />
            <input
              className="w-full rounded-full py-1.5 px-10 pr-2 placeholder:text-dark-grey placeholder:text-xs text-dark-grey outline-none text-xs"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <input
            className="bg-orange text-xs rounded-full text-center py-2 cursor-pointer rounded-l-none w-1/4 lg:w-4/12"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
}

export default Modal