import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Import pages
import Home from "@/pages/Home";
import RoomsPage from "@/pages/RoomsPage";
import AmenitiesPage from "@/pages/AmenitiesPage";
import GalleryPage from "@/pages/GalleryPage";
import AboutPage from "@/pages/AboutPage";
import LocationPage from "@/pages/LocationPage";
import BookingPage from "@/pages/BookingPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rooms" component={RoomsPage} />
      <Route path="/amenities" component={AmenitiesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/location" component={LocationPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
