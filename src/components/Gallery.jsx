import React, { useState } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Portal from './Portal';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        { id: 1, src: '/pics/01.jpeg', title: 'Cuadro de Café', category: 'Pintura' },
        { id: 2, src: '/pics/02.jpeg', title: 'Chamarra Personalizada', category: 'Pintura' },
        { id: 3, src: '/pics/03.jpeg', title: 'Sombrero Pintado', category: 'Pintura' },
        { id: 4, src: '/pics/04.jpeg', title: 'Body Paint Floral', category: 'BodyPaint' },
        { id: 5, src: '/pics/05.jpeg', title: 'Diseño Artístico', category: 'BodyPaint' },
        { id: 6, src: '/pics/06.jpeg', title: 'Pintura Corporal', category: 'BodyPaint' },
        { id: 7, src: '/pics/07.jpeg', title: 'Arte en Lienzo', category: 'Pintura' },
    ];

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goToPrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    return (
        <section className="py-16 px-4 bg-base-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Galería de Trabajos</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Explora algunos de nuestros trabajos más destacados
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                                    <p className="font-semibold">{image.title}</p>
                                    <p className="text-sm text-gray-300">{image.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <Portal>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closeLightbox}
                        />

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                            onClick={closeLightbox}
                        >
                            <IoClose size={32} />
                        </button>

                        {/* Previous Button */}
                        <button
                            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        >
                            <IoChevronBack size={40} />
                        </button>

                        {/* Image */}
                        <div
                            className="relative max-w-4xl max-h-[80vh] mx-4 z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            <div className="text-center mt-4 text-white">
                                <p className="font-semibold text-lg">{images[selectedIndex].title}</p>
                                <p className="text-gray-400">{images[selectedIndex].category}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {selectedIndex + 1} / {images.length}
                                </p>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        >
                            <IoChevronForward size={40} />
                        </button>
                    </div>
                </Portal>
            )}
        </section>
    );
};

export default Gallery;
