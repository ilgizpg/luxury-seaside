import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactSchema } from "@shared/schema";
import ContactCard from "@/components/ui/contact-card";

const formSchema = contactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    id: 1,
    icon: "fa-map-marker-alt",
    title: "Address",
    content: ["5 Strand Road", "Portstewart, BT55 7PG", "Northern Ireland"],
    link: null,
  },
  {
    id: 2,
    icon: "fa-phone-alt",
    title: "Phone",
    content: ["+44 (0)28 7012 3456", "Available 8:00 AM - 8:00 PM"],
    link: "tel:+442870123456",
  },
  {
    id: 3,
    icon: "fa-envelope",
    title: "Email",
    content: ["info@number5bnb.com", "We aim to respond within 24 hours"],
    link: "mailto:info@number5bnb.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest('POST', '/api/contact', values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="font-body text-lg max-w-3xl mx-auto">
            We're here to answer any questions you might have about Number 5. Get in touch with us, and we'll be happy to help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ContactCard info={info} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-semibold text-primary mb-6 text-center">Send Us a Message</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="font-body font-medium">Your Name</FormLabel>
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
                name="subject"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="font-body font-medium">Subject</FormLabel>
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
                name="message"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="font-body font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={6}
                        className="px-4 py-2 border border-neutral-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-opacity-90 text-white font-body font-semibold py-3 px-6 rounded-sm transition-all"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-semibold text-primary mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-primary hover:text-accent transition-all text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-primary hover:text-accent transition-all text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-primary hover:text-accent transition-all text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-primary hover:text-accent transition-all text-2xl">
              <i className="fab fa-tripadvisor"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
