import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import mic from './assets/mic.png'
import img from './assets/logo1.png'
import me from './assets/me.jpg'
const Header = () => {
  return (
    <header>
        <div className='header-left'>
        <IoMenuOutline />   
        <div className="icon">
            <img src={img} alt="" />
        </div>
        </div>

        <div className='header-middle'>
        <form className='header-form'>
          <div className='search-box'>
        <input 
        className='search'
          type="text" 
          placeholder="Search" 

        />
        </div>
        
        <button type="submit"><CiSearch className='div'/></button>
      </form>
      <div className='mic'>
      <img src={mic} alt="" />
      </div>
        </div>
        <div className='header-right'>
        <RiVideoAddLine />
         <FaRegBell />
      <img src= {me} alt="" />
        </div>
    </header>
  )
}

export default Header