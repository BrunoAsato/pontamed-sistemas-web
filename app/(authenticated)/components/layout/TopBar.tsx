import Link from 'next/link';
import Image from 'next/image';

export function TopBarComponent() {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="object-contain mr-2"
        />
      </Link>
      <nav>
        <Link href="/" className="text-white hover:text-gray-400 mx-2">
          Home
        </Link>
      </nav>
    </div>
  );
}
