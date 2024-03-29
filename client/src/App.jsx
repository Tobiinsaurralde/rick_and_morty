import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Form from './components/form/form.jsx';


const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   
   
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();

   const [characters, setCharacters] = useState([]);

   async function onSearch(id) {
      try {
         const characterId = characters.filter(
            char => char.id === Number(id)
         )
         if(characterId.length) {
            return alert(`${characterId[0].name} ya existe!`)}

         const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`)
         if (data.name) {

            setCharacters([...characters, data]);
            navigate("/home");
         } else {
            alert('¡El id debe ser un número entre 1 y 826!');
         }
      } catch (error) {
         alert("El id debe ser un numero entre 1 y 826")
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
      dispatch(removeFav(id));
   }

   
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas!");
      }
   }

   function logout() { 
      setAccess(false);
   }

   useEffect(() => {
  
      !access && navigate('/home');
   
   }, [access]);

   return (
      <div className='App'>
           {/* Lógica para mostrar u ocultar el overlay-text */}
      {location.pathname === "/home"}

         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null
         }
         <Routes>
            <Route
               path="/"
               element={<Form login={login} />}
            />
            <Route 
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />

            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} />} />
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
      </div>
      
   );
}

export default App;
