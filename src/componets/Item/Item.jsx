import React from 'react';
import { FaHeart } from "react-icons/fa";

const Item = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
          <div>
            <div className="font-bold text-[#0E2954]">{item.title}</div>
            <div className="text-sm opacity-50 text-[#0E2954]">{item.description}</div>
          </div>
        </div>
      </td>
      <td className='text-[#0E2954]'>{item.currentBidPrice}</td>
      <td className='text-[#0E2954]'>{item.timeLeft}</td>
      <td>
        <button className="btn btn-ghost btn-xs">
          <FaHeart size={25} className='text-red-600' />
        </button>
      </td>
    </tr>
  );
};

export default Item;
