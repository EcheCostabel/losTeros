import React from "react";
import { UilInstagramAlt, UilWhatsappAlt, UilFacebook } from "@iconscout/react-unicons";
import logo from "../NavBar/teroo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white">
      <div className="container row p-5 pb-2 ">
        <div className="col-xs-12 col-md-6 col-lg-4">
          {/* <p className='fs-40'>Complejo Los Teros</p> */}
          <img alt="Los Teros" src={logo} />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <p className="h5 mb-3">Terminos</p>
          <div className="mb-1">
            <a
              className="text-secondary text-decoration-none "
              href="/terminos"
            >
              Terminos y Condiciones
            </a>
          </div>
          <div className="mb-1">
            <a className="text-secondary text-decoration-none " href="/privacy">
              Politica de Privacidad
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <p className="h5 mb-3">Contacto</p>
          <div className="mb-1">
           <p className="text-secondary text-decoration-none">losterossalones@gmail.com</p>
          </div>
          <div className="mb-1">
            <a
              className="text-secondary text-decoration-none "
              target="_blank"
              href="https://wa.me/3425606269"
            >
              <UilWhatsappAlt />
            </a>
          </div>
          <div className="mb-1">
            <a
              className="text-secondary text-decoration-none "
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100083473955792"
            >
              <UilFacebook />
            </a>
          </div>
          <div className="mb-1">
            <a
              className="text-secondary text-decoration-none"
              target="_blank"
              href="https://instagram.com/losteroscomplejo?igshid=YmMyMTA2M2Y="
            >
              <UilInstagramAlt />
              
            </a>
          </div>
        </div>
        <div className="col-xs-12 pt-4">
          <p className="text-white text-center">
            Copyright - All rights reserved © 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
