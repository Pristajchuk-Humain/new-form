
import './App.css';
import LoginForm from './components/Form/LoginForm ';
import Header from './components/Header/Header';

function App() {
  
  return (
    <>
    <Header title="Title" />
    <LoginForm onSubmit={values => console.log(values)} />
    </>
  );

}



export default App;
