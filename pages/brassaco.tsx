import Head from 'next/head';
import { NextPage } from 'next';

const BrassacoPage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Brassaco Embalagens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-gray-500">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
              <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b bold">
                  <a href="/" className="text-blue-700 hover:text-red-600">
                    Brassaco Embalagens
                  </a>
                </h1>
                <div className="px-4 cursor-pointer md:hidden" id="burger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
              <ul className="text-sm mt-6 hidden md:block" id="menu">
                <li className="text-gray-700 font-bold py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-red-500"
                  >
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>Sobre</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>Contato</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Fim do nav */}
          <main className="px-16 py-6 bg-gray-100 md:col-span-2">
            <div className="flex justify-center md:justify-end">
              <a
                href="#"
                className="text-blue-700 btn border-gray-400 md:border-2 hover:bg-red-600 hover:text-white"
              >
                Login
              </a>
              <a
                href="#"
                className="ml-2 text-blue-700 btn border-gray-400 md:border-2 hover:bg-red-600 hover:text-white"
              >
                Inscreva-se
              </a>
            </div>
            <header>
              <h2 className="text-gray-700 text-5xl font-semibold">Produtos</h2>
              <h3 className="text-2xl font-semibold">Pratos</h3>
            </header>
            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Últimos produtos
              </h4>
              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {/* cartoes vao aqui */}
                <div className="card hover:shadow-lg">
                  <img
                    src="img/pano.png"
                    alt="bolo"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Panos Geral</span>
                    <span className="block text-gray-500 text-sm">
                      Produtos para sua casa
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      className="w-5 inline-block mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Festas</span>
                  </div>
                </div>
                <div className="card hover:shadow-lg">
                  <img
                    src="img/saco.png"
                    alt="bolo"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Sacos Freezer/Microondas</span>
                    <span className="block text-gray-500 text-sm">
                      Produtos para sua casa
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      className="w-5 inline-block mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Casa</span>
                  </div>
                </div>
                <div className="card hover:shadow-lg">
                  <img
                    src="img/2.png"
                    alt="bolo"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Formas para pão</span>
                    <span className="block text-gray-500 text-sm">
                      Produtos para Delivery
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      className="w-5 inline-block mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Festas</span>
                  </div>
                </div>
              </div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Produtos Populares
              </h4>
              <div className="mt-8">{/* cartoes vao aqui */}</div>
              <div className="flex justify-center">
                <div className="bg-yellow-400 btn hover:shadow-inner">
                  Mais produtos
                </div>
              </div>
            </div>
          </main>
        </div>
        <script src="public/index.js"></script>
      </body>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-1">
        <a
          className="flex items-center justify-center"
          href="https://www.brassaco.com.br"
          target="_self"
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

export default BrassacoPage;
