import React from 'react';
import './property.css'
import { useState } from 'react';


const Property_list = () => {
    const [search , setSearch] = useState("");
  return (
    <>
    <div className='Search'>

        <div className='Search_input'>
            
            <input type="text" placeholder='Search PPD ID' id="searchInput" onChange={(event)=>{
              setSearch(event.target.value);
        }} /> <i class="fa fa-search" aria-hidden="true"></i>
        </div>

<div className='Add_property'>
    <button onclick="/"> +Add Property</button>
</div>

</div>
    <div>
     <div className='attributes'>
         <div className='name'>PPD ID </div>
         <div className='name'>Image</div>
         <div className='name'>Property</div>
         <div className='name'>Contact</div>
         <div className='name'>Area</div>
         <div className='name'>Views</div>
         <div className='name'>Status</div>
         <div className='name'>Days Left</div>
         <div className='name'>Action</div>
    </div>
    {<div className='data'>
         <div className='item'>PPD ID </div>
         <div className='item'><i class="fa fa-camera fa-2x" aria-hidden="true"></i> </div>
         <div className='item'>Property</div>
         <div className='item'>Contact</div>
         <div className='item'>Area</div>
         <div className='item'>Views</div>
         <div className='item'>Status</div>
         <div className='item'>Days Left</div>
         <div className='item'>Action</div>
    </div>}
    </div>
    </>
  )
}

export default Property_list;
