import React from 'react'
import Swal from 'sweetalert2'
import Background from "../../StylesSheet/img/fondoW.webp"


const FormConfirmUser = () => {

const querystring = window.location.search
const params = new URLSearchParams(querystring)

const Confirm = () =>{


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": params.get('email')
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://18.188.126.17/api/user/estado", requestOptions)
  .then(response => response.text())
  .then(result => {
    Swal.fire({
        title: 'verificado',
        text: 'se a verificado correctamente ya puede iniciar sesion',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
  })
  .catch(error => {
    Swal.fire({
        title: 'Error!',
        text: 'se prudujo un erro regrese mas tarde',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
  });
}

    return(
        <div id= "papa" className="container w-75 mt-5rounder ">
            <img src={Background} id="img" alt=""/>
            <div id = "btnV" className="row align-items-stretch">
                <h2 id="guenas" className="fw-bold text-center py-5">Cargando</h2>
                <button id="btnVB" onClick={()=>{
                  Confirm()
                }}>Aceptar</button>
            </div>
        </div>
    )
}


export default FormConfirmUser