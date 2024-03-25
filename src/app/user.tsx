'use client';

import { useSession } from 'next-auth/react';

export const User = () => {
  //client session
  const { data: session } = useSession();
  return <pre>{JSON.stringify(session)}</pre>
}