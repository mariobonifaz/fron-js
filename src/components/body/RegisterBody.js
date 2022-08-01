import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import "../../StylesSheet/styles/Register.css"
import { useNavigate } from "react-router-dom";
import Background from "../../StylesSheet/img/fondoR.jpg";


function RegisterBody(){
    const navigator = useNavigate()
    const data = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = 'http://18.188.126.17/api/user/create'
    

    const sendValiud = (value) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "email": value.email
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch("http://18.188.126.17/api/user/valid", requestOptions)
          .then(response => response.text())
          .then(result => (result))
          .catch(error => ('error', error));
    
      }


    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = value =>{
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": value.name,
      "email": value.email,
      "password": value.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://18.188.126.17/api/user/create", requestOptions)
      .then(response => response.text())
      .then(result => {
        if (result === "creado") {
          Swal.fire({
            title: 'registrado',
            text: "se a registrado con exito solo verifique su cuenta le llegara un correo a su correo para confirmar",
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: "sucedio un error inesperado regrersa mas tarde",
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
      sendValiud(value)

    }

    return(
        <div id="papa2"className="container w-75 mt-5  rounder ">
            <img src={Background} id="img" alt=""/>
            <div className="row align-items-stretch" id="register">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-7 col-xl-6 rounder">
                    
                </div>
                <div className="col p-5 rounder-end">
                    <div className="text-end">
                       
                        
                    </div>
                    <h2 id="lol" className="fw-bold text-center py-5">Registrate</h2>

                    <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                            <label id="lol" className="form-label">Escribe Tu Nombre</label>
                            <input type="text" id="cositas" className="form-control"  placeholder="name" required {...register("name",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                }
                            })}></input>
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label id="lol" className="form-label">Escribe Tu Correo</label>
                            <input type="text" id="cositas" className="form-control"  placeholder="Email" required {...register("email",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalido email"
                                }
                            })}></input>
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label id="lol" className="form-label">Escribe Tu Constraseña</label>
                            <input type="password" id="cositas" className="form-control"  placeholder="Password" required {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres"
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                        </div>
                        <div className="d-grid">
                            <button id="boton2" type="submit" className="btn btn-primary">Registrar</button>
                        </div>

                        <div className="my-3">
                            <span id="lol" className="fw-bold">Tienes Cuenta? <a href="/">Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterBody;