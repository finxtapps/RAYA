import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>
            RAYA is providing healthy and nutritious food with the taste of
            Home.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/company/112397123/admin/page-posts/published/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={2} />
            </a>
            <a
              href="https://www.instagram.com/raayaa.co?igsh=MWptMmltYXJ5Z240NA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
            <a
              href="https://wa.me/917398974266"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7398974266</li>
            <li>theraayaa@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Raya.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
