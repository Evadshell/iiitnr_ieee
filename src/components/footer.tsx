import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  "HOME",
  "SITEMAP",
  "CONTACT",
  "ACCESSIBILITY",
  "NONDISCRIMINATION POLICY",
  "IEEE ETHICS REPORTING",
  "IEEE PRIVACY POLICY",
  "TERMS & DISCLOSURES",
];

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#00629B] py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <nav className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-[13px] font-medium transition-colors hover:text-blue-200"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Social Icons and Footer Text */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-center text-[13px] text-white/90 md:text-left">
            © Copyright 2025 IEEE - All rights reserved. A public charity, IEEE
            is the world's largest technical professional organization dedicated
            to advancing technology for the benefit of humanity.
          </p>
          <div className="flex gap-4">
            {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="text-white/90 transition-colors hover:text-blue-200"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
