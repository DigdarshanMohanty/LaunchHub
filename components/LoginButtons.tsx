'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

type LoginButtonsProps = {
  type?: 'login' | 'signup';
};

const LoginButtons = ({ type = 'login' }: LoginButtonsProps) => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleLogin = async (provider: string) => {
    setLoadingProvider(provider);
    await signIn(provider, { callbackUrl: '/' });
  };

  const label = (provider: string) => {
    const action = type === 'signup' ? 'Sign up with' : 'Continue with';
    return `${action} ${provider}`;
  };

  return (
    <div className="space-y-3">
      {/* Google Button */}
      <button
        onClick={() => handleLogin('google')}
        disabled={loadingProvider !== null}
        className="w-full flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-3">
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          {loadingProvider === 'google' ? (
            <span className="flex items-center gap-2 text-gray-700">
              <span className="loader w-4 h-4 border-2 border-t-transparent border-gray-500 rounded-full animate-spin" />
              {type === 'signup' ? 'Signing up...' : 'Logging in...'}
            </span>
          ) : (
            <span className="font-medium text-gray-700">{label('Google')}</span>
          )}
        </div>
      </button>

      {/* GitHub Button */}
      <button
        onClick={() => handleLogin('github')}
        disabled={loadingProvider !== null}
        className="w-full flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-3">
          <Image src="/github.svg" alt="GitHub" width={20} height={20} />
          {loadingProvider === 'github' ? (
            <span className="flex items-center gap-2 text-gray-700">
              <span className="loader w-4 h-4 border-2 border-t-transparent border-gray-500 rounded-full animate-spin" />
              {type === 'signup' ? 'Signing up...' : 'Logging in...'}
            </span>
          ) : (
            <span className="font-medium text-gray-700">{label('GitHub')}</span>
          )}
        </div>
      </button>
      <button
        onClick={() => handleLogin('linkedin')}
        disabled={loadingProvider !== null}
        className="w-full flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center">
            <FaLinkedin className="text-[#0A66C2] w-5 h-5 leading-none align-middle" />
          </div>
          {loadingProvider === 'linkedin' ? (
            <span className="flex items-center gap-2 text-gray-700">
              <span className="loader w-4 h-4 border-2 border-t-transparent border-gray-500 rounded-full animate-spin" />
              {type === 'signup' ? 'Signing up...' : 'Logging in...'}
            </span>
          ) : (
            <span className="font-medium text-gray-700">{label('LinkedIn')}</span>
          )}
        </div>
      </button>
    </div>
  );
};

export default LoginButtons;
