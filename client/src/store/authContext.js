import { createContext,useState } from "react";

export const AuthContext = createContext(null)

const Context = ({children}) =>{
    const [userID, setUserID] = useState(null)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
 return(
    <AuthContext.Provider value={{userID,setUserID,token,setToken,user,setUser}}>
        {children}
    </AuthContext.Provider>
 )
}

export default Context