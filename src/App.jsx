import './App.css'
import Banner from './componets/Banner/Banner'
import Footer from './componets/Footer/Footer'
import Items from './componets/Items/Items'
import Navbar from './componets/Navbar/Navbar'
import { FaRegHeart } from "react-icons/fa6";

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className='main-container flex gap-4 px-6  bg-[#EBF0F5]'>
    
        {/* Left - Items Section */}
        <div className='left-container w-[70%] bg-[#FFFFFF] my-20 rounded-2xl'>
        <h2 className='text-[#0E2954] text-2xl font-bold ml-6'>Active Auctions</h2>
          <p className='text-[#000000] font-normal text-lg mb-4 ml-6'>
            Discover and bid on extraordinary items
          </p>
          <Items />
        </div>

     
        <div className='right-container w-[30%] p-4 bg-white border rounded-2xl text-center shadow-md my-20 h-[40%]'>
          <h2 className='flex text-[#0E2954] text-2xl items-center justify-center font-bold gap-2'>
            <FaRegHeart /> Favorite Items
          </h2>
          <div className="divider"></div>
          <h2 className="text-[#000000] font-normal text-xl">No favorites yet</h2>
          <p className="text-[#000000] font-normal text-md">
            Click the heart icon on any item to add it to your favorites
          </p>
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
