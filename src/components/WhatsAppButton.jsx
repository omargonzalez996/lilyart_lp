import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);

    const phoneNumber = '524661010252';
    const message = 'Hola, me gustaría obtener más información sobre sus servicios.';

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Stop pulsing after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsPulsing(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            } ${isPulsing ? 'animate-bounce' : ''}`}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={28} />

            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
        </a>
    );
};

export default WhatsAppButton;
