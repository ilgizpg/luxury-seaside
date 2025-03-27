import DefaultLayout from "@/components/layout/DefaultLayout";
import Rooms from "@/components/sections/Rooms";

const RoomsPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Rooms</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Discover our luxurious accommodations designed for ultimate comfort and relaxation. Each room offers unique views and amenities to make your stay unforgettable.
          </p>
        </div>
      </div>
      <Rooms showFullPage />
    </DefaultLayout>
  );
};

export default RoomsPage;