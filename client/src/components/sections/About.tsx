import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="font-body text-lg mb-4">
              Number 5 began as a passion project in 2010 when the Wilson family acquired this historic seaside property 
              with a vision to create Northern Ireland's most exclusive coastal retreat.
            </p>
            <p className="font-body text-lg mb-4">
              Lovingly restored over two years, we've preserved the building's original charm while introducing modern luxury throughout. 
              Each room has been thoughtfully designed to highlight the breathtaking coastal views and provide ultimate comfort.
            </p>
            <p className="font-body text-lg mb-4">
              Our dedication to exceptional hospitality has earned us numerous accolades, including "Best Luxury B&B in Northern Ireland" 
              for three consecutive years. We're committed to providing a personalized experience that showcases the best of Northern Irish hospitality.
            </p>
            <p className="font-body text-lg italic mt-6">"We don't just offer a place to stay; we create memories that last a lifetime."</p>
            <p className="font-display text-lg font-semibold mt-2">— The Wilson Family</p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559782035-418f31469aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="B&B History" 
              className="rounded-md shadow-lg w-full h-auto"
            />
            <img 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Owner Portrait" 
              className="rounded-md shadow-lg w-full h-auto mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
