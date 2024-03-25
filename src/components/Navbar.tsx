'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center fixed w-full top-0 text-white p-4 bg-slate-300 h-20">
      <div className="flex justify-center items-center gap-5">
        <Link 
          className={buttonVariants({ 'variant': 'link' })}
          href='/'
        >
          <p>Philanthropia</p>
        </Link>
        <Link 
          className={buttonVariants({ 'variant': 'link' })}
          href='/nonprofits'
        >
          <p>nonprofits</p>
        </Link>
        <Link 
          className={buttonVariants({ 'variant': 'link' })}
          href='/dashboard'
        >
          <p>dashboard</p>
        </Link>
      </div>
      {session 
        ? <Button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Button>
        : <Link className={buttonVariants()} href='/sign-up'>Get started</Link>
      }
    </div>
  );
}