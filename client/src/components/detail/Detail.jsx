import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

export default function Detail(props) {

   const { id } = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  console.log(data);
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            }
         );
      return setCharacter({});
   }, [id]);

  return (
     <div style= {{backgroundColor: "darkolivegreen", borderRadius:"20px"}}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} style={{ width: "100%", borderRadius: "10px" }} />
     
     </div>
  );
}