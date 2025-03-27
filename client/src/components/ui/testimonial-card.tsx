interface TestimonialProps {
  testimonial: {
    id: number;
    content: string;
    name: string;
    location: string;
    initials: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm h-full">
      <div className="text-accent mb-4">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="font-body italic mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
          <span className="font-display font-bold text-primary">{testimonial.initials}</span>
        </div>
        <div>
          <h4 className="font-display font-bold">{testimonial.name}</h4>
          <p className="font-body text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
