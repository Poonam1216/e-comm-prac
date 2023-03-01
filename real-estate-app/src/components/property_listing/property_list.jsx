import React from 'react';
import './property.css'
import { useState } from 'react';
import data from './'


const Property_list = () => {
    const [search , setSearch] = useState("");
        return (
             <>
         <div className='Search'>
         <div className='Search_input'>
                       <input type="text" placeholder='Search PPD ID' id="searchInput" onChange={(event)=>{
              setSearch(event.target.value); 
           }}/>
           <button type="submit"><i class="fa fa-search"></i></button>
           <div>
              {
                data
                .filter((val)=>{
                    if(search == ""){
                        return val;
                    }else if(val.PPD_ID.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    }
                })
                .map((val)=>{
                    return(
                        <div className='data' key={val.id}>
                            <div className='name'>{val.PPD_ID} </div>
                            <div className='name'>{val.Image}</div>
                            <div className='name'>{val.Property}</div>
                            <div className='name'>{val.Contact}</div>
                            <div className='name'>{val.Area}</div>
                            <div className='name'>{val.Views}</div>
                            <div className='name'>{val.Status}</div>
                            <div className='name'>{val.Days_Left}</div>
                            <div className='name'>{val.Action}</div>
                        </div>
                    )
                })
              }
           </div>





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
         <div className='item'> PPD1125 </div>
         <div className='item'><i class="fa fa-camera fa-2x" aria-hidden="true"></i> </div>
         <div className='item'>Plot</div>
         <div className='item'>988754322</div>
         <div className='item'>1200</div>
         <div className='item'>02</div>
         <div className='item'>sold</div>
         <div className='item'>09</div>
         <div className='item'>Action</div>
    </div>}
    </div>
    </>
  )
}

export default Property_list;
