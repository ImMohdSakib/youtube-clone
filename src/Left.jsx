import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";


const Left = (setQuery) => {
  const handleHomeClick = () =>{
    setQuery('programming');
  }
  const handleShortsClick = () =>{
    setQuery('shorts');
  }
  const handleSubscriptionClick = () => {
    setQuery('Subscription');
  }
  const handleYouClick = () => {
    setQuery('You');
  }
  return (
    <div>
        
        <div className="icons">
            
            <div className="left-icons">
            <div className="home" onClick={handleHomeClick}>
            <IoMdHome />
            <p>Home</p>
            </div>
            <div className="shorts" onClick={handleShortsClick}>
            <SiYoutubeshorts />
            <p>Shorts</p>
            </div>
            <div className="subscription" onClick={handleSubscriptionClick}>
            <MdOutlineSubscriptions />
            <p>Subscriptions</p>
            </div>
            <div className="you" onClick={handleYouClick}>
            <CiYoutube />
            <p>You</p>
            </div>
            </div>
            </div>

    </div>
  )
}

export default Left