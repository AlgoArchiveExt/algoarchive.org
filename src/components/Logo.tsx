import Image from 'next/image';
import Link from 'next/link';

import logo from '/public/assets/algo-icon-nb-square.png';

export default function Logo() {
  // After receiving Anthony's API to user's submissions, will implement logic to list their submissions. The formatting and how this will look will have to be discussed
  return (
    <Link className="flex" color="foreground" href="/">
      <Image src={logo.src} alt="Logo" width="24" height="24" />
      <p className="font-bold">lgoArchive</p>
    </Link>
  );
}
