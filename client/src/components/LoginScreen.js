import React from 'react'
import { useState } from 'react'


function LoginScreen({socket}) {

    const [username, setUserName] = useState("");
    const [roomId, setRoomId] = useState("");

    const joinToRoom = async (e) => {
        
        // send room info to backend //
        if(username !== "" && roomId !== ""){
            socket.emit("joining_room", roomId);
            console.log("joining event works...");
        }

        e.preventDefault();
    }

    return (
        <div>
            <form>
                <div>
                    <input onChange={(e) => setUserName(e.target.value)} className='outline-3 outline-zinc-700 outline' placeholder='your nickname'/>
                </div>
                <br/>
                <div>
                    <input onChange={(e) => setRoomId(e.target.value)} className='outline-3 outline-zinc-700 outline' placeholder='your room id'/>
                </div>
                <br/>
                <div>
                    <button onClick={joinToRoom} className='outline-3 outline-zinc-700 outline'>Login To Room</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen
