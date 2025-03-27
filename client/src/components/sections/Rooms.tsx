import { motion } from "framer-motion";
import RoomCard from "@/components/ui/room-card";
import { Link } from "wouter";

const roomsData = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Luxurious suite with panoramic views of the Atlantic, king-size bed, and spa-inspired bathroom.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 195,
    tags: ["Sea View", "King Bed", "En-suite"],
    isPremium: true
  },
  {
    id: 2,
    name: "Coastal Deluxe Room",
    description: "Elegant room with partial sea views, queen-size bed, and luxury amenities for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: 165,
    tags: ["Partial Sea View", "Queen Bed", "En-suite"],
    isPremium: false
  },
  {
    id: 3,
    name: "Garden Retreat Room",
    description: "Peaceful room overlooking our tranquil garden, featuring a comfortable queen-size bed and modern amenities.",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 145,
    tags: ["Garden View", "Queen Bed", "En-suite"],
    isPremium: false
  }
];

interface RoomsProps {
  showFullPage?: boolean;
}

const Rooms = ({ showFullPage = false }: RoomsProps) => {
  const handleBookNow = () => {
    if (showFullPage) {
      // Navigate to booking page when implemented
      window.location.href = "/booking";
    } else {
      // Scroll to booking section on home page
      const element = document.getElementById("booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="rooms" className={`py-16 md:py-24 bg-neutral-100 ${showFullPage ? '' : ''}`}>
      <div className="container mx-auto px-4">
        {!showFullPage && (
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Our Luxury Rooms</h2>
            <p className="font-body text-lg max-w-3xl mx-auto">
              Experience comfort and elegance in our carefully curated accommodations, each designed to provide a peaceful seaside retreat.
            </p>
            <div className="mt-6">
              <Link href="/rooms" className="font-body text-primary hover:text-primary/80 underline">
                View all rooms →
              </Link>
            </div>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <RoomCard 
                room={room} 
                onBookNow={handleBookNow} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
