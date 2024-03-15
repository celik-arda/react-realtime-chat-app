import React from 'react'
import { useState, useContext } from 'react'
import MyContext from './contextApi/context';



function LoginScreen({socket}) {

    const {username, setUserName, roomId, setRoomId, LoginDisplay, setLoginDisplay} = useContext(MyContext);

    const joinToRoom = (e) => {
        
        // send room info to backend //
        if(username !== "" && roomId !== ""){
            socket.emit("joining_room", roomId);
            setLoginDisplay(false);
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
