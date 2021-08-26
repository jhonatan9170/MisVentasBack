import './table.css'
import axios from 'axios'

import React ,{useState, useEffect} from "react";

function Table () {
const [data ,setData]=useState([])

useEffect(async () => {
    const result = await axios(
     'https://misventas.azurewebsites.net/test',
     //'http://localhost:3000/test',
    );
    setData(result.data);
  });

const titles = ["PRODUCTO","STOCK","PRECIO","MARCA","MODELO"]
   // var data =[{"Producto":"Iphone","Cantidad":5,"Precio":50,"Marca":"Apple","Modelo":"Iphone 5"},{"Producto":" celular zte primer","Cantidad":20,"Precio":21,"Marca":"zte","Modelo":"primee"},{"Producto":"laptop lenovo z50","Cantidad":10,"Precio":1001,"Marca":"lenovo","Modelo":"z50"},{"Producto":"Yogurt Gloria 1l","Cantidad":20,"Precio":10,"Marca":"gloria","Modelo":"light"}];
    return(<table>
    <caption>Product</caption>
    <thead>
      <tr>
      {titles.map(title=><th scope="col">{title}</th>)}
      </tr>
    </thead>
    <tbody>
    {data.map(dataTerm=>
        <tr>
          <td data-label="Producto">{dataTerm.Producto}</td>
          <td data-label="Stock">{dataTerm.Cantidad}</td>
          <td data-label="Precio">{dataTerm.Precio}</td>
          <td data-label="Marca">{dataTerm.Marca}</td>
          <td data-label="Modelo">{dataTerm.Modelo}</td>
        </tr>
    )
    }

    </tbody>
  </table>)
  
}
export default Table;  