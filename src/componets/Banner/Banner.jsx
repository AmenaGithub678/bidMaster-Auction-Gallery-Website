import React from 'react';
import bannerImg from'../../assets/Banner-min.jpg' 
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div
        className="h-[500px] bg-cover bg-center flex items-center justify-start px-8"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="max-w-xl text-[#FFD337]">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-snug">
          <Typewriter
            options={{
              strings: [
                'Bid on Unique Items from Around the World',
                'Discover Hidden Gems at Great Prices',
                'Join Live Auctions Now!',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
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