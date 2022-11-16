import React from 'react'
import img1 from './imgs/img1.jpeg'
import img2 from './imgs/img2.jpeg'
import img3 from './imgs/img3.jpeg'
import img4 from './imgs/img4.jpeg'
import img5 from './imgs/img5.jpeg'
import img6 from './imgs/img6.jpeg'
import img7 from './imgs/img7.jpeg'
import img8 from './imgs/img8.jpeg'
import './hotel.css'

function Hotel() {
    return (
        <div>
            <section id="hotel" className="container">
                <div class="text-center pt-5">
                    <h1>Hotel</h1>
                    <h5>
                    Disfrutá  la tranquilidad de nuestro alojamiento rodeado de mucha naturaleza
                    </h5>
                    <ul>
                        <li>WiFi</li>
                        <li>Estacionamiento</li>
                        <li>Habitaciones cuádruples y dúplex</li>
                        <li>Patio</li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img1} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img2} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img3} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img4} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img5} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img6} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img7} alt="Galeria Imagenes" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={img8} alt="Galeria Imagenes" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hotel