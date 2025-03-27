import DefaultLayout from "@/components/layout/DefaultLayout";
import Gallery from "@/components/sections/Gallery";

const GalleryPage = () => {
  return (
    <DefaultLayout>
      <div className="pt-16 bg-neutral-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Gallery</h1>
          <p className="font-body text-lg max-w-3xl mx-auto text-center mb-12">
            Take a visual journey through Number 5's elegant spaces, breathtaking views, and luxurious accommodations. 
            These images showcase the beauty and comfort that await you.
          </p>
        </div>
      </div>
      <Gallery />
    </DefaultLayout>
  );
};

export default GalleryPage;