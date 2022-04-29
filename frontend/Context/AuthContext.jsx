import { createContext } from "react"
import Store from "../store/Store"


export const Context = createContext({ user: new Store() })

const AuthContext = ({ children }) => {

    return (
        <Context.Provider value={{ user: new Store() }}>
            {children}
        </Context.Provider>
    )
}

export default AuthContext
