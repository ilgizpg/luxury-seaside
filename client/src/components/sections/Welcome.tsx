import { motion } from "framer-motion";

const Welcome = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Luxury B&B interior" 
              className="rounded-md shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Welcome to Number 5</h2>
            <p className="font-body text-lg mb-6">
              Nestled on the stunning coastline of Portstewart, Number 5 offers a luxurious retreat with breathtaking views of the Atlantic Ocean. 
              Our boutique B&B combines elegant comfort with the warm hospitality Northern Ireland is known for.
            </p>
            <p className="font-body text-lg mb-8">
              Each of our thoughtfully designed rooms provides a peaceful haven after a day exploring the spectacular Causeway Coast. 
              Whether you're seeking adventure or relaxation, Number 5 is your perfect base to experience all that this beautiful region has to offer.
            </p>
            <button 
              onClick={scrollToAbout}
              className="inline-block border-b-2 border-accent text-primary font-medium hover:text-accent transition-all"
            >
              Discover our story <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
