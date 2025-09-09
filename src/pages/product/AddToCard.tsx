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
// import { Icons } from "@/components/Icons";
// import { useState } from "react";
interface isBuyProps {
  isBuy: boolean;
}
export default function AddToCart({ isBuy }: isBuyProps) {
  const quantitySchema = z.object({
    quantity: z.number().min(0),
  });
  //   const [Loading, setLoading] = useState(false);
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
    // setLoading(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3 my-4">
        <div className="">
          <Button type="button">
            <Icons.plus />
          </Button>
        </div>
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="">
              <FormControl className="max-w-[60px]">
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
        <div className="">
          <Button type="button">
            <Icons.minus />
          </Button>
        </div>
      </form>
      <div className="flex item-center space-x-8 mt-4">
        <Button
          type="button"
          size="default"
          className="bg-green-700 hover:bg-green-900"
          disabled={isBuy}
        >
          Buy Now
        </Button>
        <Button type="button" size="default" className="">
          {" "}
          Add to Cart
        </Button>
      </div>
    </Form>
  );
}
