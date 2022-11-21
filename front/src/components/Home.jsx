import React, { Fragment, useEffect } from 'react'
import MetaData from './layouts/MetaData';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/productActions';

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <Fragment>
            <MetaData title="Lo mejor para tu mascota"></MetaData>
            <h1 id="encabezado_productos">Últimos Productos</h1>

            <section id="productos" className="container mt-5">
                <div className="row">
                    {/* Prod 1 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutre1.jpg" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <a href="http://localhost:3000">Titulo del producto</a>
                                </h5>
                                <div className="rating mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="puntaje_producto">5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href="http://localhost:3000" id='view_btn' className='btn btn-block'>Ver Detalle del producto</a>
                            </div>
                        </div>
                    </div>
                    {/* Prod 2 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutre1.jpg" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <a href="http://localhost:3000">Titulo del producto</a>
                                </h5>
                                <div className="rating mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="puntaje_producto">5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href="http://localhost:3000" id='view_btn' className='btn btn-block'>Ver Detalle del producto</a>
                            </div>
                        </div>
                    </div>
                    {/* Prod 3 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutre1.jpg" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <a href="http://localhost:3000">Titulo del producto</a>
                                </h5>
                                <div className="rating mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="puntaje_producto">5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href="http://localhost:3000" id='view_btn' className='btn btn-block'>Ver Detalle del producto</a>
                            </div>
                        </div>
                    </div>
                    {/* Prod 4 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutre1.jpg" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <a href="http://localhost:3000">Titulo del producto</a>
                                </h5>
                                <div className="rating mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="puntaje_producto">5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href="http://localhost:3000" id='view_btn' className='btn btn-block'>Ver Detalle del producto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Home;