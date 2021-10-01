import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navbar.jsx'
import CharacterD from './components/Character_Details/characterDeta.jsx'
import About from './components/About/about.jsx'
import Home from './components/Home/home.jsx'
import { BrowserRouter as Route, Switch} from 'react-router-dom';
import anime from './json/personaje.json'
import React, {useState, useEffect} from 'react'
import CharacterId from './components/CharacterId/characterId.jsx'
function App() {
  const [charactersInfo, setCharacters]=useState([])

  useEffect(()=>{
    obtenerDatos()
    }, [])


  const obtenerDatos= async () => {
    /* const data = await fetch(anime) */
    const characters= await anime
    setCharacters(characters.Characters)
  }

  console.log(charactersInfo)

  /* const [charactersInfo, setCharactersInfo] = useState()
  const fetchApi = async () => {
    const responseJson = anime
    setCharactersInfo(responseJson)
  }

  useEffect(() => {
    fetchApi()
  },[])

  console.log(charactersInfo) */




  return (
    <>
    
      <div>
        Hola Mundo!
      </div>
      <Navbar />
      {/* <ul>
        { charactersInfo.map(item => (
          <li key={item.id}>{item.name} - {item.ciudad}</li>
        ))}
      </ul> */}


      <Switch>
        <Route exact path="/">
            {/* { charactersInfo.map(item => ( */}
              <Home /* key={item.id} nick={item.name} url={item.photo} */ />
            {/* ))
            } */}
        </Route>
      
        <Route exact path="/charDetail">
            <CharacterD onepunch={charactersInfo}  />
        </Route>
        
        <Route path="/charDetail/:id">
            <CharacterId />
        </Route>


        <Route path="/about">
          <About />
        </Route>


      </Switch>
      



      {/* <Navbar />

      <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/charDetail">
                <CharacterD/>
            </Route>
            <Route path="/about" component={About} />
      </Switch> */}
    </>
    
  );
}

export default App;
