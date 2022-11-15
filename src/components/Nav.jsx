import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="flex bg-blue justify-between px-28 py-5 items-center text-xs lg:px-8 lg:text-base">
        <div className="w-[15%] lg:w-2/5 z-20">
          <Link to="/" className="">
            <img src={logo} alt="Engineer's hub logo" className="w-full" />
          </Link>
        </div>
        {/* DESKTOP NAV */}
        <div className="flex gap-10 lg:flex-col lg:gap-4 lg:hidden">
          <a
            onClick={() => {
              setShowModal(!showModal);
              setShowNav(!showNav);
            }}
            className="link-hover p-1 border-b-2 border-transparent"
          >
            Find job
          </a>
          <a
            onClick={() => {
              setShowModal(!showModal);
              setShowNav(!showNav);
            }}
            className="link-hover p-1 border-b-2 border-transparent"
          >
            Post a job
          </a>
          <a
            onClick={() => {
              setShowModal(!showModal);
              setShowNav(!showNav);
            }}
            className="link-hover p-1 border-b-2 border-transparent"
          >
            Companies
          </a>
        </div>
        <div className="flex items-center gap-5 lg:flex-col lg:gap-4 lg:hidden">
          <a
            onClick={() => {
              setShowModal(!showModal);
              setShowNav(!showNav);
            }}
            className="btn border border-orange"
          >
            Register
          </a>
          <a
            onClick={() => {
              setShowModal(!showModal);
              setShowNav(!showNav);
            }}
            className="bg-orange btn border border-orange"
          >
            Login
          </a>
        </div>
        {/* MOBILE LINKS */}
        <div className="">
          <div className={`${showNav ? 'flex' : 'hidden'} lg:absolute lg:top-0 lg:flex-col lg:justify-center lg:items-center lg:h-full lg:bg-blue lg:w-full lg:left-0 lg:gap-4 lg:text-center lg:z-10`}>
            <div className="flex gap-10 lg:flex-col lg:gap-4">
              <a
                onClick={() => {
                  setShowModal(!showModal);
                  setShowNav(!showNav);
                }}
                className="link-hover p-1 border-b-2 border-transparent"
              >
                Find job
              </a>
              <a
                onClick={() => {
                  setShowModal(!showModal);
                  setShowNav(!showNav);
                }}
                className="link-hover p-1 border-b-2 border-transparent"
              >
                Post a job
              </a>
              <a
                onClick={() => {
                  setShowModal(!showModal);
                  setShowNav(!showNav);
                }}
                className="link-hover p-1 border-b-2 border-transparent"
              >
                Companies
              </a>
            </div>
            <div className="flex items-center gap-5 lg:flex-col lg:gap-4">
              <a
                onClick={() => {
                  setShowModal(!showModal);
                  setShowNav(!showNav);
                }}
                className="btn border border-orange"
              >
                Register
              </a>
              <a
                onClick={() => {
                  setShowModal(!showModal);
                  setShowNav(!showNav);
                }}
                className="bg-orange btn border border-orange"
              >
                Login
              </a>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={showNav ? faClose : faBars}
          size="xl"
          className="text-orange hidden lg:block z-20"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </nav>
    </>
  );
};

export default Nav;
