import Image from 'next/image';
import Link from 'next/link';

import logo from '/public/assets/AlgoArchive.png';

export default function Logo() {
  // After receiving Anthony's API to user's submissions, will implement logic to list their submissions. The formatting and how this will look will have to be discussed
  return (
    <Link color="foreground" href="/" className="flex items-center">
      <Image src={logo.src} alt="Logo" width="18" height="18" />
      <p className="font-bold text-white">lgoArchive</p>
    </Link>
  );
}
