import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#00629B] text-white">
    <div className="container py-8">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <Link href="#" className="hover:text-blue-200">HOME</Link>
        <Link href="#" className="hover:text-blue-200">SITEMAP</Link>
        <Link href="#" className="hover:text-blue-200">CONTACT</Link>
        <Link href="#" className="hover:text-blue-200">ACCESSIBILITY</Link>
        <Link href="#" className="hover:text-blue-200">NONDISCRIMINATION POLICY</Link>
        <Link href="#" className="hover:text-blue-200">IEEE ETHICS REPORTING</Link>
        <Link href="#" className="hover:text-blue-200">IEEE PRIVACY POLICY</Link>
        <Link href="#" className="hover:text-blue-200">TERMS & DISCLOSURES</Link>
      </div>
      
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm md:flex-row">
        <p className="text-center md:text-left">
          © Copyright 2025 IEEE - All rights reserved. A public charity, IEEE is the worlds largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-blue-200">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
