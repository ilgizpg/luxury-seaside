import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="font-display text-2xl font-bold">Number 5</h2>
            <p className="font-body text-sm">Luxury Seaside B&B in Portstewart</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/" className="font-body text-sm hover:text-secondary transition-all">Home</Link>
            <Link href="/rooms" className="font-body text-sm hover:text-secondary transition-all">Rooms</Link>
            <Link href="/amenities" className="font-body text-sm hover:text-secondary transition-all">Amenities</Link>
            <Link href="/gallery" className="font-body text-sm hover:text-secondary transition-all">Gallery</Link>
            <Link href="/about" className="font-body text-sm hover:text-secondary transition-all">About</Link>
            <Link href="/location" className="font-body text-sm hover:text-secondary transition-all">Location</Link>
            <Link href="/booking" className="font-body text-sm hover:text-secondary transition-all">Book</Link>
            <Link href="/contact" className="font-body text-sm hover:text-secondary transition-all">Contact</Link>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Number 5 Luxury B&B. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="font-body text-xs hover:text-secondary transition-all">Privacy Policy</Link>
            <Link href="#" className="font-body text-xs hover:text-secondary transition-all">Terms of Service</Link>
            <Link href="#" className="font-body text-xs hover:text-secondary transition-all">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
