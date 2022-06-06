import { createContext, useState } from "react";
 
export const AuthContext=createContext();



export const AuthContextProvider=({children})=>{
    const [auth, setAuth] = useState(null);
    const isAuth=(token)=>{
        if(token){
            setAuth(token);
        }
        else{
            setAuth(null);
        }
    }
    const toggleAuth=()=>{
       setAuth(null)
    }
    return <AuthContext.Provider value={{auth,isAuth,toggleAuth}}>{children}</AuthContext.Provider>
};