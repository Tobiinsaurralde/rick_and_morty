import {useState} from 'react';
import styles from './SearchBar.module.css'
import { AiFillGift } from "react-icons/ai";
import { GrClearOption } from "react-icons/gr"
import { MdPersonAddAlt1 } from "react-icons/md";

const SearchBar = ({onSearch, clear}) => { //como props es un objeto con cosas, tengo que sacar a OnSearch con destructuring. Si no, deberia poner props.onSearch

 const [id, setId] = useState('');
   
 const handleChange = (event) => {
setId (event.target.value)
 }  
 function handleRandom() {
   const numeroEnRango = Math.floor(Math.random()* 826) + 1;
   return numeroEnRango;
 }
 
const handleClear = () => {
clear()
}
const handleClick =(event)=>{{ //Para tener 2 acciones en una misma fn.
   event.preventDefault(); //event es solo para esta linea.
   onSearch(id); //hago el onSearch, como lo hacia antes pero lo ponia directo en el onClick
   setId(''); //Lo dejo vacio luego de que lo busque. No puedo ponerlo en handleChange porq lo harai acada vez q hay una
}}

   return (
      <div className={styles.container} >

         <input
         placeholder='Insert ID...' 
         autoComplete='off'
         className={styles.input}
         type='search' 
         name='search'
         id='search'
         value = {id} 
         onChange = {handleChange}
         style={{ color: 'white' }} 
         />

         {/* <button className={styles.button} onClick={handleClick}>Add</button>  */}
         <MdPersonAddAlt1 className={styles.button} onClick={handleClick}/>
         <span className={`${styles.button} ${styles.randomButton}`} onClick={() => onSearch(handleRandom())}>
         ʀᴀɴᴅᴏᴍ
      </span>
            </div>
   );
}
export default SearchBar;