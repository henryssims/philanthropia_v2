'use client';

import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';
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
import Link from 'next/link';
import GoogleSignIn from '../GoogleSignIn';
import { signIn } from 'next-auth/react';
import { useFormState, useFormStatus } from 'react-dom';

const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must have at least 6 characters'),
});

export default function SignInForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    });

    if (signInData?.error) {
      console.log(signInData.error);
      setErrorMessage("Invalid credentials");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="email@gmail.com"
                    {...field} 
                  />
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
                    placeholder="Enter your password" 
                    type='password'
                    {...field} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SignInButton />
        <p className="text-red-600 mt-3">{errorMessage}</p>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleSignIn>Sign in with Google</GoogleSignIn>
      <p className='text-center text-sm text-gray-600 mt-2'>
        Don&apos;t have an account?
        <Button asChild variant="link" className='text-blue-500 hover:underline'>
          <Link href='/sign-up'>Sign up</Link>
        </Button>
      </p>
    </Form>
  );
}

function SignInButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className='w-full mt-6' aria-disabled={pending} >
      Sign in
    </Button>
  );
}