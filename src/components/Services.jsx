import React from 'react'
import Carrousel from './Carrousel';

const Services = () => {
    const services = [
        {
            titleText: 'BodyPaint',
            description: 'Transforma cualquier ocasión en un momento inolvidable con nuestro servicio de body paint. Ofrecemos pinta caritas para fiestas infantiles, llenando de color y diversión los rostros de los pequeños con diseños creativos y seguros para la piel. También brindamos pintura individual para niños, adultos y eventos festivos, creando looks únicos que reflejan tu personalidad o el tema de la celebración. Para los más audaces, nuestro servicio de pintura de cuerpo completo es perfecto para eventos especiales, sesiones fotográficas o performances artísticas, con diseños detallados y originales que te harán destacar. ¡Deja que tu cuerpo sea el lienzo de nuestra creatividad!',
            images: [
                { src: '/pics/04.jpeg', alt: 'Calavera realista' },
                { src: '/pics/05.jpeg', alt: 'Face paint Día de Muertos' },
                { src: '/pics/07.jpeg', alt: 'Catrina en cempasúchil' },
                { src: '/pics/10.jpeg', alt: 'Face paint floral' },
            ],
        },
        {
            titleText: 'Pintura',
            description: 'Explora el arte en todas sus formas con nuestras creaciones únicas. Pintamos cuadros acrílicos personalizados con colores vibrantes, intervenimos chamarras de mezclilla con diseños exclusivos que reflejan tu esencia, y transformamos sombreros, tenis, bolsas y vestidos en verdaderas obras de arte pintadas a mano. Cada pieza es creada con pasión y cuidado, haciendo de cada obra una experiencia artística inolvidable.',
            images: [
                { src: '/pics/01.jpeg', alt: 'Cuadro acrílico floral' },
                { src: '/pics/03.jpeg', alt: 'Colibrí y flores' },
                { src: '/pics/09.jpeg', alt: 'Chamarra con mariposas' },
                { src: '/pics/02.jpeg', alt: 'Sombrero con girasoles' },
                { src: '/pics/08.jpeg', alt: 'Tenis pintados' },
                { src: '/pics/06.jpeg', alt: 'Vestido pintado con flores' },
            ],
        }
    ];
    return (
        <section className="py-12 px-4 bg-base-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center mb-12 gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Columna de texto */}
                        <div className="md:w-1/2 w-full">
                            <h3 className="font-script text-6xl md:text-7xl text-primary text-center my-4">
                                {service.titleText}
                            </h3>
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
