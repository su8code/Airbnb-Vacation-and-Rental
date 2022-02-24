import React ,{ useState } from 'react';
import './MySearchBar.css'
import SearchIcon from "@material-ui/icons/Search";
import Search from './Search';


function SearchBarDesign(){
    const [showSearch, setShowSearch] = useState(false);
    const [navbar , setNavbar] = useState("false");

    const changeBackground = ()=> {
        if(window.scrollY  > 40) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }    
    }

    window.addEventListener('scroll' , changeBackground);

   return(

       <>
    <div>
    <div className={navbar? 'search-bar-container active' : 'search-bar-container'}>
      <div className="container-child">
          <label className="lable1">Location</label>
          <input className="lable2" id="searchInputBox" type='text' placeholder='Where are You Going?' />
      </div>
      <div className="container-child">
          <label className="lable1">Check In</label>
          <label className="lable2" >Add Dates</label>
      </div>
      <div className="container-child" >
          <label className="lable1">Check Out</label>
          <label className="lable2" >Add Dates</label>
      </div>
      <div>
      </div>
      <div className="container-child">
          <label className="lable1">Guests</label>
          <label className="lable2">Add Guests</label>
      </div> 
      <div className="iconContainer">
        <SearchIcon className="iconClass"/>
        <p>Search</p>
     </div>
    </div>   
    <div className='banner__search'>
        {showSearch && <Search />}
    </div>
   </div>
    
   </>
   );
}
export default SearchBarDesign;

/* */