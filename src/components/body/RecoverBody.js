import React, {useState} from "react";
import "../../StylesSheet/styles/RecoverPassword.css"
import background from "../../StylesSheet/img/fondoRCP.jpg"
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function RecoverBody() {

    const data = useState({
        password: ''
    })

    const url = 'http://18.188.126.17/api/user/recovery_password'
    const navigator = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = value =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "email": value.email,
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
    
        fetch("http://18.188.126.17/api/user/recovery_password", requestOptions)
          .then(response => response.text())
          .then(result => {
            Swal.fire({
              title: 'vaya a su correo',
              text: 'listo en su correo lo estara esperando un correo de nosotros',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          })
          .catch(error => {
            Swal.fire({
              title: 'error',
              text: 'lo siento a susedido un erro regrese mas tarde',
              icon: 'error',
              confirmButtonText: 'OK'
            })
      });

    }

    return(
        <div id="papaCF"className="container w-75 mt-5 rounder ">
            <img src={background} id="img" alt=""/>
        <div className="row align-items-stretch">
            <div className="col bg1 d-none d-lg-block col-md-5 col-lg-10 col-xl-6 rounder">
                
            </div>


            <div className="col p-5 rounder-end">
                <div className="text-end">
                
                </div>
                <h2 id="wuenas" className="fw-bold text-center py-5">Restablecer Password</h2>
                <form className="was-validated " noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label id="wuenas" className="form-label">Escribe Tu Nueva Constraseña</label>
                        <input id="mochila" type="password" className="form-control" placeholder="Password" required {...register("password1",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres"
                                }
                            })}></input>
                            {errors.password1 && <span className="text-danger">{errors.password1.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label id="wuenas" className="form-label">Confirma Tu Constraseña</label>
                        <input id="mochila" type="password" className="form-control" placeholder="Password" required {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres",
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="d-grid">
                        <button id="boton00" type="submit" className="btn btn-primary">Restablecer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default RecoverBody;