import { createContext } from "react";

const authContext = (state)=>{
    return createContext(state)
}

export default authContext;