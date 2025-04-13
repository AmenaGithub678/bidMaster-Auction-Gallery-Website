import React from 'react';
import { CiHeart } from "react-icons/ci";

const Item = ({ item,handleitems}) => {
  // console.log(handleitems)
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
      <td className='text-[#0E2954]'>${item.currentBidPrice}</td>
      <td className='text-[#0E2954]'>{item.timeLeft}</td>
      <td>
        <button onClick={()=>handleitems(item)} 
        className="btn btn-ghost btn-xs">
        <CiHeart size={25}/>
          {/* <FaHeart size={25} className='' /> */}
        </button>
      </td>
    </tr>
  );
};

export default Item;
