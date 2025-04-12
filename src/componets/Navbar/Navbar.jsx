import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
    return (
        <div>

<div className="navbar bg-[#FFFFFF] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
      
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-[#003EA4]">Auction<span className='text-[#FFD337]'>Gallery</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-[#000000] text-xl'><a>Home</a></li>
      <li className='text-[#000000] text-xl'><a>Auctions</a></li>
      <li className='text-[#000000] text-xl'><a>Categories</a></li>
      <li className='text-[#000000] text-xl'><a>How to works</a></li>
    </ul>
  </div>


  <div className="navbar-end">
  {/* Notification icon */}
  <button className="btn btn-ghost btn-circle">
    <IoIosNotificationsOutline className="text-2xl" />
  </button>

  {/* Avatar dropdown */}
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</div>

</div>









        </div>
    );
};

export default Navbar;