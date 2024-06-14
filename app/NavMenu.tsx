import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "@/component/button";

export default function NavMenu() {
  return (
    <nav className="flex bg-blue-700 h-16 justify-between items-center">
      <Link href="/">
        <Image src="/next.svg" width={216} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className="flex space-x-4 mr-4 ">
        <li className="h-16 flex items-center py-1">
          <Link className="text-black" href="/about">
            About
          </Link>
        </li>
        <li className="h-16 flex items-center py-1 ">
          <Link className="text-black" href="/blog">
            Blog
          </Link>
        </li>
        <li className="h-16 flex items-center py-1 ">
          <Link className="text-black" href="/users">
            Users
          </Link>
        </li>
        <li className="h-16 flex items-center py-1">
          <SignInButton />
        </li>
        <li className="h-16 flex items-center py-1">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
