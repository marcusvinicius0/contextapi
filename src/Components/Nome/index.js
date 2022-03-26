import { useContext } from "react";
import { UserContext } from "../../Contexts/user";

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext)

    return (
      <div>
        <span style={{ color: '#FF0000' }} >Bem vindo: {alunos} </span>
        <button onClick={ () => setAlunos('sujeito deeeev')}>Troca nome</button>
        <br/>
      </div>
    );
  }
  
  export default Nome;
  