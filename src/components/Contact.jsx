import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import Aos from "aos";
import "aos/dist/aos.css";
import contactImg from "../images/contact-img.png";
import api from "../services/appwrite"

("use client");

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileDiffIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be more than 3 characters!",
  }),
  email: z.string().min(8, {
    message: "Email must be more than 8 characters!",
  }),
  feedback: z.string().min(10, {
    message: "Feedback must be at least of 10 characters!",
  }),
});

function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const feedbackResponse = await api.feedback(values.name, values.email, values.feedback);
      if(feedbackResponse) {
        toast.success("Thank you for Feedback!");
        console.log("Form values", values);
      }
    } catch (error) {
      console.log("Error in contact form", error)
        toast.error("Error!");
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <h3
        className="flex justify-center items-center text-center mx-auto md:my-12 text-3xl md:text-5xl gap-10"
        data-aos="fade-up"
      >
        Contact Me
      </h3>

      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto mb-14">
        <div className="flex items-center justify-center " data-aos="fade-right">
          <img src={contactImg} alt="contact-img" className="" />
        </div>

        <div className="mx-10" data-aos="fade-left">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Name</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} className="" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email ID</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Enter your Email" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Feedback</FormLabel> */}
                    <FormControl>
                      <Textarea placeholder="Enter your feedback" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">{loading ? "Submitting..." : "Submit" }</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
