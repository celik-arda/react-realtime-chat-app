import React from 'react'
import ChatStyle from './ChatScreen.module.css'
import { useState, useContext, useEffect } from 'react'
import MyContext from './contextApi/context';

function ChatScreen({socket}) {

    const {username, setUserName, roomId, setRoomId, currentMessage, setCurrentMessage, messageList, setMessageList} = useContext(MyContext);

    const sendMessage = async () => {
        if(currentMessage !== ""){
            
            // create a message object//
            const messageData = {
                author : username,
                roomId : roomId,
                message: currentMessage,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }

            // send object to backend  //
            await socket.emit("sending_message", messageData);

            // keep messages in this state to write on the page //
            setMessageList((prevMessages) => [...prevMessages, messageData]);
        }
    }

    useEffect(() => {

        // recieve and keep messages in same state when socket is triggered //
        socket.on("recieving_messages", (data) => {
            setMessageList((prevMessages) => [...prevMessages, data]);
        })
    }, [socket])

    return (
        <div>
            <div className={ChatStyle.box}>
                    <div>
                        <h4>Chat</h4>
                    </div>
                    <div className={ChatStyle.messageContainer}>
                    {
                        messageList.map((data, key) => {
                            return (
                                <div className={ChatStyle.messageBox} key={key}>
                                    <div className={ChatStyle.text}>{data.message}</div>
                                    <div>{data.author}</div>
                                    <div>{data.time}</div>
                                </div>
                            )
                        })
                        
                    }
                    </div>
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

export default ChatScreen;