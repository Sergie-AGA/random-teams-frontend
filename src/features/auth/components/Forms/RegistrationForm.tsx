"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { TriangleLeftIcon, FilePlusIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("Invalid e-mail format."),
  password: z.string().min(1, { message: "This field has to be filled." }),
});

interface LoginFormProps {
  returnAction: () => void;
}

export function RegistrationForm({ returnAction }: LoginFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="random@teams.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                <Link className="hover:underline" href="/forgot-password">
                  Forgotten Password?
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full font-bold" type="submit">
          LOG IN
        </Button>

        <Separator />
        <p className="flex items-center hover:underline cursor-pointer">
          <FilePlusIcon className="mr-2" />
          <Link href="register">Create new account</Link>
        </p>
        <p
          className="cursor-pointer hover:underline flex items-center"
          onClick={returnAction}
        >
          <TriangleLeftIcon className="mr-2" />
          Back to options
        </p>
      </form>
    </Form>
  );
}
