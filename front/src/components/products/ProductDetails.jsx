import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MetaData from '../layouts/MetaData'
import { useParams } from 'react-router-dom'
import { getProductsDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap';

function ProductDetails() {
    const { loading, product, error } = useSelector(state => state.productDetails)
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    useEffect(() => {
        dispatch(getProductsDetails(id));
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error, id]);

    return (
        <Fragment>
            {loading ? (
                <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            ) : (
                <Fragment>
                    <MetaData>{product.nombre}</MetaData>
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                            <Carousel pause="hover">
                                {product.imagen &&
                                    product.imagen.map((imagen) => (
                                        <Carousel.Item key={imagen.id}>
                                            <img
                                                className="d-block w-100"
                                                src={"../" + imagen.url}
                                                alt={product.nombre}
                                            />
                                        </Carousel.Item>
                                    ))}
                            </Carousel>
                        </div>
                        <div className="col-12 col-lg-5 mt-5">
                            <h3>{product.nombre}</h3>
                            <p id="product_id">ID del producto {product._id}</p>
                            <hr />

                            <div className="rating-outer">
                                <div
                                    className="rating-inner"
                                    style={{ width: `${(product.calificacion / 5) * 100}%` }}
                                ></div>
                            </div>
                            <span id="No_de_reviews">
                                ({product.numCalificaciones} Reviews)
                            </span>
                            <hr />
                            <p id="precio_producto">${product.precio}</p>
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus">-</span>
                                <input
                                    type="number"
                                    className="form-control count d-inline"
                                    readOnly
                                />
                                <span className="btn btn-primary plus">+</span>
                            </div>
                            <button
                                type="button"
                                id="carrito_btn"
                                className="btn btn-primary d-inline ml-4"
                                disabled={product.inventario === 0}
                            >
                                Agregar al Carrito
                            </button>
                            <hr />
                            <p>
                                Estado:
                                <span
                                    id="stock_estado"
                                    className={product.inventario ? "greenColor" : "redColor"}
                                >
                                    {product.inventario > 0 ? "Disponible" : "No disponible"}
                                </span>
                            </p>
                            <hr />
                            <h4 className="mt-2">Descripcion:</h4>
                            <p>{product.descripcion}</p>
                            <hr />
                            <p id="vendedor">
                                {" "}
                                Vendido por: <strong>{product.vendedor}</strong>
                            </p>
                            <button
                                id="review_btn"
                                type="button"
                                className="btn btn-primary mt-4"
                                data-toggle="modal"
                                data-target="#ratingModal"
                            ></button>
                                <div className='alert alert-danger mt-5' type='alert'>Inicia Sesión para dekar tu review</div>
                            {/* <!-- Modal --> */}
                            <div className='row mt-2 mb-5'>
                                <div className='rating w-50'>
                                    <div className='modal fade' id='ratingModal' tabIndex='-1' role='dialog' aria-labelledby='ratingModalLabel' aria-hidden='true'>
                                        <div className='modal-dialog' role='document'>
                                            <div className='modal-content'>
                                                <div className='modal-header'>
                                                    <h5 className='modal-title' id='ratingModalLabel'>Calificar Producto</h5>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                                        <span aria-hidden='true'>&times;</span>
                                                    </button>
                                                </div>
                                                <div className='modal-body'>
                                                    <ul className='stars'>
                                                        <li className='star'><i className='fa fa-star'></i></li>
                                                        <li className='star'><i className='fa fa-star'></i></li>
                                                        <li className='star'><i className='fa fa-star'></i></li>
                                                        <li className='star'><i className='fa fa-star'></i></li>
                                                        <li className='star'><i className='fa fa-star'></i></li>
                                                    </ul>
                                                        <textarea name='review' id='review' className='form-control mt-3'></textarea>
                                                        <button className='btn my-3 float-right review-btn px-4 text-white' data-dismiss='modal' aria-label='Close' type='button'>Enviar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default ProductDetails