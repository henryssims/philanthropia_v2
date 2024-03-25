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
import Link from 'next/link';


 
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
    <Card >
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-center">{name}</CardTitle>
        <Badge className="flex justify-center w-1/2">{cause.replace("-", " ")}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col align-center">
        <Link href={link || ""}>
          <Image 
            src={image}
            alt="Image"
            layout="responsive"
            width={1/1}
            height={1/1}
          />
        </Link>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger className="m-auto"><Button>Donate</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Donate to {name}</DialogTitle>
              <DialogDescription>
                Thank you for choosing to donate! How much would you like to give to {name}?
              </DialogDescription>
            </DialogHeader>
            <form action="">
              <input ></input>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
