import DefaultLayout from "@/components/layout/DefaultLayout";
import Amenities from "@/components/sections/Amenities";

const AmenitiesPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Amenities</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Discover the exceptional amenities and services that make your stay at Number 5 truly unforgettable. 
            We've thought of every detail to ensure your comfort and relaxation.
          </p>
        </div>
      </div>
      <Amenities />
    </DefaultLayout>
  );
};

export default AmenitiesPage;