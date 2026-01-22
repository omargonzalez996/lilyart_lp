import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'María García',
            role: 'Cliente de BodyPaint',
            image: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            comment: 'Increíble trabajo en mi sesión de fotos. Lily tiene un talento único para crear diseños que realmente capturan la esencia de lo que buscas. Súper profesional y el resultado superó mis expectativas.'
        },
        {
            id: 2,
            name: 'Carlos Mendoza',
            role: 'Cliente de Pintura',
            image: 'https://i.pravatar.cc/150?img=3',
            rating: 5,
            comment: 'Mandé a personalizar una chamarra y quedó espectacular. El diseño que eligió para mi idea fue perfecto. La calidad de la pintura es excelente, ya la he lavado varias veces y sigue como nueva.'
        },
        {
            id: 3,
            name: 'Ana Sofía Ruiz',
            role: 'Cliente de Evento',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            comment: 'Contratamos a LilyArt para pintar caritas en el cumpleaños de mi hija. Los niños estaban encantados con los diseños. Muy puntual, amable y los diseños duraron toda la fiesta.'
        },
        {
            id: 4,
            name: 'Roberto Sánchez',
            role: 'Cliente de Cuadros',
            image: 'https://i.pravatar.cc/150?img=8',
            rating: 5,
            comment: 'El cuadro de café que me hizo para mi oficina es una obra de arte. Todos mis clientes preguntan de dónde lo saqué. El aroma sutil del café le da un toque único. 100% recomendado.'
        }
    ];

    return (
        <section className="py-16 px-4 bg-base-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestra mayor recompensa
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="card-body">
                                <FaQuoteLeft className="text-primary/30 text-3xl mb-2" />
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {testimonial.comment}
                                </p>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 mt-auto">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
