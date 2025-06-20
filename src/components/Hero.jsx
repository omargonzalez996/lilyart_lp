import React from "react";

import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero bg-base-200 min-h-screen bg-cover bg-center z-10"
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/o5/wallhaven-o5gqm9.png')",
      }}
    >
      <div className="hero-content flex-col lg:flex-row w-full">
        {/* Image Section with Overlay Text */}
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-base-100 bg-black bg-opacity-50 rounded-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <img src="/logo_light.png" className="w-64" alt="lilyart_logo" />
            </h1>
            <p className="text-lg md:text-xl">Transforma en arte tu cuerpo</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="card bg-base-100 shadow-xl p-8 w-full max-w-md mt-5 lg:mt-0">
            <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
            <ul className="flex justify-center items-center w-full gap-5 my-5">
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href="https://www.instagram.com/gonz.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare size={40} />
                </a>
              </li>
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href="https://wa.me/524661010252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare size={40} />
                </a>
              </li>
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href="tel:+524661010252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhoneSquare size={40} />
                </a>
              </li>
            </ul>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="input input-md w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asunto</span>
                </label>
                <input
                  type="text"
                  placeholder="Asunto del mensaje"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  placeholder="Tu mensaje"
                  className="textarea textarea-bordered w-full rounded-md resize-none"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full rounded-md"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
