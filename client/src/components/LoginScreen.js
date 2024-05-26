import React from 'react'
import { useContext } from 'react';
import MyContext from './contextApi/context';


function LoginScreen({socket}) {

    // get variables and states from contextApi //
    const {username, setUserName, roomId, setRoomId, LoginDisplay, setLoginDisplay} = useContext(MyContext);

    const joinToRoom = (e) => {
        
        // send room info to backend //
        if(username !== "" && roomId !== ""){
            socket.emit("joining_room", roomId);
            setLoginDisplay(false);
        }
        
        e.preventDefault();
    }


    
    
    return (
        <div className='loginContainer w-4/12 h-3/6 py-12 px-1 '>
            <form className='w-full h-full flex flex-col items-center justify-stretch'>
                <div className='h-1/6 mb-6'>
                    <input onChange={(e) => setUserName(e.target.value)} 
                    placeholder='your nickname'/>
                </div>
                <div className='h-2/6 mb-3'>
                    <input onChange={(e) => setRoomId(e.target.value)}  
                    placeholder='your room id'/>
                </div>
                <div className='h-1/6 mt-6'>
                    <button type='submit' 
                    onClick={joinToRoom} >
                        Login To Room
                    </button>
                </div>
            </form>
        </div>
    )
}


export default LoginScreen
