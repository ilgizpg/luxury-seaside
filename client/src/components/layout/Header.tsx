import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed w-full bg-white bg-opacity-95 shadow-md z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="font-display font-bold text-2xl md:text-3xl text-primary">Number 5</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-body font-medium hover:text-accent transition-all">Home</Link>
          <Link href="/rooms" className="font-body font-medium hover:text-accent transition-all">Rooms</Link>
          <Link href="/amenities" className="font-body font-medium hover:text-accent transition-all">Amenities</Link>
          <Link href="/gallery" className="font-body font-medium hover:text-accent transition-all">Gallery</Link>
          <Link href="/about" className="font-body font-medium hover:text-accent transition-all">About</Link>
          <Link href="/location" className="font-body font-medium hover:text-accent transition-all">Location</Link>
          <Link href="/booking" className="font-body font-medium hover:text-accent transition-all">Book</Link>
          <Link href="/contact" className="font-body font-medium hover:text-accent transition-all">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        id="mobile-menu" 
        className="md:hidden bg-white px-4 py-3 shadow-inner"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-3">
          <Link href="/" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Home</Link>
          <Link href="/rooms" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Rooms</Link>
          <Link href="/amenities" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Amenities</Link>
          <Link href="/gallery" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Gallery</Link>
          <Link href="/about" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">About</Link>
          <Link href="/location" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Location</Link>
          <Link href="/booking" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Book</Link>
          <Link href="/contact" onClick={closeMenu} className="font-body font-medium py-2 hover:text-accent transition-all text-left">Contact</Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
