import React, { Fragment, useEffect } from 'react'
import MetaData from './layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { Link } from "react-router-dom";

export const Home = () => {

    const { loading, products, error } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <Fragment>
            {loading ? <h1>Cargando...</h1> : (
                <Fragment>
                    <MetaData title="Lo mejor para tu mascota"></MetaData>
                    <h1 id="encabezado_productos">Últimos Productos</h1>

                    <section id="productos" className="container mt-5">
                        <div className="row">
                            {products &&
                                products.map((product) => (
                                    <div
                                        key={product._id}
                                        className="col-sm-12 col-md-6 col-lg-3 my-3"
                                    >
                                        <div className="card p-3 rounded">
                                            <img
                                                className="card-img-top mx-auto"
                                                src={product.imagen[0].url}
                                                alt={product.imagen[0].public_id}
                                            />
                                            <div className="card-body d-flex flex-column">
                                                <h5 id="titulo_producto">
                                                    <Link to={`/product/${product._id}`}>{product.nombre}</Link>
                                                </h5>
                                                <div className="rating mt-auto">
                                                    <div className="rating-outer">
                                                        <div className="rating-inner" style={{ width: `${(product.calificacion / 5) * 100}%` }}></div>
                                                    </div>
                                                    <span id="No_de_opiniones">{product.numCalificaciones} Reviews</span>
                                                </div>
                                                <p className="card-text">{"$ " + product.precio}</p>
                                                <Link to={`/product/${product._id}`}
                                                    id="view_btn"
                                                    className="btn btn-block"
                                                >
                                                    Ver Detalle
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Home;