import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "../Icons";
import { useState } from "react";

export default function NewsLetterForm() {
  const emailSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
  });
  const [Loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values);
    setLoading(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-4  w-full p-4 border-4 shadow rounded-lg">
              <FormLabel className="">Subscribe to our Newsletters!</FormLabel>
              <FormControl className="">
                <Input
                  placeholder="example@gmail.com"
                  className="pr-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />

              <Button
                type="submit"
                variant="secondary"
                size="icon"
                className="size-7 text-black absolute top-[60px] right-[25px] z-20"
              >
                {Loading ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <Icons.PaperPlane />
                )}
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
