import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdCleanHands } from "react-icons/md";
import { MdMonochromePhotos } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-base-200 py-12">
      {/* Que es LilyArt */}
      <div className="container mx-auto px-4 text-center my-22">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-10">
          ¿QUÉ ES LILYART?
        </h2>
        <p className="text-base md:text-lg text-base-content text-center leading-relaxed">
          ¡Da vida a tu creatividad! ¿Buscas un diseño de body paint o face
          paint único y espectacular? ¡Estás en el lugar correcto! Contáctame a
          través del formulario o por MD en Instagram o WhatsApp y cuéntame tu
          idea. Estoy lista para transformar tu visión en arte. ¡Escríbeme ahora
          y empecemos a crear algo increíble!
        </p>
      </div>

      {/* Carrousel */}
      <div className="container mx-auto px-4 text-center my-10">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="/pics/01.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/02.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/03.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/04.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/05.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/06.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pics/07.jpeg"
              alt="Burger"
              className="w-64 h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* ¿Por qué confiar en nosotros? */}
      <div className="container mx-auto px-4 text-center my-22">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-10">
          ¿POR QUÉ CONFIAR EN NOSOTROS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Diseño Personalizado */}
          <div className="card bg-base-100 shadow-md p-6 rounded-md flex flex-col items-center">
            <div className="rounded-md w-16 h-16 flex items-center justify-center mb-4">
              <IoHeartCircleSharp size={46} />
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">
              Diseño Personalizado
            </h3>
            <p className="text-sm text-base-content opacity-80">
              Convertimos tu cuerpo o rostro en una obra de arte personalizada,
              perfecta para eventos, sesiones fotográficas o simplemente para
              expresarte de forma original.
            </p>
          </div>

          {/* Materiales Seguros */}
          <div className="card bg-base-100 shadow-md p-6 rounded-md flex flex-col items-center">
            <div className="rounded-md w-16 h-16 flex items-center justify-center mb-4">
              <MdHealthAndSafety size={46} />
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">
              Materiales Seguros
            </h3>
            <p className="text-sm text-base-content opacity-80">
              Utilizamos pinturas hipoalergénicas, no tóxicas y aptas para piel,
              garantizando una experiencia cómoda y segura para todas las
              edades.
            </p>
          </div>

          {/* Fácil de Limpiar */}
          <div className="card bg-base-100 shadow-md p-6 rounded-md flex flex-col items-center">
            <div className="rounded-md w-16 h-16 flex items-center justify-center mb-4">
              <MdCleanHands size={46} />
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">
              Fácil de Limpiar
            </h3>
            <p className="text-sm text-base-content opacity-80">
              Utilizamos pinturas hipoalergénicas, no tóxicas y aptas para piel,
              garantizando una experiencia cómoda y segura para todas las
              edades.
            </p>
          </div>

          {/* Sesiones Fotográficas */}
          <div className="card bg-base-100 shadow-md p-6 rounded-md flex flex-col items-center">
            <div className="rounded-md w-16 h-16 flex items-center justify-center mb-4">
              <MdMonochromePhotos size={46} />
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">
              Sesiones Fotográficas
            </h3>
            <p className="text-sm text-base-content opacity-80">
              Añade un toque artístico a tus fotos con diseños que quedan
              perfectos, ideales para redes sociales, portafolios o recuerdos
              personales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
