import './App.css';
import io from 'socket.io-client';
import {useState, useContext} from 'react';
import {ContextProvider} from './components/contextApi/context';
import MyContext from './components/contextApi/context';

import LoginScreen from './components/LoginScreen';
import ChatScreen from './components/ChatScreen';


// connect with io to send datas to backend from frontend //
const socket = io.connect('http://localhost:3001');

function App() {

    const {
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
    } = useContext(MyContext);


    return (
        <div className="App">

            {/* <ContextProvider> */}
                {loginDisplay ?
                    (<LoginScreen socket={socket}/>)
                    :
                    (<ChatScreen socket={socket}/>)
                }
            {/* </ContextProvider> */}

        </div>
    );
}

export default App;
