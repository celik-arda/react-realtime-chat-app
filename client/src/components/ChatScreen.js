import React from 'react'
import ChatStyle from './ChatScreen.module.css'
import { useState, useContext } from 'react'
import MyContext from './contextApi/context';

function ChatScreen({socket}) {

    const {username, setUserName, roomId, setRoomId, currentMessage, setCurrentMessage} = useContext(MyContext);

    const sendMessage = () => {
        if(currentMessage !== ""){
            
            const messageData = {
                author : username,
                roomId : roomId,
                message: currentMessage,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
        }
    }

    return (
        <div>
            <div className={ChatStyle.box}>
                <div></div>
                <div></div>
                <div>
                    <input 
                    onChange={e => setCurrentMessage(e.target.value)} 
                    className={ChatStyle.input} 
                    placeholder='type message'/>
                    <button 
                    type="submit" 
                    onClick={sendMessage} 
                    className={ChatStyle.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen