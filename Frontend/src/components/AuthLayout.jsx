import React , {useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function AuthLayout({
    children , authenication
}){

    const navigate = useNavigate();
    const [loader , setLoader] = useState(true);
    const authStatus = useSelector(state =>state.auth.status)

    useEffect(()=>{
        if(authenication && authStatus !== authenication){
            navigate("/login")
        }
        else if (!authenication && authStatus !==authenication){
            navigate('/')
        }
                                                                      
    } ,[authStatus ,navigate ,authenication])
}