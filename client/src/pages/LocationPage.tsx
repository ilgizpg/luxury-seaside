import DefaultLayout from "@/components/layout/DefaultLayout";
import Location from "@/components/sections/Location";

const LocationPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Location</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Discover our prime location in beautiful Portstewart, Northern Ireland.
            Explore nearby attractions and plan your perfect stay with us.
          </p>
        </div>
      </div>
      <Location />
    </DefaultLayout>
  );
};

export default LocationPage;