import './App.css';
import NavBar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {

  return (
    <div className="App">
    <NavBar />
    <ItemListContainer  greeting={'Bienvenido a Coffee Cat'}/>
    </div>
  );
}

export default App;

