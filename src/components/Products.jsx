import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Portal from './Portal';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Cuadro de Café',
            price: '$500',
            image: '/pics/01.jpeg',
            description: 'Hermoso cuadro pintado con café.',
            details: 'Obra de arte única creada utilizando café como pigmento principal. Cada cuadro es pintado a mano, lo que garantiza que no existen dos piezas iguales. El café le da tonalidades cálidas y un aroma sutil que perdura. Ideal para decorar espacios con un toque artístico y original.',
            dimensions: '40 x 50 cm',
            materials: 'Café, lienzo, barniz protector',
            deliveryTime: '5-7 días hábiles'
        },
        {
            id: 2,
            name: 'Chamarra Personalizada',
            price: '$1200',
            image: '/pics/02.jpeg',
            description: 'Chamarra de mezclilla con diseño único.',
            details: 'Chamarra de mezclilla intervenida con pintura acrílica de alta calidad. Puedes elegir el diseño que más te guste o enviar tu propia idea. La pintura es resistente al lavado y no se cuartea con el uso. Perfecta para expresar tu estilo personal.',
            dimensions: 'Tallas S, M, L, XL',
            materials: 'Mezclilla, pintura acrílica textil',
            deliveryTime: '10-14 días hábiles'
        },
        {
            id: 3,
            name: 'Sombrero Pintado',
            price: '$800',
            image: '/pics/03.jpeg',
            description: 'Sombrero pintado a mano con flores.',
            details: 'Sombrero de palma decorado con diseños florales pintados a mano. Cada pieza es única y refleja la tradición artesanal mexicana combinada con técnicas modernas de pintura. Ideal para eventos especiales, sesiones fotográficas o para lucir un estilo único.',
            dimensions: 'Talla única ajustable',
            materials: 'Palma natural, pintura acrílica',
            deliveryTime: '7-10 días hábiles'
        },
        {
            id: 4,
            name: 'Óleo Personalizado',
            price: '$1500',
            image: '/pics/04.jpeg',
            description: 'Pintura al óleo con el diseño de tu elección.',
            details: 'Creamos pinturas al óleo personalizadas basadas en fotografías, paisajes o diseños originales. Utilizamos técnicas tradicionales que garantizan colores vibrantes y durabilidad. Cada obra es única y puede convertirse en el centro de atención de cualquier espacio.',
            dimensions: '50 x 70 cm',
            materials: 'Óleo, lienzo de algodón, bastidor de madera',
            deliveryTime: '15-20 días hábiles'
        },
        {
            id: 5,
            name: 'Tenis Intervenidos',
            price: '$900',
            image: '/pics/05.jpeg',
            description: 'Tenis blancos con arte personalizado.',
            details: 'Transforma tus tenis en una obra de arte única. Pintamos sobre tenis blancos con diseños personalizados que reflejan tu estilo. La pintura es resistente al agua y al uso diario. Puedes elegir entre nuestros diseños o enviar tu propia idea.',
            dimensions: 'Todas las tallas disponibles',
            materials: 'Pintura acrílica especial para tela y piel',
            deliveryTime: '7-10 días hábiles'
        },
        {
            id: 6,
            name: 'Bolsa Pintada',
            price: '$650',
            image: '/pics/06.jpeg',
            description: 'Bolsa de tela con diseño artístico.',
            details: 'Bolsas de tela de alta calidad intervenidas con diseños únicos pintados a mano. Perfectas para el día a día, compras o como accesorio de moda. Cada bolsa es una pieza única que combina funcionalidad con arte.',
            dimensions: '40 x 35 cm',
            materials: 'Tela de algodón, pintura textil',
            deliveryTime: '5-7 días hábiles'
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
                            <img
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
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary">
                                        {product.price}
                                    </span>
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
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {selectedProduct.name}
                                    </h3>
                                    <p className="text-2xl font-bold text-primary mt-1">
                                        {selectedProduct.price}
                                    </p>
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
                                        href="https://wa.me/524661010252"
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
