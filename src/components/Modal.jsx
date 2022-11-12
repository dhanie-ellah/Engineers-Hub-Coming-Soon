import React from 'react'
import Envelope from '../assets/envelope.png'
import Close from '../assets/close.png'

const Modal = ({setShowModal}) => {
  return (
    <div className='w-screen h-screen bg-navy-blue-60 fixed top-0 left-0 justify-center items-center text-center cursor-pointer flex z-20' onClick={() => setShowModal(false)}>
      <div className='w-4/12 bg-blue rounded-lg p-10 flex flex-col gap-3 md:w-11/12 lg:w-9/12 lg:rounded-3xl' onClick={(e)=> e.stopPropagation()}>
        <img src={Close} alt="" className='bg-orange rounded-full p-1 w-7 ml-auto flex justify-end' onClick={() => setShowModal(false)} />
        <h1 className='text-4xl font-bold text-orange'>COMING SOON</h1>
        <p className='font-semi-bold text-dark-grey text-sm'>Be the first to hear about latest updates, opportunities and freebies from Engineers Hub when you subscribe to our News letter</p>
        <form className='flex flex-col gap-4 w-9/12 m-auto'>
          <div className='relative'>
            <img src={Envelope} alt="" className='absolute top-3 left-2.5 w-3.5'/>
            <input className='w-full rounded-full py-1.5 px-7 placeholder:text-dark-grey placeholder:text-xs border text-dark-grey outline-none border-dark-grey text-sm' type="text" placeholder='Enter Email Address'/>
          </div>
          <input className='bg-orange w-fit text-xs rounded-full px-5 py-2 cursor-pointer m-auto' type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  )
}

export default Modal