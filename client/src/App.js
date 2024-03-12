import './App.css';
import io from 'socket.io-client';
import LoginScreen from './components/LoginScreen';
import ChatScreen from './components/ChatScreen';


// connect with io to send datas to backend from frontend //
const socket = io.connect('http://localhost:3001');

function App() {


    return (
        <div className="App">
            
            <LoginScreen socket={socket}/>
            
            <ChatScreen/>


        </div>
    );
}

export default App;
