// import React from 'react'
import { useState } from "react";
import { FaCheck, FaCheckDouble } from "react-icons/fa6";

const Message = () => {
  const {isdelivered, setIsDelivered} = useState(false)

  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="user avatar" />
            </div>
        </div>
        <div className="chat-bubble text-white">Hey Man, How is it going </div>
        <div className="flex items-center gap-2 my-1">
          <div className="chat-footer text-xs gap-1 text-white">12:15</div>
          <div className="chat-footer text-xs gap-1 text-white"> {isdelivered ? <FaCheckDouble /> : <FaCheck />} </div>
        </div>
    </div>
  )
}

export default Message