import React from 'react'
import { useContext, useEffect } from 'react'
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
        <div className='chatContainer w-4/12 h-4/6 py-3 px-4 flex flex-col gap-y-4'>
            
            <div className='chat-title h-1/6 text-center text-3xl'>
                <p>Chat</p>
            </div>
            <div className='h-4/6 p-8 pt-0 flex flex-col overflow-auto gap-y-2'>
            {
                messageList.map((data, key) => {
                    return (
                        <div id={username === data.author ? "myself" : "himself"} 
                        className='text-wrap p-1' 
                        key={key}>
                            <div className='text-wrap h-auto text-xl p-1'>
                                <p>{data.message}</p>
                            </div>
                            <div className='text-md px-1 italic font-bold'>{data.author}</div>
                            <div className='font-bold px-1'>{data.time}</div>
                        </div>
                    )
                })
                
            }
            </div>
            <div className='h-1/6 px-4 flex flex-row justify-stretch'>
                <input className='w-9/12 mr-2'
                onChange={e => setCurrentMessage(e.target.value)} 
                placeholder='type message'/>

                <button className='w-3/12' 
                type="submit" 
                onClick={sendMessage} 
                >Send
                </button>
            </div>
        </div>
    )
}

export default ChatScreen;