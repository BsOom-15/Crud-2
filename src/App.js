// import './App.css'; 
import Create from './components/contents/Create/Create';
import Home from './components/contents/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Update from './components/contents/Update/Update';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
