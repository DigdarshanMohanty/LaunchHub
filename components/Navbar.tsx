"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";

const GetStartedButton = dynamic(() => import("./navbarGetStarted"), {
  ssr: false,
  loading: () => <button className="text-sm text-indigo-600"></button>,
});

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-md border-b border-gray-200">
      <div className="max-w-full px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-black">
          launch<span className="text-indigo-500">hub</span>
        </Link>

        <div className="flex items-center space-x-6">
          {session?.user ? (
            <>
              <Link
                href="/"
                className="text-sm text-gray-700 hover:text-indigo-500"
              >
                Home
              </Link>

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="text-sm text-gray-700 hover:text-indigo-500"
                >
                  Startups ▾
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md z-40">
                    <Link
                      href="/startup/view"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-500"
                    >
                      View All
                    </Link>
                    <Link
                      href="/startup/create"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-500"
                    >
                      Submit Startup
                    </Link>
                  </div>
                )}
              </div>

              {/* Logout */}
              <button
                onClick={() => signOut()}
                className="text-sm text-red-500"
              >
                Logout
              </button>

              {/* Avatar and Name */}
              <div className="flex items-center gap-2 max-w-[140px] truncate">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-800 truncate">
                  {session.user.name}
                </span>
              </div>
            </>
          ) : (
            <GetStartedButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
