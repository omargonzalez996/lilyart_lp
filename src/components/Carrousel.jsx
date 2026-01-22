import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = slides.length;

    // Funciones para navegar
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full mx-auto my-10">
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden w-full rounded-md">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-full w-full flex-shrink-0 flex-grow-0 relative"
                        >
                            <OptimizedImage
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover bg-no-repeat bg-center"
                            />
                            {/* Contenedor de texto */}
                            <div className="absolute bottom-0 left-0 w-full text-white p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                                    {slide.alt}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botones de navegación */}
            <button
                className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[#A71930] text-white p-2 rounded-full hover:text-primary w-10 h-10"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#A71930] text-white p-2 rounded-full hover:text-primary w-10 h-10"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;