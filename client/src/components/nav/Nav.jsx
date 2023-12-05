import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styled from "styled-components";
const banner ="https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png"

const MyButton = styled.button`
  background-color: darkslategrey;
  color: wheat;
  &:hover {
    color: darkslategrey;
    background-color: darkolivegreen;
  }
`;

export default function Nav(props) {
  return (
    <div>
      <NavLink to="/home">
        <MyButton>Home</MyButton>
      </NavLink>
      <NavLink to="/favorites">
        <MyButton>Favorites</MyButton>
      </NavLink>
      <NavLink to="/about">
        <MyButton>About</MyButton>
      </NavLink>
      <NavLink to="">
      <MyButton onClick={props.logout}>Logout
      </MyButton>
      </NavLink>
      <hr />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
