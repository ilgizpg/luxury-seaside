import { motion } from "framer-motion";

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.getElementById("rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Number 5</h1>
        <p className="font-display text-xl md:text-2xl lg:text-3xl italic mb-8">Luxury Seaside B&B in Portstewart</p>
        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Experience the breathtaking beauty of Northern Ireland's coastline from our exclusive beachfront accommodation.
        </p>
        <motion.button
          onClick={scrollToBooking}
          className="bg-accent hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-sm transition-all inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Stay
        </motion.button>
      </motion.div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <motion.button
          onClick={scrollToRooms}
          className="text-white inline-block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          aria-label="Scroll down"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
