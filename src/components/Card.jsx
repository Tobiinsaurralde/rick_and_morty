export default function Card(props) {
   console.log(props)
   return (
      <div>
          <button onClick = {props.onClose}>X</button>
         <h2>name = {props.name}</h2>
         <h2>status= {props.status}</h2>
         <h2>species= {props.species}</h2>
         <h2>gender= {props.gender}</h2>
         <h2>origin= {props.origin}</h2>
         <img src={props.image} alt={props.name} /> 
      </div>
   );
}
