import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
      <h1 id="encabezado_productos">últimos Productos</h1>

      <section id="productos" className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top" src="../../public/images" alt="" />
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="">Titulo del producto</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="puntaje_producto">5 reviews</span>
                </div>
                <p className='card-text'>$72.000</p><a href="#" id='ver_producto' className='btn btn-block'>Ver Detalle del producto</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}