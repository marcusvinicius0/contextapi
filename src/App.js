import Alunos from './Components/Alunos';

import UserProvider from './Contexts/user';

function App() {
  

  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr />
        <Alunos />
        <hr />
        <p>Learning concepts of 'contextapi' which is very useful when talking about components that need to be in several parts of our aplicattion. <br/> With it we englobe all content and we don't need to pass our components folder by folder.</p>
      </div>
    </UserProvider>
  );
}

export default App;


