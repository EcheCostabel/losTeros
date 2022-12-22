import React from "react";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img8 from "./imgs/img8.jpeg";
import "./hotel.css";

function Hotel() {
  return (
    <div>
      <br id="hotel" />
      <br />
      <section id="hotel1" className="container">
        <div class="text-center pt-5">
          <h1>Hotel</h1>
          <h5>
            Disfrutá la tranquilidad de nuestro alojamiento rodeado de mucha
            naturaleza
          </h5>

          <span>WiFi</span>
          <br />
          <span>Estacionamiento</span>
          <br />
          <span>Habitaciones cuádruples y dúplex</span>
          <br />
          <span>Patio</span>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage17">
              <img src={img1} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage18">
              <img src={img2} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage19">
              <img src={img3} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage20">
              <img src={img4} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage21">
              <img src={img5} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage22">
              <img src={img6} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage23">
              <img src={img7} alt="Galeria Imagenes" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#!" data-bs-toggle="modal" data-bs-target="#modalImage24">
              <img src={img8} alt="Galeria Imagenes" />
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
        id="modalImage17"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img1} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage2"
        aria-hidden="true"
        className="modal fade"
        id="modalImage18"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img2} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage3"
        aria-hidden="true"
        className="modal fade"
        id="modalImage19"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img3} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage4"
        aria-hidden="true"
        className="modal fade"
        id="modalImage20"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img4} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage5"
        aria-hidden="true"
        className="modal fade"
        id="modalImage21"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img5} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage6"
        aria-hidden="true"
        className="modal fade"
        id="modalImage22"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img6} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage6"
        aria-hidden="true"
        className="modal fade"
        id="modalImage23"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img7} />
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-labelledby="modalImage6"
        aria-hidden="true"
        className="modal fade"
        id="modalImage24"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              class="btn-close bg-light text-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img class="img-modal" src={img8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
