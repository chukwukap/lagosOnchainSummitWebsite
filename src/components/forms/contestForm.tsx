"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().regex(/^\+?[0-9]{10,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().min(1, {
    message: "Please select your country.",
  }),
  telegramId: z.string().optional(),
  twitterHandle: z.string().optional(),
  contestCategory: z.string().min(1, {
    message: "Please select your preferred contest category.",
  }),
});

export function ContestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      telegramId: "",
      twitterHandle: "",
      contestCategory: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
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
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex">
                  <Select
                    onValueChange={(value) =>
                      field.onChange(`+${value}${field.value.slice(4)}`)
                    }
                  >
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="+234" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="234">+234</SelectItem>
                      {/* Add more country codes as needed */}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Phone Number"
                    {...field}
                    className="flex-1 ml-2"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  {/* Add more countries as needed */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telegramId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your Telegram ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="twitterHandle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your Twitter handle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contestCategory"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred contest category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="chess">Chess Tournament</SelectItem>
                  <SelectItem value="nft">NFT Minting Challenge</SelectItem>
                  <SelectItem value="trading">
                    Crypto Trading Simulation
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Join now
        </Button>
      </form>
    </Form>
  );
}
