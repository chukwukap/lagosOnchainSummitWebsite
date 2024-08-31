import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
  role: z.string().min(1, {
    message: "Please select your role.",
  }),
});

export function EventTicketForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      telegramId: "",
      twitterHandle: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Register</h2>
          <p className="text-lg text-gray-600">
            Enter your details to join the Lagos Onchain Summit.
          </p>
        </div>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
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
              <FormLabel>Phone Number</FormLabel>
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
                    placeholder="Enter your phone number"
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
              <FormLabel>Country</FormLabel>
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
              <FormLabel>Telegram ID</FormLabel>
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
              <FormLabel>Twitter Handle</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Twitter handle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Register nows
        </Button>
      </form>
    </Form>
  );
}
