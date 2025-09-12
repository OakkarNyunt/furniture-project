import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
// import { Loader2Icon } from "lucide-react";
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Icons } from "@/components/Icons";

export default function ReuseAddToCart() {
  const quantitySchema = z.object({
    quantity: z.number().min(0),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof quantitySchema>) {
    console.log(values);
    toast.success("Product added successfully.");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex justify-between my-4 px-2">
          <div className="flex w-full gap-2">
            <Button type="button">
              <Icons.plus />
            </Button>
            <div className="">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl className="max-w-[50px]">
                      <Input
                        inputMode="numeric"
                        type="number"
                        className=""
                        min={0}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="button">
              <Icons.minus />
            </Button>
          </div>
          <div className="">
            <Button type="button" size="default" className="">
              <Icons.trash className="size-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
