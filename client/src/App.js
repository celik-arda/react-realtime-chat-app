import './App.css';
import io from 'socket.io-client';
import { useContext } from 'react';
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

            {
                loginDisplay 
                ?
                (<LoginScreen socket={socket}/>)
                :
                (<ChatScreen socket={socket}/>)
            }

        </div>
    );
}

export default App;
