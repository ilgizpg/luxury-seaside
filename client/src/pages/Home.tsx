import DefaultLayout from "@/components/layout/DefaultLayout";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Testimonials from "@/components/sections/Testimonials";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Welcome />
      <Testimonials />
    </DefaultLayout>
  );
};

export default Home;
