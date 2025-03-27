interface AmenityProps {
  amenity: {
    id: number;
    icon: string;
    title: string;
    description: string;
  };
}

const AmenityCard = ({ amenity }: AmenityProps) => {
  return (
    <div className="flex space-x-4">
      <div className="text-primary text-2xl">
        <i className={`fas ${amenity.icon}`}></i>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-primary mb-3">{amenity.title}</h3>
        <p className="font-body text-neutral-800">{amenity.description}</p>
      </div>
    </div>
  );
};

export default AmenityCard;
