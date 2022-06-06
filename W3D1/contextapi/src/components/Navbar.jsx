import React, { useContext } from 'react';
import {AuthContext} from "../contexts/AuthContext";



const Navbar = () => {

    const {auth,isAuth,toggleAuth}=useContext(AuthContext);
   
    const loginUser=()=>{
        if(auth != null){
            return toggleAuth();
        }
        else{
            fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers : {"Content-Type": "application/json"} ,
                body: JSON.stringify({
                    "email":"eve.holt@reqres.in",
                    "password":"1234"
                })
            })
            .then(res => res.json())
            .then(data =>{
                isAuth(data.token)
               console.log(data.token)
            } )
        }
    }
  return (
     <div style={{
         display:"flex",
         backgroundColor:"teal",
         padding:"15px",
         width:"95%",
         margin:"auto",
         justifyContent:"end",
         gap:"10px",
         }}>
        {auth ? null : <div><input type="text" placeholder="id"/><input type="password" placeholder="password"/></div>}
        <button onClick={()=>loginUser()}>{auth? "LogOut":"LogIn"}</button>
     </div>
  )
}

export default Navbar;