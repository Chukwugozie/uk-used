import React from "react"
import { FetchLaptops } from "../hooks/restcall";

export const LaptopContext = React.createContext();
const LaptopContextProvider = ({children}) =>{
const {allLaptops, isLoading} = FetchLaptops();

return (
    <LaptopContext.Provider value={{allLaptops, isLoading}}>
        {children}
        </LaptopContext.Provider>
)

}
export default LaptopContextProvider;