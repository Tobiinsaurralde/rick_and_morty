import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styled from "styled-components";

const banner =
  "https://w7.pngwing.com/pngs/857/381/png-transparent-computer-icons-login-logout-angle-text-black-thumbnail.png";

const MyButton = styled.button`
  background-color: darkslategrey;
  color: wheat;
  margin-right: 20px;
  &:hover {
    color: white;
    background-color: darkslategrey;
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding: 10px;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpaceAfterNav = styled.div`
  margin-top: 60px; 
`;

const MainContent = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column-reverse;
`;

const AboutButton = styled.div`
  position: fixed;
  bottom: 16px;
  right: 20px;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: transparent;
  }
`;

const LogoutContainer = styled.div`
  margin-right: 1px;
`;
export default function Nav(props) {
  return (
    <div>
      <NavContainer>
        <NavContent>
          <div>
            <NavLink to="/home">
              <MyButton>Home</MyButton>
            </NavLink>
            <NavLink to="/favorites">
              <MyButton>Favorites</MyButton>
            </NavLink>
            <NavLink to="/about">
              <AboutButton>About me</AboutButton>
            </NavLink>
          </div>
          <div>
            <LogoutContainer>
              <NavLink to="">
                <MyButton onClick={props.logout}>Log Out</MyButton>
              </NavLink>
            </LogoutContainer>
          </div>
        </NavContent>
      </NavContainer>
      <SpaceAfterNav />
      <MainContent>
        <SearchBar onSearch={props.onSearch} />
        {/* Resto del contenido de la página */}
      </MainContent>
    </div>
  );
}
