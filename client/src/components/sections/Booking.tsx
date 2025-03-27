import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { bookingSchema } from "@shared/schema";

const formSchema = bookingSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  checkIn: z.string().refine(val => new Date(val) >= new Date(new Date().setHours(0, 0, 0, 0)), {
    message: "Check-in date must be today or later",
  }),
  checkOut: z.string().refine(val => new Date(val) > new Date(), {
    message: "Check-out date must be after today",
  }),
  specialRequests: z.string().optional(),
});

const Booking = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      roomType: "",
      guests: "2",
      specialRequests: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest('POST', '/api/bookings', values);
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted",
        description: "Thank you for your booking request. We will get back to you within 24 hours to confirm your reservation.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Submitting Booking",
        description: error.message || "There was an error submitting your booking request. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Book Your Stay</h2>
            <p className="font-body text-lg mb-6">
              Ready to experience the luxury and beauty of Number 5? Complete our booking inquiry form, 
              and we'll get back to you within 24 hours to confirm availability and finalize your reservation.
            </p>
            <p className="font-body text-lg mb-6">
              For immediate assistance or special requests, please don't hesitate to call us directly at{" "}
              <a href="tel:+442870123456" className="text-accent hover:underline">+44 (0)28 7012 3456</a>.
            </p>
            
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg mb-8">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Booking Information</h3>
              <ul className="font-body space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-3"></i>
                  <span>Check-in: 3:00 PM - 8:00 PM (later check-in by arrangement)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-3"></i>
                  <span>Check-out: By 11:00 AM</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-3"></i>
                  <span>Minimum stay: 2 nights (3 nights during peak season)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-3"></i>
                  <span>Deposit: 30% required to secure your booking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-3"></i>
                  <span>Cancellation: Full refund up to 7 days before arrival</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-neutral-100 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="font-body font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="font-body font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="checkIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body font-medium">Check-in Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="checkOut"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body font-medium">Check-out Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="roomType"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="font-body font-medium">Room Preference</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <SelectValue placeholder="Please select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ocean-view">Ocean View Suite</SelectItem>
                          <SelectItem value="coastal-deluxe">Coastal Deluxe Room</SelectItem>
                          <SelectItem value="garden-retreat">Garden Retreat Room</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="font-body font-medium">Number of Guests</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="font-body font-medium">Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-opacity-90 text-white font-body font-semibold py-3 px-6 rounded-sm transition-all"
                  disabled={isPending}
                >
                  {isPending ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
