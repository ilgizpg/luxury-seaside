import DefaultLayout from "@/components/layout/DefaultLayout";
import Booking from "@/components/sections/Booking";

const BookingPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Book Your Stay</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Reserve your perfect getaway at Number 5. Complete the booking form below 
            to secure your stay at our luxury B&B in Portstewart.
          </p>
        </div>
      </div>
      <Booking />
    </DefaultLayout>
  );
};

export default BookingPage;