import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { z } from 'zod';
 
const formSchema = z.object({
  amount: z.number().nonnegative({ message: "Must be greater than 0"})
})

export default function NonprofitCard({ 
  name, image, link, description, cause
} : {
  name: string,
  image: string,
  link: string,
  description: string,
  cause: string
}) {

  return (
    <Card className="w-300 h-400">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Badge>{cause.replace("-", " ")}</Badge>
      </CardHeader>
      <CardContent>
        <Image 
          src={image}
          alt="Image representing the nonprofit"
          width={200}
          height={200}
        />
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>Donate</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Donate to {name}</DialogTitle>
              <DialogDescription>
                Thank you for choosing to donate! How much would you like to give to {name}?
              </DialogDescription>
            </DialogHeader>
            <form action="">
              
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
