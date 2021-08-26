import axios from "axios";

import React, { useState, useEffect } from "react";

function FormProduct() {
  /*const [data ,setData]=useState([])

useEffect(async () => {
    const result = await axios(
     'https://misventas.azurewebsites.net/test',
     //'http://localhost:3000/test',
    );
    setData(result.data);
  });

const titles = ["PRODUCTO","STOCK","PRECIO","MARCA","MODELO"]*/

  function mySubmitHandler(event) {

    axios({
      method: 'post',
      url: 'https://misventas.azurewebsites.net/test',
      data: post
    });
    setPost({})
    console.log(post)
    //document.getElementById("create-course-form").reset();
    event.preventDefault();
  }

  const [post, setPost] = useState({
    Producto: "",
    Cantidad: 0,
    Precio: 0,
    Marca: "",
    Modelo: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevValue) => {
      switch (name) {
        case "Producto":
          return {
            Producto: value,
            Cantidad: prevValue.Cantidad,
            Precio: prevValue.Precio,
            Marca: prevValue.Marca,
            Modelo: prevValue.Modelo,
          };
        case "Cantidad":
          return {
            Producto: prevValue.Producto,
            Cantidad: value,
            Precio: prevValue.Precio,
            Marca: prevValue.Marca,
            Modelo: prevValue.Modelo,
          };
        case "Precio":
          return {
            Producto: prevValue.Producto,
            Cantidad: prevValue.Cantidad,
            Precio: value,
            Marca: prevValue.Marca,
            Modelo: prevValue.Modelo,
          };
        case "Marca":
          return {
            Producto: prevValue.Producto,
            Cantidad: prevValue.Cantidad,
            Precio: prevValue.Precio,
            Marca: value,
            Modelo: prevValue.Modelo,
          };
        case "Modelo":
          return {
            Producto: prevValue.Producto,
            Cantidad: prevValue.Cantidad,
            Precio: prevValue.Precio,
            Marca: prevValue.Marca,
            Modelo: value,
          };
        default:
          return {
            Producto: prevValue.Producto,
            Cantidad: prevValue.Cantidad,
            Precio: prevValue.Precio,
            Marca: prevValue.Marca,
            Modelo: prevValue.Modelo,
          };
      }
    });
    console.log(post);
  }
  return (
    <form  onSubmit={mySubmitHandler}>
      <input onChange={handleChange} name="Producto" placeholder="Producto" />
      <input onChange={handleChange} type="number" name="Cantidad" placeholder="Stock" />
      <input onChange={handleChange} name="Precio" placeholder="Precio" />
      <input onChange={handleChange} name="Marca" placeholder="Marca" />
      <input onChange={handleChange} name="Modelo" placeholder="Modelo" />
      <button>Submit</button>
    </form>
  );
}
export default FormProduct;
