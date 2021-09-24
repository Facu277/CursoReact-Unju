import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navbar.jsx'
import Card from './components/Home/home.jsx'
import CharacterD from './components/Character_Details/characterDeta.jsx'
import About from './components/About/about.jsx'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      <CharacterD></CharacterD>
      <About></About>
    </>
    
  );
}

export default App;
