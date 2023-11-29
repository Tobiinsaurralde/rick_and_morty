import React from "react";
import styled from "styled-components";

export default function SearchBar(props) {

   const [id, setId] = React.useState(""); 
   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};

   const Container = styled.div`
      padding-top: 20px;
      padding-bottom: 15px;
      margin: auto;
   `

   const Input = styled.input`
      border-radius: 5px;
      height: 40px;
   `

   const MyButton = styled.button`
      background-color: darkslategrey;
      color: wheat;
      &:hover {
         color: darkslategrey;
         background-color: darkolivegreen;
      }
   `
   
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
      </Container>
   );
}