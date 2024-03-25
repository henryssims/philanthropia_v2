import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from 'bcrypt';
import { z } from 'zod';

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(30, 'Username is too long'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must have at least 6 characters'),
  })

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } =  userSchema.parse(body);

    const existingUserEmail = await db.user.findUnique({
      where: { email: email }
    });
    if (existingUserEmail) {
      return NextResponse.json({ user: null, message: "This email is already in use"}, { status: 409 });
    }

    const existingUserName = await db.user.findUnique({
      where: { username: username }
    });
    if (existingUserName) {
      return NextResponse.json({ user: null, message: "This username already exists"}, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}