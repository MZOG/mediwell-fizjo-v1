import Image from "next/image";
import Link from "next/link";
import getBase64 from "@/utils/getBase64";

const links = [
  { href: "/", label: "Start" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/oferta", label: "Oferta" },
  { href: "/cennik", label: "Cennik" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default async function Header({ logo }) {
  const base64 = await getBase64(logo.formats.thumbnail.url);

  return (
    <header className="px-5 max-w-7xl mx-auto py-5">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            priority
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.formats.thumbnail.url}`}
            alt={logo.formats.thumbnail.alternativeText || "Logo"}
            width={logo.formats.thumbnail.width}
            height={logo.formats.thumbnail.height}
            placeholder="blur"
            blurDataURL={base64}
            className="mt-5 rounded-2xl max-w-[100px]"
          />
        </Link>

        <nav className="flex justify-center gap-14">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
