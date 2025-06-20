import React from "react";

import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <img src="/logo_light.png" alt="lilyart" />
        <p className="font-bold">
          LilyArt
          <br />
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="cursor-pointer">
            <FaInstagramSquare size={50} />
          </a>
          <a className="cursor-pointer">
            <FaWhatsappSquare size={50} />
          </a>
          <a className="cursor-pointer">
            <FaPhoneSquare size={50} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
