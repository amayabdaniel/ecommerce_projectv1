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
                    <MetaData title={product.nombre}></MetaData>
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                            <Carousel pause="hover">
                                {product.imagen && product.imagen.map(imagen => (
                                    <Carousel.Item key={imagen.id}>
                                        <img className="d-block w-100" src={imagen.url} alt={product.nombre} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="col-12 col-lg-5 mt-5">
                            <h3>Agility alimento blando perros</h3>
                            <p id="product_id">Product #3253252</p>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default ProductDetails