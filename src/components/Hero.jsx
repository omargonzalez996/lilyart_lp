import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";
import OptimizedImage from "./OptimizedImage";
import { BUSINESS } from "../config";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Error al enviar el mensaje. Por favor intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero min-h-screen z-10 relative overflow-hidden">
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/b002.webp')",
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: "transform",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="hero-content flex-col lg:flex-row w-full relative z-10">
        {/* Image Section with Overlay Text */}
        <div className="lg:w-1/2 w-full relative mb-5">
          <div className="flex flex-col items-center justify-center text-base-100 py-10 lg:py-0 lg:absolute lg:inset-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <OptimizedImage src={BUSINESS.logo} className="w-64 invert" alt="LilyArt - Body Paint y Arte Personalizado en México" loading="eager" />
            </h1>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full flex justify-center" id="contact">
          <div className="card bg-base-100 shadow-xl p-8 w-full max-w-md mt-5 lg:mt-0 animate-glow">
            <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
            <ul className="flex justify-center items-center w-full gap-5 my-5">
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare size={40} />
                </a>
              </li>
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare size={40} />
                </a>
              </li>
              <li className="btn btn-ghost btn-primary p-0 rounded-md">
                <a
                  href={`tel:${BUSINESS.phone}`}
                >
                  <FaPhoneSquare size={40} />
                </a>
              </li>
            </ul>

            {/* Status Message */}
            {status.message && (
              <div
                className={`alert mb-4 ${
                  status.type === "success"
                    ? "alert-success"
                    : status.type === "error"
                      ? "alert-error"
                      : "alert-info"
                }`}
              >
                {status.type === "success" ? (
                  <IoCheckmarkCircle size={20} />
                ) : (
                  <IoAlertCircle size={20} />
                )}
                <span className="text-sm">{status.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input input-md w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asunto</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  className="textarea textarea-bordered w-full rounded-md resize-none"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full rounded-md"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
