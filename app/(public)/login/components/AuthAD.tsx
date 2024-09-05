'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

type sessionProps = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('azure-ad')}>Login</button>
      ) : (
        <>
          <p>Bem-vindo, {session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
