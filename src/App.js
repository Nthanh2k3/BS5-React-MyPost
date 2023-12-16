import './App.css';
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Home>
      <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </Home>
     
    </div>
  );
}

export default App;
