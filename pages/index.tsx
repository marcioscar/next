import Head from 'next/head';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Brassaco Embalagens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && (
        <div className="text-3xl">
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn('auth0')}>
            Sign in
          </button>
        </div>
      )}
      {session && (
        <div className="text-3xl">
          Signed in as {session.user.email} <br />
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      )}
      {loading && (
        <div className="text-3xl">
          <h1>Carregando</h1>
        </div>
      )}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo{' '}
          <img
            src="/logo_brass.svg"
            alt="logo_brass Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;
