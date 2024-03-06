import './App.css';
import io from 'socket.io-client';

// connect with io to send datas to backend from frontend //
const socket = io.connect('http://localhost:3001');

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
