import React from "react";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";
import { BUSINESS } from "../config";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <OptimizedImage src={BUSINESS.logo} alt={BUSINESS.name} className="w-24 invert" />
        <p className="font-bold">{BUSINESS.name}</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagramSquare size={50} />
          </a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsappSquare size={50} />
          </a>
          <a href={`tel:${BUSINESS.phone}`} aria-label="Teléfono">
            <FaPhoneSquare size={50} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
