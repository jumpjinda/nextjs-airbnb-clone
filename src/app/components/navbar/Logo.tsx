"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import airbnbLogo from "../../../../public/images/Airbnb-logo.png";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={airbnbLogo}
    />
  );
};

export default Logo;
