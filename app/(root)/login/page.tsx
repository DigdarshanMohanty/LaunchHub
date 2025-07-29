'use client';

import Link from 'next/link';
import LoginButtons from '@/components/LoginButtons';
import { ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <main className="min-h-screen flex bg-[#0e0e10] text-white font-sans overflow-hidden relative">
      {/* Left Side (Banner/Text Section) */}
      <div className="hidden sm:flex w-full lg:w-1/2 flex-col items-start justify-center bg-[#0b0b0c] px-8 xl:px-16 relative text-white-100">
        
        {/* Top Nav */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <Link href="/" className="text-3xl font-extrabold">
            launch<span className="text-indigo-500">hub</span>
          </Link>
          <Link href="/" className="flex items-center text-sm text-white/80 hover:text-white transition">
            Back to Website <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Hero Text */}
        <div className="z-10 space-y-4 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight bg-clip-text">
            <span className="text-indigo-500">Build.</span> Launch. Scale.
          </h1>
          <p className="text-base xl:text-lg">
            Fuel your startup journey.
          </p>
        </div>

        {/* Blur Background */}
        <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-[140px] top-1/2 left-[-10%] z-0" />
      </div>

      {/* Right Side (Login Form Section) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-12 relative 
        bg-white backdrop-blur-md border-l border-white/20 shadow-inner text-black">
        
        <div className="w-full max-w-md z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">Welcome to LaunchHub</h2>
          <p className="text-sm text-gray-600 mb-6">
            Use your social accounts to log in
          </p>

          <LoginButtons type="login" />
        </div>

        {/* Privacy Policy */}
        <div className="w-full text-xs text-center mt-12 text-gray-500 z-10">
          By logging in, you agree to our{' '}
          <Link href="/terms" className="text-indigo-500 hover:underline">Terms of Service</Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>.
        </div>

        {/* Pink Blur */}
        <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-[120px] z-0" />
      </div>
    </main>
  );
};

export default LoginPage;
