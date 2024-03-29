import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import style from './Favorites.module.css'


export default function Favorites({ onClose }) {

  const myFavorites = useSelector(state => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = event => {
   dispatch(orderCards(event.target.value));
  }
  const handleFilter = event => {
   dispatch(filterCards(event.target.value));
  }

   return (
      <div>
         <div>
            <select className={style.select} name="order" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select className={style.select} name="filter" onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>

         <div
          className = {style.container}
         >
            {
               !myFavorites.length
               ? <h2>No hay favoritos</h2>
               :
               myFavorites.map(myFavorite => (
                  <Card
                     key={myFavorite.id}
                     id={myFavorite.id}
                     name={myFavorite.name}
                     status={myFavorite.status}
                     species={myFavorite.species}
                     gender={myFavorite.gender}
                     origin={myFavorite.origin}
                     image={myFavorite.image}
                     onClose={onClose}
                  />
               ))
            }
         </div>
      </div>
   );
}