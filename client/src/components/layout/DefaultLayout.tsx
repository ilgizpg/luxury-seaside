import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="font-body">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;