import { createContext, useContext } from "react";
import { AuthContext } from "./authContext"


export const LoginCheck = createContext(null)

const LoginChecking = ({ children }) => {
    const {token} = useContext(AuthContext)
    if (token) {
        return (
            <LoginCheck.Provider value={{ loginStatus: true }}>
                {children}
            </LoginCheck.Provider>
        )
    } else {
        <LoginCheck.Provider value={{ loginStatus: false }}>
            {children}
        </LoginCheck.Provider>
    }

}

export default LoginChecking