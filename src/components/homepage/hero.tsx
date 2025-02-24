import Image from "next/image";
import getBase64 from "@/utils/getBase64";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Hero() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=*`
  );
  const data = await response.json();

  const {
    hero_text,
    lead_text,
    button_text,
    hero_image: { alternativeText, height, width, url },
  } = data.data;

  // get placeholder for image
  const base64 = await getBase64(url);

  return (
    <section className="px-5 max-w-7xl mx-auto my-10 gap-10 lg:gap-0 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:max-w-lg font-semibold lg:font-bold text-primary">
          {hero_text}
        </h1>
        <p className="text-lg text-gray-800 mt-5 lg:mt-8 leading-7 lg:max-w-xl">
          {lead_text}
        </p>
        <div className="mt-5 lg:mt-8">
          <Button asChild>
            <Link href="/kontakt">{button_text}</Link>
          </Button>
        </div>
      </div>
      <Image
        priority
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={alternativeText}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={base64}
        className="mt-5 rounded-2xl"
      />
    </section>
  );
}
