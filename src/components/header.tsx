import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
    {/* Top bar */}
    <div className="h-10 bg-[#00629B]">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <nav className="flex items-center gap-6">
          {["IEEE.org", "IEEE Xplore Digital Library", "IEEE Standards", "IEEE Spectrum", "More Sites"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[13px] font-medium text-white transition-colors hover:text-blue-200"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <select className="bg-transparent text-[13px] text-white focus:outline-none">
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>

    {/* Main header */}
    <div className="container mx-auto flex h-20 items-center justify-between px-4">
      <Link href="/" className="flex items-center">
        <h1 className="text-2xl font-bold text-[#00629B]">IEEE Site Template</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
          <Search className="h-5 w-5" />
        </Button>
        <Image width="150" height="20" src="/logo-ieee.svg" alt="IEEE Logo" className="h-8" />
      </div>
    </div>

    {/* Main navigation */}
    <div className="bg-[#00629B]">
      <div className="container mx-auto px-4">
        <nav className="flex h-14">
          {[
            "HOME TEMPLATE 1",
            "HOME TEMPLATE 2",
            "HOW TO EMBED FORMS",
            "MEDIA GALLERY",
            "CONTACT"
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="flex items-center px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#0077be]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header
