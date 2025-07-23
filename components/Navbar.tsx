import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut , auth } from '@/auth'; // server actions
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = async () => {
  const session = await auth();
  
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/LaunchHub(1).png" alt="Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/">
                <span className='max-sm:hidden'>Home</span>
              </Link>
              <Link href="/startup/create">
                <span className='max-sm:hidden'>Create</span>
                <BadgePlus className='size-6 sm:hidden' />
              </Link>

              {/* Sign out form as a server action */}
              <form
                action={async () => {
                  'use server';
                  await signOut({redirectTo: "/"});
                }}
                className='flex items-center'
              >
                <button type="submit" className='flex items-center'>
                  <span className='max-sm:hidden'>Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            // Sign in form as a server action
            <form
              action={async () => {
                'use server';
                await signIn('github'); // Pass provider string
              }}
            >
              <button type="submit">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
