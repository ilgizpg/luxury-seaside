import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    id: 1,
    content: "An absolutely stunning B&B with breathtaking views. The Ocean View Suite was impeccably clean and beautifully decorated. Breakfast was delicious with plenty of local options. The hosts went above and beyond to make our stay special.",
    name: "James & Sarah",
    location: "Dublin, Ireland",
    initials: "JS"
  },
  {
    id: 2,
    content: "The perfect base for exploring the Causeway Coast. Number 5's location is unbeatable, and the attention to detail throughout the property is impressive. The hosts provided excellent recommendations for local restaurants and attractions.",
    name: "Emma M.",
    location: "London, UK",
    initials: "EM"
  },
  {
    id: 3,
    content: "We've stayed at many luxury accommodations around the world, and Number 5 ranks among the best. The combination of stunning location, elegant rooms, and genuine hospitality made our anniversary trip unforgettable.",
    name: "Robert & Kate",
    location: "Boston, USA",
    initials: "RK"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Guest Experiences</h2>
          <p className="font-body text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our guests have to say about their stay at Number 5.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
