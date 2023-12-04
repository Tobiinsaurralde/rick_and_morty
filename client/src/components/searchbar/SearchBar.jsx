import React from "react";
import styled from "styled-components";

const Container= styled.div`
padding-bottom: 20px;
 padding-top: 20px;
 margin-auto;`


 const Input= styled.input `
 border-radius:5px;
 height:40px;`

 const MyButton = styled.button`
background-color: darkslategrey;
color: wheat;
&:hover {
 color: darkslategrey;
 background-color: darkolivegreen;
}
`;

export default function SearchBar(props) {
  const [id, setId] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomNumber);
  };
 
  return (
    <Container>
      <Input
        type="text"
        name="search"
        id="search"
        onChange={handleChange}
        value={id}
      />
      <MyButton onClick={handleClick}>Agregar</MyButton>
      <MyButton onClick={handleRandom}>Random</MyButton>

    
      <hr />
      <h1>Por favor ingrese un ID...</h1>
    </Container>
  );
}
