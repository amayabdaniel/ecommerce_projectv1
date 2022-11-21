import React, { Fragment } from 'react'
import MetaData from '../layouts/MetaData'

function ProductDetails() {
    return (
        <Fragment>
            <MetaData title="Agility alimento blando perros"></MetaData>
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                    <img
                        src="../../../public/images/agility.jpg"
                        height={500}
                        width={500}
                        alt="agility"
                    />
                </div>
                <div className="col-12 col-lg-5 mt-5">
                    <h3>Agility alimento blando perros</h3>
                    <p id="product_id">Product #3253252</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductDetails