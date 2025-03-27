import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "B&B Exterior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Luxury Bedroom"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Bathroom"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1633505930026-9f67e833d683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    alt: "Breakfast Spread"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Portstewart Strand"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    alt: "Sitting Area"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Sunset View"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Coastline"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Photo Gallery</h2>
          <p className="font-body text-lg max-w-3xl mx-auto">
            Explore the beauty of Number 5 through our gallery showcasing our luxury accommodation and stunning surroundings.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-md cursor-pointer gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full object-contain max-h-[80vh]"
              />
            )}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white bg-opacity-80 text-primary p-2 rounded-full"
              aria-label="Close dialog"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
