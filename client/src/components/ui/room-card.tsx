import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RoomProps {
  room: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    tags: string[];
    isPremium: boolean;
  };
  onBookNow: () => void;
}

const RoomCard = ({ room, onBookNow }: RoomProps) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
      <div className="relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
        />
        {room.isPremium && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 text-sm font-medium rounded-sm">
            Premium
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-bold text-primary mb-2">{room.name}</h3>
        <p className="font-body mb-4">{room.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {room.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-secondary bg-opacity-30 text-primary text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-display text-xl font-bold">£{room.price}<span className="text-sm font-normal">/night</span></span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onBookNow}
              className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-sm font-medium transition-all"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
