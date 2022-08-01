import React,{useState} from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import "../../StylesSheet/styles/Login.css";
import { useNavigate } from "react-router-dom";
import Background from "../../StylesSheet/img/fondo.jpg"

function Login(){
    const navigator = useNavigate()
    const data = useState({
        email: '',
        password: ''
    })

    const url= 'http://18.188.126.17/api/user/login'
  
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate()
    
    const onSubmit = value =>{
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": value.email,
      "password": value.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://18.188.126.17/api/user/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.error) {
          case "Usuario no encontrado":
            Swal.fire({
              title: 'Error!',
              text: 'Usuario no encontrado',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
            break;
          case "Usuario no verificado":
            Swal.fire({
              title: 'Error!',
              text: 'Usuario no verificado',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          break;
          case "contraseña no válida":
            Swal.fire({
              title: 'Error!',
              text: 'contraseña no válida',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          break;

          default:
            navigate('/productos');
            break;
        }
    })
      .catch(error => console.error);
    
    }

    
    



    return(
        <div id= "papa" className="container w-75 mt-5rounder ">
            <img src={Background} id="img" alt=""/>
            <div id = "login" className="row align-items-stretch">
                <h2 id="guenas" className="fw-bold text-center py-5">Bienvenido</h2>
                    <form className="was-validated form-color mb-5" noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label  id="guenas" className="form-label">Escribe Tu Correo</label>
                            <input type="text" className="form-control" id="email" placeholder="Email" required {...register("email",{
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
                            <label id="guenas" className="form-label">Escribe Tu Constraseña</label>
                            <input type="password" id="email" className="form-control" placeholder="Password" required {...register("password",{
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
                        <div className="my-3">
                        <span><a href="/recupe">Forgot password?</a></span>
                        </div>
                        <div className="my-3">
                            <span id="guenas" className="fw-bold">No tienes Cuenta? <a href="/registrar">Create account</a></span>
                        </div>
                        <div id="cboton1" className="d-grid">
                            <button id="boton1"type="submit" className="btn btn-light">Iniciar Sesion</button>
                        </div>


                    </form>
                
            </div>
        </div>
    );
}


export default Login;