import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#00629B] py-8 text-white">
      <div className="container">
        <nav className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            "HOME",
            "SITEMAP",
            "CONTACT",
            "ACCESSIBILITY",
            "NONDISCRIMINATION POLICY",
            "IEEE ETHICS REPORTING",
            "IEEE PRIVACY POLICY",
            "TERMS & DISCLOSURES"
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[13px] font-medium transition-colors hover:text-blue-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-center text-[13px] text-white/90 md:text-left">
            © Copyright 2025 IEEE - All rights reserved. A public charity, IEEE is the worlds largest technical professional organization dedicated to advancing technology for the benefit of humanity.
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
  )
}

export default Footer
