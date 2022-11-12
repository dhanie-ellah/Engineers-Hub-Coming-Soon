import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars, FaWindowClose } from "react-icons/fa"
import { useState } from 'react'
import Modal from './Modal'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='flex bg-blue justify-between px-20 py-3 items-center text-xs lg:px-5 lg:text-base'>
      <div className='lg:w-2/5 z-10 w-1/6'>
        <Link to='/' className=''><img src={logo} alt="Engineer's hub logo" className='w-full' /></Link>
      </div>

      <div className='flex justify-between w-4/6 lg:absolute lg:top-0 lg:flex-col lg:justify-center lg:items-center lg:h-full lg:bg-blue lg:w-full lg:left-0 lg:gap-4 lg:text-center lg:hidden'>
        <div className='flex gap-10 lg:flex-col lg:gap-4'>
          <a onClick={() => setShowModal(!showModal)} className='link-hover p-1 border-b-2 border-transparent'>Find job</a>
          <a onClick={() => setShowModal(!showModal)} className='link-hover p-1 border-b-2 border-transparent'>Post a job</a>
          <a onClick={() => setShowModal(!showModal)} className='link-hover p-1 border-b-2 border-transparent'>Companies</a>
        </div>

        <div className='flex items-center gap-5 lg:flex-col lg:gap-4'>
          <a onClick={() => setShowModal(!showModal)} className='btn border border-orange'>Register</a>
          <a onClick={() => setShowModal(!showModal)} className='bg-orange btn border border-orange'>Login</a>
        </div>
      </div>

      <FaBars className='hidden lg:block z-10 text-xl text-orange' onClick={() => setShowNav(!showNav)}/>
      <FaWindowClose className='hidden z-10' onClick={() => setShowNav(showNav)}/>

      {showModal ? (<Modal setShowModal={setShowModal} />) : null}
      {/* {showModal && <Modal setOpenModal={setShowModal} />} */}
    </div>
  )
}

export default Nav