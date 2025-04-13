import { useState } from 'react'
import './App.css'
import Banner from './componets/Banner/Banner'
import Footer from './componets/Footer/Footer'
import Items from './componets/Items/Items'
import Navbar from './componets/Navbar/Navbar'
import { FaRegHeart } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { toast } from 'react-toastify';

function App() {
const [markedItem, setmarkedItem] = useState([]);


  const handleitems =(item) =>{
    toast.success('Item Added to your Favorite List');
    console.log(item)
    setmarkedItem([...markedItem,item])
  }

const handleRemoveItem =(removeItems) =>{
const showUpdateItem = markedItem.filter((_, index) => index !== removeItems);
setmarkedItem(showUpdateItem);
toast.info('Item removed from your favorite list')

}
  console.log(markedItem)
  return (
    <>
      <Navbar />
      <Banner />
<div className='bg-[#EBF0F5]'>
  
<h2 className='text-[#0E2954] text-2xl font-bold pt-10 '>Active Auctions</h2>
          <p className='text-[#000000] font-normal text-lg  '>
            Discover and bid on extraordinary items
          </p>
</div>
      <div className='main-container flex gap-4 px-6  bg-[#EBF0F5] '>
      <ToastContainer />
        {/* Left - Items Section */}
        <div className='left-container w-[70%] bg-[#FFFFFF] my-20  rounded-2xl'>
<Items handleitems={handleitems}></Items>
          {/* <Items /> */}
        </div>

       
        <div className='right-container w-[30%] p-4 bg-white border rounded-2xl text-center shadow-md my-20  h-[40%]'>
          <h2 className='flex text-[#0E2954] text-2xl items-center justify-center font-bold gap-2'>
          
            <FaRegHeart /> Favorite Items
          </h2>

          <div className="divider"></div>
         <div>
         <h2 className="text-[#000000] font-normal text-xl">No favorites yet</h2>
          <p className="text-[#000000] font-normal text-md">
            Click the heart icon on any item to add it to your favorites
          </p>

          {markedItem.map((marked, index) => (
  <div key={index} className="flex items-center gap-3 border-b py-2">
    <img src={marked.image} alt={marked.title} className="w-16 h-16 object-cover rounded" />
    <div className="flex-1 text-left">
      <p className="text-sm font-medium">{marked.title}</p>
      <div className="flex text-xs text-gray-600">
  <span>{marked.currentBidPrice}</span>
  <span className="ml-4">Bids: {marked.bidsCount}</span>
</div>
    </div>
    <button
      onClick={() => handleRemoveItem(index)}
      className="text-black hover:text-red-700"
    >
      <RxCross2 size={20} />
    </button>
  </div>
))}




         </div>
          <div className="divider"></div>
          <div className='flex justify-between items-center px-4'>
            <h4 className='text-[#000000] font-normal text-xl'>Total bids Amount</h4>
            <p className='text-[#000000] font-medium text-xl'>$0000</p>



          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App;
