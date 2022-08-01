import {useEffect, useState} from "react";
import {Link, Route, useNavigate} from "react-router-dom";
import  React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import background from "../StylesSheet/img/fondoP.jpg"
import"../dashboard/styles/BodyCard.css";
import Swal from "sweetalert2";


const Dashboard = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch("http://18.188.126.17/api/product/view")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductos(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


        const renderProducto = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open, setOpen] = useState(false);
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);
            return (

                    productos.map((product, index) => (

  <div class="col">
   <div class="card"  id="card">
  <img src={product.name} img="img" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.nameProduc}</h5>
    <p class="card-text">{product.description}</p>
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item ">$ {product.price}</li>
    <li class="list-group-item">amount: {product.amount}</li>
  </ul>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
  <button  className="btn btn-primary btn-sm"
                                            onClick={()=>{
                                                    handleOpen()
                                            }}
                                        >
                                            Edit</button>
  <button  className="btn btn-danger btn-sm"
                                            onClick={ () => {
                                                var myHeaders = new Headers();
                                                myHeaders.append("Content-Type", "application/json");

                                                var raw = JSON.stringify({
                                                    "id": product.id
                                                });

                                                var requestOptions = {
                                                    method: 'DELETE',
                                                    headers: myHeaders,
                                                    body: raw,
                                                    redirect: 'follow'
                                                };

                                                fetch("http://18.188.126.17/api/product/delete", requestOptions)
                                                    .then(response => response.text())
                                                    .then(result => console.log(result))
                                                    .catch(error => console.log('error', error));
                                            }
                                            }
                                        >
                                            Delete</button>
</div>

                                </div>
                                <div>
                                    <Modal
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="keep-mounted-modal-title"
                                        aria-describedby="keep-mounted-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className='modal-update text-center'>
                                                <h5 className="mt-5  ">Titulo</h5>
                                                <input className="form-control" type="text" placeholder="Titulo" defaultValue={product.nameProduc} id={product.nameProduc}
                                                       aria-label="default input example" />
                                                <h5 className="mt-1  ">Descripcion</h5>
                                                    <input className="form-control" type="text" id="descripcion" defaultValue={product.description}
                                                           placeholder="Descripción"
                                                           aria-label="default input example" />
                                                <h5 className="mt-1  ">Precio</h5>
                                                        <input
                                                        className="form-control" type="number" placeholder="Precio" id="precio" defaultValue={product.price}
                                                        aria-label="default input example" />
                                                <h5 className="mt-1  ">Cantidad</h5>
                                                            <input
                                                        className="form-control" type="number" placeholder="Cantidad" id="cantidad" defaultValue={product.amount}
                                                        aria-label="default input example" />
                                                <button type="submit" className="btn btn-primary mt-4" onClick={()=>{
                                                    var formdata = new FormData();
                                                    formdata.append("id", product.id);
                                                    console.log(product.id)
                                                    console.log(document.getElementById("titulo"+product.id).value)
                                                    formdata.append("nameProduc", document.getElementById("titulo"+product.nameProduc).value);
                                                    formdata.append("description", document.getElementById('descripcion').value);
                                                    formdata.append("price", document.getElementById('precio').value);
                                                    formdata.append("amount", document.getElementById('cantidad').value);



                                                    var requestOptions = {
                                                        method: 'PUT',
                                                        body: formdata,
                                                        redirect: 'follow'
                                                    }
                                                    fetch("http://18.188.126.17/api/product/update", requestOptions)
                                                        .then((res) => res.json)
                                                        .then((data) => {console.log(data)
                                                            Swal.fire({
                                                                title: 'editado',
                                                                text: 'se a editado correctamente'+ product.id,
                                                                icon: 'success',
                                                                confirmButtonText: 'Cool'
                                                            })})
                                                        .catch((err) => console.error(err));


                                                }}>Enviar</button>
                                            </div>
                                        </Box>
                                    </Modal>
                                </div>
    </div>




           ) ));
        };

        return (
                <div id="papa10" className="auth-wrapper">
                <img src={background} id="img" alt=""/>
                <div className="">
                    <div>
                        <div className="d-flex">
                            <a type="button" className="btn btn-success btn-sm ms-auto" href="/post">
                                Add new product
                            </a>

                        </div>
                        <div className="">
                            <div className="card-group">

                                {renderProducto()}

</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Dashboard;