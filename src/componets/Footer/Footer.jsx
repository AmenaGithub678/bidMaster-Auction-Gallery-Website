import React from 'react';

const Footer = () => {
    return (
        <div>

<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">


<h2 className=" flex text-2xl text-[#003EA4] font-bold">Auction<span className='text-[#FFD337] font-bold'>Gallery</span></h2>

<nav className="grid grid-flow-col gap-3">
 <a className="text-lg font-normal text-[#000000]">Bid.</a>
 <a className="text-lg font-normal text-[#000000]">Win.</a>
 <a className="text-lg font-normal text-[#000000]">Own.</a>
  </nav>


  <nav className="grid grid-flow-col gap-4">
 <a className="link link-hover text-lg font-normal text-[#000000]">Home</a>
 <a className="link link-hover text-lg font-normal text-[#000000]">Auctions</a>
 <a className="link link-hover text-lg font-normal text-[#000000]">Categories</a>
 <a className="link link-hover text-lg font-normal text-[#000000]">How to works</a>
  </nav>
 


 
  <aside>
    <p>© 2025 AuctionHub. All rights reserved</p>
  </aside>
</footer>

        </div>
    );
};

export default Footer;