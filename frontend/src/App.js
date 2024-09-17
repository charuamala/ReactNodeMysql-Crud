//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Read from './pages/Read';
function App() {
  return (
    <div className="App">
      <h1>CRUD Operation using React Node Mysql</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/read' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
