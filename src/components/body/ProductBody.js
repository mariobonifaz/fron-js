import React from "react";
import barckground from "../../StylesSheet/img/fondoPR.jpg"
import "../../StylesSheet/styles/products.css"

class ImagePicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit =  (event) => {
        const myInput = document.getElementById('files');

        var formdata = new FormData();
        formdata.append("nameProduc", document.getElementById('ProductName').value);
        formdata.append("name",  myInput.files[0], myInput.files[0].values);
        console.log( myInput.files[0])
        formdata.append("description", document.getElementById('description').value);
        formdata.append("price", document.getElementById('price').value);
        formdata.append("amount", document.getElementById('amount').value);

        event.preventDefault()

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }
        fetch("http://18.188.126.17/api/product/create", requestOptions)
            .then((res) => res.json)
            .then((data) => (data))
            .catch((err) => (err));
    }



    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }


    render() {
        return (
            <div id="saca" className="auth-wrapper">
                <img src={barckground} id="img" alt=""/>
                <div className="">
                    <div>
                        <div className="table-responsive px-md-100 px-10 pt-10000">
                            <form action="" method="post" onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <img
                                        src={this.state.file}
                                        id="imgS"
                                        className="w-20 h-auto rounded mx-10 d-block"
                                        alt="product"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="file" name="files" id="files" className="form-control" src="" alt=""
                                           onChange={this.handleChange}
                                           ref={node => (this.inputNode = node)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        id="ProductName"
                                        className="form-control"
                                        placeholder="Product name"
                                        ref={node => (this.inputNode = node)}

                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="form-control"
                                        placeholder="Description"
                                        ref={node => (this.inputNode = node)}

                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        placeholder="Price"
                                        ref={node => (this.inputNode = node)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="amount"
                                        id="amount"
                                        className="form-control"
                                        placeholder="Stock"
                                        ref={node => (this.inputNode = node)}
                                    />
                                </div>

                                <br/>
                                <div className="d-flex ">

                                        <a type="button" className="btn btn-danger me-auto" href="/productos">
                                            Cancel
                                        </a>


                                    {/*<a type="button" className="btn btn-success ms-auto" onClick={() => {}}>*/}
                                    {/*  Save*/}
                                    {/*</a>*/}
                                    <a type="button"  className="btn btn-success ms-auto"  >
                                        <button href="/dashboard" type="submit" className="btn ">
                                            Submit
                                        </button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ImagePicker;