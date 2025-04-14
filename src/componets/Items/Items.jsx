import React, {useEffect,useState} from 'react';
import Item from '../Item/Item';

const Items = ({handleitems,markedItem}) => {

const[items,setItems]=useState([]);   

useEffect(() =>{
fetch("item.json").then(res=>res.json())
.then(data=>setItems(data))
},[]);

console.log(items)
  



    // console.log(setItems);

    return (
        <div>
            <table className="table w-full">
       <thead>
         <tr>
           <th>Items</th>
           <th>Current Bid</th>
           <th>Time Left</th>
           <th>Bid Now</th>
        </tr>
       </thead>
       <tbody>
         {items.map((item) => (
<Item handleitems={handleitems}
     markedItem={markedItem}
 key={item.id} item={item}></Item>
          
         ))}
       </tbody>
     </table>
       </div>
    );
};

export default Items;