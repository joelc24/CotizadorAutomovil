import { createContext } from "react";


const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const hola = "hola mundo"

    const funcionHolaMundo = () =>{
        console.log("hola mundo desde el provider")
    }

    return(
        <CotizadorContext.Provider
            value={{
                hola,
                funcionHolaMundo
            }}
        >
            {children}
        </CotizadorContext.Provider>   
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext