import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Link } from "wouter";

// Fixing the Leaflet marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const Location = () => {
  const position = [55.1824, -6.7199]; // Coordinates for Portstewart

  const customIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-96 bg-neutral-200 rounded-lg shadow-lg overflow-hidden">
              <MapContainer 
                center={position} 
                zoom={14} 
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-display text-lg font-bold mb-1">Number 5 B&B</h3>
                      <p className="font-body text-sm">5 Strand Road, Portstewart, BT55 7PG</p>
                      <p className="font-body text-sm">Northern Ireland</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Find Us</h2>
            <p className="font-body text-lg mb-6">
              Perfectly positioned on Portstewart's famous Strand Road, Number 5 offers stunning views of the Atlantic Ocean 
              and easy access to the area's main attractions.
            </p>
            
            <h3 className="font-display text-xl font-semibold text-primary mb-3">Nearby Attractions</h3>
            <ul className="font-body text-lg space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1 mr-3"></i>
                <span>Giant's Causeway (15 minutes by car)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1 mr-3"></i>
                <span>Royal Portrush Golf Club (10 minutes by car)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1 mr-3"></i>
                <span>Portstewart Strand Beach (5 minutes walk)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1 mr-3"></i>
                <span>Bushmills Distillery (20 minutes by car)</span>
              </li>
            </ul>
            
            <h3 className="font-display text-xl font-semibold text-primary mb-3">Directions</h3>
            <p className="font-body text-lg mb-4">
              From Belfast International Airport, take the M2 northbound, then follow the A26 to Coleraine. 
              Continue on the A2 to Portstewart, and you'll find us at 5 Strand Road overlooking the beach.
            </p>
            <button 
              onClick={scrollToContact}
              className="inline-block border-b-2 border-accent text-primary font-medium hover:text-accent transition-all"
            >
              Contact us for detailed directions <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
