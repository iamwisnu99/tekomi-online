import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/prma_wsn11', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/tekomi', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/tekomi', label: 'Twitter' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-semibold tracking-wide">
                TEKOMI
              </span>
            </Link>
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Sebuah tempat di mana cita rasa bertemu ketenangan. Nikmati setiap momen bersama kami.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/#${item.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Dusun Pecikalan RT 001/RW 010<br />
                  Wangon, Kab. Banyumas, Jawa Tengah.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  +62 838 6386 7266
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Senin - Minggu<br />
                  08:00 - 22:00 WIB
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-primary-foreground/60 text-center md:text-left">
              © {currentYear} TEKOMI Cafe & Resto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
