import React,{useState} from "react"

import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"


function LogoutBtn(){
   
    const dispatch = useDispatch()
    const logoutHandler = async() =>{

        

        try {
            await authService.logout()
            dispatch(logout())

        }
        catch(error){
            console.error("Logout failed:",error)
            alert("Logout failed. Please try again")
        }
        

    }


    return(
        <button className="inline-back px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )

}

export default LogoutBtn;