import { motion } from "framer-motion";
import AmenityCard from "@/components/ui/amenity-card";

const amenitiesData = [
  {
    id: 1,
    icon: "fa-utensils",
    title: "Gourmet Breakfast",
    description: "Start your day with our locally-sourced gourmet breakfast featuring Northern Irish specialties and seasonal ingredients."
  },
  {
    id: 2,
    icon: "fa-wifi",
    title: "High-Speed WiFi",
    description: "Complimentary high-speed WiFi throughout the property keeps you connected during your stay."
  },
  {
    id: 3,
    icon: "fa-car",
    title: "Private Parking",
    description: "Secure, complimentary parking for all our guests, with electric vehicle charging available."
  },
  {
    id: 4,
    icon: "fa-spa",
    title: "Luxury Toiletries",
    description: "Premium toiletries in all bathrooms, featuring locally-made organic products."
  },
  {
    id: 5,
    icon: "fa-cocktail",
    title: "Evening Refreshments",
    description: "Complimentary tea, coffee, and homemade treats available throughout your stay."
  },
  {
    id: 6,
    icon: "fa-concierge-bell",
    title: "Concierge Service",
    description: "Let our knowledgeable team arrange dining reservations or recommend local experiences."
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Luxury Amenities</h2>
          <p className="font-body text-lg max-w-3xl mx-auto">
            Enjoy our carefully selected amenities designed to make your stay with us exceptional.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {amenitiesData.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AmenityCard amenity={amenity} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
