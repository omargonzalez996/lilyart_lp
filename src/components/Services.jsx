import React from 'react'
import Carrousel from './Carrousel';
import OptimizedImage from './OptimizedImage';

const Services = () => {
    const services = [
        {
            title: '/BodyPaint.png',
            titleText: 'BodyPaint',
            description: 'Transforma cualquier ocasión en un momento inolvidable con nuestro servicio de body paint. Ofrecemos pinta caritas para fiestas infantiles, llenando de color y diversión los rostros de los pequeños con diseños creativos y seguros para la piel. También brindamos pintura individual para niños, adultos y eventos festivos, creando looks únicos que reflejan tu personalidad o el tema de la celebración. Para los más audaces, nuestro servicio de pintura de cuerpo completo es perfecto para eventos especiales, sesiones fotográficas o performances artísticas, con diseños detallados y originales que te harán destacar. ¡Deja que tu cuerpo sea el lienzo de nuestra creatividad!',
            images: [
                {
                    src: '/pics/01.jpeg',
                    alt: 'BodyPaint 1'
                },
                {
                    src: '/pics/02.jpeg',
                    alt: 'BodyPaint 2'
                },
                {
                    src: '/pics/03.jpeg',
                    alt: 'BodyPaint 3'
                }
            ],
        },
        {
            title: '/Pintura.png',
            titleText: 'Pintura',
            description: 'Explora el arte en todas sus formas con nuestras creaciones únicas. Ofrecemos cuadros hechos con base en café, una técnica innovadora que combina aromas y texturas para dar vida a piezas originales. Nuestras pinturas al óleo capturan emociones y paisajes con un estilo clásico y vibrante. Además, personalizamos chamarras de mezclilla con diseños exclusivos que reflejan tu esencia, y transformamos sombreros en verdaderas obras de arte pintadas a mano. Complementamos nuestra oferta con artesanías únicas, perfectas para decorar o regalar. Cada pieza es creada con pasión y cuidado, haciendo de cada obra una experiencia artística inolvidable.',
            images: [
                {
                    src: '/pics/03.jpeg',
                    alt: 'Pintura 3'
                },
                {
                    src: '/pics/02.jpeg',
                    alt: 'Pintura 2'
                },
                {
                    src: '/pics/04.jpeg',
                    alt: 'Pintura 4'
                }
            ],
        }
    ];
    return (
        <section className="py-12 px-4 bg-base-200">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center mb-12 gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Columna de texto */}
                        <div className="md:w-1/2 w-full">
                            <OptimizedImage
                                className="w-72 my-4 mx-auto"
                                src={service.title}
                                alt={service.titleText}
                            />
                            <p className="text-base-content/70 text-justify p-5">{service.description}</p>
                        </div>
                        {/* Columna de carrusel */}
                        <div className="md:w-1/2 w-full">
                            <Carrousel slides={service.images} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
