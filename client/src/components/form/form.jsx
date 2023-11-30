import React, { useState } from "react";
import validation from "../../utils/validation";
const banner = "https://http2.mlstatic.com/D_NQ_NP_898822-MLA44334482553_122020-O.webp";

export default function Form(props) {

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
    setErrors(validation({
      ...userData,
      [name]: value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div>
      <img
        src={banner}
        style={{width:"300px"}}
        alt=""
      />

      <form onSubmit={handleSubmit} >

        <label>Email: </label>
        <input
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Ingresar email..."
          onChange={handleChange}
        />
        <p style={{color:"red"}}>{ errors.email ? errors.email : null }</p>

        <label>Password: </label>
        <input
          type="password"
          key="password"
          name="password"
          value={userData.password}
          placeholder="Ingresar password..."
          onChange={handleChange}
        />
        <p style={{color:"red"}}>{ errors.password && errors.password }</p>
        <hr />

        <button
          type="submit"
          disabled={ errors.email || errors.password }
        >Enviar</button>

      </form>
    </div>
  )
}