import React from 'react'
import '../Customcss/header.css';
import { IoIosHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoIosList } from "react-icons/io"; 
import { IoIosSunny } from "react-icons/io"; 
import { IoMdMoon } from "react-icons/io";


const Header = (props) => {
  return (
    <div>
    <div className="  headerAndScroolBar ">
    <div className='scroolbar'>
    
    <div id="list-example" className="ListOfItem list-group">
  <a className=" Icon1 list-group-item list-group-item-action" href="#list-item-1"><IoIosHome/>                Home</a>
  <a className="Icon2 list-group-item list-group-item-action" href="#list-item-2"><IoIosSearch/>                Search</a>
  <a className="Icon3 list-group-item list-group-item-action" href="#list-item-3"><IoIosHeart/>                Favourite</a>  
  <a className=" Icon4 list-group-item list-group-item-action" href="#list-item-4"><IoIosList/>                PlayList</a>
</div>
</div>
<div className='imageText1'>
    <h1 className=" imageText">Your Favourite Tunes</h1> 
    <h3 className=" imageText2">All         <IoIosSunny />    and <IoMdMoon /> All</h3>
</div>
      <img src={props.img} alt="" height={270}  width={1500} />
      </div>



      
    </div>
  )
}

export default Header
