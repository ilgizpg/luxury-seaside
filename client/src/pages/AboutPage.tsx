import DefaultLayout from "@/components/layout/DefaultLayout";
import About from "@/components/sections/About";

const AboutPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">About Us</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Learn about the story behind Number 5, our commitment to excellence,
            and what makes our luxury B&B a special destination in Portstewart.
          </p>
        </div>
      </div>
      <About />
    </DefaultLayout>
  );
};

export default AboutPage;