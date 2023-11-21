import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

const banner ="https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png"

export default function Nav(props) {

  return (
     <div>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <button onClick={props.logout} > 
          <img
        src={ banner}
        style={{width:"16px"}}
        alt=""
      />
     </button>
         <hr />
        <SearchBar onSearch={props.onSearch} />
     </div>
  );
}