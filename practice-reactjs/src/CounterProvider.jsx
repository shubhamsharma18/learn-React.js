import { CounterContext } from "./CounterContext";
import {useState} from "react";
export function CounterProvider({children}){
    const [count, setCount]=useState(0);
    return(
        <CounterContext.Provider value={{count, setCount}}>
            {children}
            </CounterContext.Provider>
        
    )
}