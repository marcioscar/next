import Head from 'next/head';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Brassaco Embalagens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="px-8 py-12">
          <img className="h-20" src="logo_brass.svg" alt="brass" />
        </div>
        {!session && (
          <div>
            Not signed in <br />
            <button
              className="p-2 bg-indigo-500 text-white inline-block uppercase tracking-wider rounded-lg"
              onClick={(): Promise<void> => signIn('auth0')}
            >
              Sign in
            </button>
          </div>
        )}
        {session && (
          <div>
            Signed in as {session.user.email} <br />
            <button
              className="p-2 bg-indigo-500 text-white inline-block uppercase tracking-wider rounded-lg"
              onClick={(): Promise<void> => signOut()}
            >
              Sign out
            </button>
          </div>
        )}
        {loading && (
          <div className="text-3xl">
            <h1>Carregando</h1>
          </div>
        )}
      </body>

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
