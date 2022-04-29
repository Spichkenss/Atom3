import { observer } from "mobx-react-lite"
import { createContext } from "react"
import Store from "../store/Store"

const store = new Store()
export const Context = createContext({ user: store })

const AuthContext = observer(({ children }) => {

    return (
        <Context.Provider value={{ user: store }}>
            {children}
        </Context.Provider>
    )
})

export default AuthContext
