import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site/config";

export default function Logo() {
  return (
    <Link href="/" className="block w-fit cursor-pointer transition-opacity hover:opacity-80">
      <Image
        src="/navbar-logo.png"
        width={50}
        height={54}
        alt={site.name}
        className="p-1"
        priority
      />
    </Link>
  );
}
