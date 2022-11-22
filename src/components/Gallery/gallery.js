import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import "./gallery.css";

function gallery() {
  return (
    <div>
      <br id="principal" />
      <br />
      <section id="galery" className="container">
        <div class="text-center pt-5">
          <h1>Salon Principal</h1>

          <br />
        </div>

        <span className="pp">Estacionamiento</span>
        <br />
        <span className="pp">Barra</span>
        <br />
        <span className="pp">Cocina completamente equipada</span>
        <br />
        <span className="pp">Baños (Hombres - Mujeres - Adaptado)</span>
        <br />
        <span className="pp">WiFi</span>
        <br />
        <span className="pp">Patio de verano</span>
        <br />
        <span className="pp">Grupo electrogeno</span>
        <br />
        <span className="pp">Sonido e iluminacion</span>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage1">
              <img src={img1} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage2">
              <img src={img2} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage3">
              <img src={img3} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage4">
              <img src={img4} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage5">
              <img src={img5} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage6">
              <img src={img6} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage7">
              <img src={img7} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage8">
              <img src={img8} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage9">
              <img src={img9} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage10">
              <img src={img10} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage11">
              <img src={img11} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage12">
              <img src={img12} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage13">
              <img src={img13} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage14">
              <img src={img14} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage15">
              <img src={img15} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage16">
              <img src={img16} alt="Galeria Imagenes" />
            </a>
          </div>
        </div>
      </section>

      {/* Modal Gallery */}
      <div
        tabIndex="-1"
        aria-labelledby="modalImage1"
        aria-hidden="true"
        className="modal fade"
        id="modalImage1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img1}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage2"
        aria-hidden="true"
        className="modal fade"
        id="modalImage2"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img2}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage3"
        aria-hidden="true"
        className="modal fade"
        id="modalImage3"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img3}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage4"
        aria-hidden="true"
        className="modal fade"
        id="modalImage4"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img4}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage5"
        aria-hidden="true"
        className="modal fade"
        id="modalImage5"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img5}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage6"
        aria-hidden="true"
        className="modal fade"
        id="modalImage6"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img6}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage7"
        aria-hidden="true"
        className="modal fade"
        id="modalImage7"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img7}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage8"
        aria-hidden="true"
        className="modal fade"
        id="modalImage8"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img8}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage9"
        aria-hidden="true"
        className="modal fade"
        id="modalImage9"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img9}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage10"
        aria-hidden="true"
        className="modal fade"
        id="modalImage10"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img10}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage11"
        aria-hidden="true"
        className="modal fade"
        id="modalImage11"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img11}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage12"
        aria-hidden="true"
        className="modal fade"
        id="modalImage12"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img12}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage13"
        aria-hidden="true"
        className="modal fade"
        id="modalImage13"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img13}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage14"
        aria-hidden="true"
        className="modal fade"
        id="modalImage14"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img14}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage15"
        aria-hidden="true"
        className="modal fade"
        id="modalImage15"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img15}></img>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage16"
        aria-hidden="true"
        className="modal fade"
        id="modalImage16"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <img src={img16}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default gallery;
