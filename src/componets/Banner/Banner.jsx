import React from 'react';
import bannerImg from'../../assets/Banner-min.jpg' 
const Banner = () => {
    return (
        <div
        className="h-[500px] bg-cover bg-center flex items-center justify-start px-8"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="mb-6 text-gray-200">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Auctions
          </button>
        </div>
      </div>
    );
};

export default Banner;