import DefaultLayout from "@/components/layout/DefaultLayout";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Have questions or special requests? We're here to help. Reach out to our team 
            through the contact form below or using our contact information.
          </p>
        </div>
      </div>
      <Contact />
    </DefaultLayout>
  );
};

export default ContactPage;