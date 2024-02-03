
import './App.css';
//importing bootstrap from react-bootstrap website
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import AccountManagement from './components/AccountManagement';
import {Routes,Route} from 'react-router-dom';
import Error from './components/Error';


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/AccountManagement' element={<AccountManagement/>}/>
    <Route path='*' element={<AccountManagement/>}/>

    </Routes>
    </>
  )
}

export default App;
