import React from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img15 from './images/img15.jpg'
import img16 from './images/img16.jpg'
import './gallery.css'

function gallery() {
  return (
    <section id='gallery' class='container'>

    <div class='text-center pt-5'>
        <h1>Salon Principal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Repellat, aspernatur.</p>

    </div>

    <div className='row'>
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
            <img src={img8}alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img9} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img10} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img11} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img12} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img13} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img14} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img15} alt="Galeria Imagenes" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img16} alt="Galeria Imagenes" />
        </div>
    </div>
</section>
  )
}

export default gallery



