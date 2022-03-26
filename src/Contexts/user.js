import { useState, createContext } from "react";


export const UserContext = createContext({});

function UserProvider({children}){
    const [alunos, setAlunos] = useState('sujeito dev');
    const [qtdAlunos, setQtdAlunos] = useState(30)


    return(
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;