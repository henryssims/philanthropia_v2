import React from 'react';
import { Button } from './ui/button';

export default function GoogleSignIn({ children }: { children: React.ReactNode }) {
  function loginWithGoogle() {
    console.log('google login');
  }

  return (
    <Button onClick={loginWithGoogle} className='w-full'>{children}</Button>
  );
}
