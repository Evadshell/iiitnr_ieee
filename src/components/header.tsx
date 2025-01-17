import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-10 items-center justify-between bg-[#00629B] text-sm text-white">
        <nav className="flex items-center space-x-8 px-4 text-[13px] font-medium">
          <Link href="#" className="hover:text-blue-200">IEEE.org</Link>
          <Link href="#" className="hover:text-blue-200">IEEE Xplore Digital Library</Link>
          <Link href="#" className="hover:text-blue-200">IEEE Standards</Link>
          <Link href="#" className="hover:text-blue-200">IEEE Spectrum</Link>
          <Link href="#" className="hover:text-blue-200">More Sites</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <select className="bg-transparent text-sm focus:outline-none">
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-[#00629B]">IEEE Site Template</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          {/* <Image width={10} height={10} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SQ6ommsFD0n0rW51nzryUVvuwpO89P.png" alt="IEEE Logo" className="h-8" /> */}
        </div>
      </div>
      <nav className="sticky top-0 z-50 bg-[#00629B] shadow-md">
        <div className="container flex h-14 items-center space-x-12">
          {["HOME TEMPLATE 1", "HOME TEMPLATE 2", "HOW TO EMBED FORMS", "MEDIA GALLERY", "CONTACT"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-[13px] font-bold text-white hover:text-blue-200"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
