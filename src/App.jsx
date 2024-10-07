
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import NavBar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {

  return (
    <browserRouter>
    <div className="App">
    <NavBar />
    <ItemListContainer  greeting={'Bienvenido a Coffee Cat'}/>
    
    </div>
    <router>

    </router>
    </browserRouter>
  );
}

export default App;

