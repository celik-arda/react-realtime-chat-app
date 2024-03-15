import React from 'react'
import { createContext, useState } from 'react'

const MyContext = createContext();


export const ContextProvider = ({children}) => {
    
    const [username, setUserName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [loginDisplay, setLoginDisplay] = useState(true);

    const myContexts = {
        username,
        setUserName,
        roomId,
        setRoomId,
        currentMessage,
        setCurrentMessage,
        messageList,
        setMessageList,
        loginDisplay,
        setLoginDisplay
    }

    return (
        <MyContext.Provider value={myContexts}>{children}</MyContext.Provider>
    )
}

export default MyContext;