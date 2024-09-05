'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
        <div className="text-white text-6xl font-bold">
          <Image
            src="https://www.pontamed.com.br/img/logo.svg"
            alt="Logo"
            width={512}
            height={512}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full max-w-md p-8 bg-gray-800 text-white flex flex-col justify-center">
        <div className="flex flex-row justify-center items-center mb-4">
          <Image
            src="/assets/images/logo.png"
            alt="Pontamed"
            width={32}
            height={32}
          />
          <span className="ml-2">Pontamed</span>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Acesse sua conta
        </h2>
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            router.push('/');
            e.preventDefault();
          }}
        >
          <div className="rounded-xl justify-items-center space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Esqueci minha senha
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Entrar
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500">Ou se preferir</span>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.582 0-.287-.011-1.244-.016-2.444-3.338.727-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.091-.745.083-.73.083-.73 1.205.084 1.839 1.239 1.839 1.239 1.071 1.836 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.521.118-3.166 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.656 1.645.244 2.863.12 3.166.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.625-5.479 5.922.431.372.815 1.102.815 2.221 0 1.606-.014 2.898-.014 3.293 0 .324.192.699.8.58C20.565 21.796 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
              Entre com GitHub
            </button>
          </div>
        </form>
        <div className="bottom-0 text-center mt-4">
          <span className="text-gray-500">Não conseguiu acessar?</span>
          <Link
            href="mailto:ti@pontamed.com.br"
            className="font-medium text-red-600 hover:text-red-500 ml-1"
          >
            Contate o Administrador
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
