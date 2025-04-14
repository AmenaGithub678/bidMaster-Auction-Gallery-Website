import React from 'react';
// import { CiHeart } from "react-icons/ci";


import { FaHeart, FaRegHeart } from "react-icons/fa";
const Item = ({ item,handleitems,markedItem}) => {
  // console.log(handleitems)

  const isMarked = markedItem.some(marked => marked.id === item.id);
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

      <button
  onClick={() => {
    if (!isMarked) {
      handleitems(item);
    }
  }}
  className={`btn btn-ghost btn-xs rounded-full p-1 transition-colors duration-300 ${
    isMarked
      ? 'text-red-500 cursor-not-allowed'
      : 'hover:bg-gray-500 hover:text-red-500 cursor-pointer rounded-2xl'
  }`}
  title={isMarked ? "Already in favorites" : "Add to favorites"}
>
  {isMarked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
</button>


      </td>
    </tr>
  );
};

export default Item;
