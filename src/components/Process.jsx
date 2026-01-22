import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubbles, IoColorPalette, IoBrush, IoGift, IoArrowForward } from 'react-icons/io5';

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const steps = [
        {
            icon: IoChatbubbles,
            title: 'Contacto',
            description: 'Platícanos tu idea o el servicio que necesitas. Escuchamos tus necesidades y te asesoramos.',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            icon: IoColorPalette,
            title: 'Diseño',
            description: 'Creamos una propuesta de diseño basada en tu visión. Hacemos ajustes hasta que estés satisfecho.',
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            icon: IoBrush,
            title: 'Creación',
            description: 'Ponemos manos a la obra. Te mantenemos informado del progreso de tu proyecto.',
            gradient: 'from-pink-500 to-pink-600'
        },
        {
            icon: IoGift,
            title: 'Entrega',
            description: 'Recibes tu obra terminada. Tu satisfacción es nuestra prioridad.',
            gradient: 'from-green-500 to-green-600'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 px-4 bg-base-200 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Trabajamos contigo en cada paso para asegurar resultados excepcionales
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
                    {/* Connection Line */}
                    <div className={`absolute top-24 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            {/* Card */}
                            <div className="group bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                                {/* Icon Container */}
                                <div className={`relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="text-white text-3xl" />

                                    {/* Step Number Badge */}
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-base-100 text-primary font-bold text-sm rounded-full flex items-center justify-center shadow-md border-2 border-primary">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-base-content/70 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            <div className="bg-base-100 rounded-xl p-5 shadow-lg flex gap-4 items-start">
                                {/* Icon */}
                                <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md`}>
                                    <step.icon className="text-white text-2xl" />
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-base-100 text-primary font-bold text-xs rounded-full flex items-center justify-center shadow border border-primary">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-bold mb-1">{step.title}</h3>
                                    <p className="text-base-content/70 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className={`w-0.5 h-4 bg-gradient-to-b ${step.gradient} mx-auto transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 150 + 350}ms` }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a
                        href="#contact"
                        className="btn btn-primary btn-lg rounded-full px-8 gap-2 group"
                    >
                        Comenzar Proyecto
                        <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
