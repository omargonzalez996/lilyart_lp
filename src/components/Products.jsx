import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Portal from './Portal';
import OptimizedImage from './OptimizedImage';
import { BUSINESS } from '../config';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Cuadro Acrílico',
            price: '$500',
            image: '/pics/01.jpeg',
            description: 'Pintura acrílica floral sobre lienzo con colores vibrantes.',
            details: 'Cuadro pintado a mano con técnica acrílica sobre lienzo. En esta pieza se aprecian flores blancas con fondo en degradado de naranjas, verdes y azules. Cada cuadro es único y puede personalizarse con el diseño, colores y tamaño de tu elección. Ideal para decorar cualquier espacio con arte original.',
            dimensions: '40 x 50 cm',
            materials: 'Pintura acrílica, lienzo, barniz protector',
            deliveryTime: '5-7 días hábiles'
        },
        {
            id: 2,
            name: 'Sombrero Pintado',
            price: '$800',
            image: '/pics/02.jpeg',
            description: 'Sombrero decorado a mano con diseño de girasoles.',
            details: 'Sombrero intervenido con pintura acrílica textil. El diseño muestra girasoles pintados a mano sobre la visera con fondo verde, logrando un acabado vibrante y duradero. Puedes solicitar el diseño de tu preferencia. Perfecto para eventos, sesiones fotográficas o uso diario con un estilo único.',
            dimensions: 'Talla única ajustable',
            materials: 'Sombrero, pintura acrílica textil',
            deliveryTime: '7-10 días hábiles'
        },
        {
            id: 3,
            name: 'Cuadro Personalizado',
            price: '$650',
            image: '/pics/03.jpeg',
            description: 'Pintura de colibrí y flores en técnica mixta sobre fondo sepia.',
            details: 'Cuadro pintado a mano que combina colores vibrantes con fondos cálidos en tonos tierra y sepia. Esta pieza muestra un colibrí multicolor sobre flores amarillas. La técnica permite lograr contrastes llamativos sobre fondos neutros. Puedes pedir tu propio diseño: animales, flores, paisajes o lo que imagines.',
            dimensions: '35 x 25 cm',
            materials: 'Pintura acrílica, papel de arte grueso',
            deliveryTime: '5-7 días hábiles'
        },
        {
            id: 4,
            name: 'Face Paint',
            price: '$500',
            image: '/pics/04.jpeg',
            description: 'Maquillaje artístico de calavera para eventos y sesiones fotográficas.',
            details: 'Diseño de face paint completo pintado directamente sobre el rostro con pinturas hipoalergénicas certificadas para piel. Esta pieza muestra un diseño de calavera realista con detalle en grietas y sombreado. Ideal para eventos de Halloween, Día de Muertos, sesiones fotográficas o teatro. El maquillaje se aplica en sesión presencial y dura varias horas.',
            dimensions: 'Aplicación en rostro completo',
            materials: 'Pinturas hipoalergénicas, no tóxicas, aptas para piel',
            deliveryTime: 'Previa cita'
        },
        {
            id: 5,
            name: 'Face Paint Día de Muertos',
            price: '$600',
            image: '/pics/05.jpeg',
            description: 'Calavera artística con tocado colorido estilo Día de Muertos.',
            details: 'Diseño de face paint inspirado en la tradición del Día de Muertos: calavera pintada sobre el rostro con detalle en grietas, acompañada de un tocado multicolor con listones. Pinturas hipoalergénicas de larga duración. Perfecto para festivales, bodas temáticas, eventos culturales y sesiones fotográficas. Se trabaja bajo cita previa.',
            dimensions: 'Aplicación en rostro completo',
            materials: 'Pinturas hipoalergénicas, no tóxicas, aptas para piel',
            deliveryTime: 'Previa cita'
        },
        {
            id: 6,
            name: 'Vestido Pintado',
            price: '$1500',
            image: '/pics/06.jpeg',
            description: 'Vestido negro pintado a mano con diseño floral multicolor.',
            details: 'Vestido de tela negra intervenido artísticamente con pintura textil acrílica. El diseño muestra un arreglo floral completo: girasoles, alcatraces, rosas y flores silvestres distribuidos en la falda y el corpiño. La pintura es resistente al lavado. Ideal para quinceañeras, bodas, eventos especiales o colecciones de moda únicas. El diseño puede personalizarse.',
            dimensions: 'Tallas S, M, L, XL',
            materials: 'Pintura acrílica textil, fijador permanente',
            deliveryTime: '15-20 días hábiles'
        }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="py-12 px-4 bg-base-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            onClick={() => openModal(product)}
                        >
                            {/* Background Image */}
                            <OptimizedImage
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-end">
                                    <span className="btn btn-sm btn-primary btn-outline rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        Ver Detalles
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <Portal>
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closeModal}
                        />

                        {/* Modal Content */}
                        <div className="relative bg-base-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fade-in">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 btn btn-circle btn-ghost bg-black/30 hover:bg-black/50 text-white"
                                onClick={closeModal}
                            >
                                <IoClose size={24} />
                            </button>

                            {/* Product Image */}
                            <figure className="relative h-64 md:h-80">
                                <OptimizedImage
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {selectedProduct.name}
                                    </h3>
                                </div>
                            </figure>

                            {/* Product Details */}
                            <div className="p-6 overflow-y-auto max-h-[40vh]">
                                <p className="text-base-content/80 leading-relaxed mb-6">
                                    {selectedProduct.details}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-base-200 rounded-lg p-4">
                                        <p className="text-sm text-base-content/60 uppercase tracking-wide">Dimensiones</p>
                                        <p className="font-semibold mt-1">{selectedProduct.dimensions}</p>
                                    </div>
                                    <div className="bg-base-200 rounded-lg p-4">
                                        <p className="text-sm text-base-content/60 uppercase tracking-wide">Materiales</p>
                                        <p className="font-semibold mt-1">{selectedProduct.materials}</p>
                                    </div>
                                    <div className="bg-base-200 rounded-lg p-4">
                                        <p className="text-sm text-base-content/60 uppercase tracking-wide">Tiempo de entrega</p>
                                        <p className="font-semibold mt-1">{selectedProduct.deliveryTime}</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href={BUSINESS.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary flex-1"
                                    >
                                        Solicitar por WhatsApp
                                    </a>
                                    <button
                                        className="btn btn-outline"
                                        onClick={closeModal}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </section>
    );
};

export default Products;
