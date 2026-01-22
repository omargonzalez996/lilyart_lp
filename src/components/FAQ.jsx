import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: '¿Cuánto tiempo dura el body paint?',
            answer: 'El body paint puede durar entre 8-12 horas dependiendo del tipo de pintura utilizada y las actividades que realices. Para sesiones fotográficas, la duración es más que suficiente. Se recomienda evitar el contacto excesivo con agua y fricción para mayor duración.'
        },
        {
            question: '¿Los materiales son seguros para la piel?',
            answer: 'Utilizamos únicamente pinturas profesionales hipoalergénicas y certificadas para uso cosmético. Son seguras para todo tipo de piel, incluyendo pieles sensibles. Siempre realizamos una pequeña prueba antes de comenzar cualquier trabajo.'
        },
        {
            question: '¿Cuánto tiempo tarda en completarse un cuadro personalizado?',
            answer: 'El tiempo varía según la complejidad del diseño. Un cuadro de café típico toma entre 5-7 días hábiles. Para trabajos más elaborados como óleos o piezas grandes, puede tomar de 2-3 semanas. Te mantenemos informado del progreso en todo momento.'
        },
        {
            question: '¿Hacen envíos a toda la República?',
            answer: 'Sí, realizamos envíos a toda la República Mexicana. El costo de envío se calcula según el destino y el tamaño de la pieza. Para piezas delicadas, utilizamos embalaje especial para garantizar que lleguen en perfectas condiciones.'
        },
        {
            question: '¿Puedo enviar mi propio diseño para una chamarra o cuadro?',
            answer: 'Por supuesto, nos encanta trabajar con las ideas de nuestros clientes. Puedes enviarnos imágenes de referencia, bocetos o descripciones detalladas. Trabajamos contigo para adaptar tu visión al medio elegido y asegurarnos de que el resultado final te encante.'
        },
        {
            question: '¿Cuáles son las formas de pago?',
            answer: 'Aceptamos transferencia bancaria, depósito en OXXO, PayPal y efectivo (para trabajos presenciales). Para pedidos personalizados, solicitamos un anticipo del 50% para comenzar el trabajo y el resto al momento de la entrega.'
        },
        {
            question: '¿Ofrecen servicios para eventos corporativos?',
            answer: 'Sí, ofrecemos paquetes especiales para eventos corporativos, fiestas infantiles, despedidas de soltera, sesiones fotográficas profesionales y más. Contáctanos para recibir una cotización personalizada según tus necesidades.'
        },
        {
            question: '¿Cómo cuido mi chamarra o sombrero pintado?',
            answer: 'Las prendas pintadas deben lavarse a mano con agua fría y jabón neutro, o en lavadora con ciclo delicado. No usar blanqueador ni secadora. Se recomienda voltear la prenda al revés antes de lavar. La pintura está sellada para resistir múltiples lavados.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 bg-base-200">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
                    <p className="text-gray-600">
                        Encuentra respuestas a las dudas más comunes
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-lg shadow-md overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-base-200/50 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold">{faq.question}</span>
                                <IoChevronDown
                                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    size={20}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
