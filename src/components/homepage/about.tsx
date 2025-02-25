import Image from "next/image";
import getBase64 from "@/utils/getBase64";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function About() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage-about?populate=*`
  );
  const data = await response.json();

  if (
    !data?.data.about_image ||
    !data.data.button_text ||
    !data.data.description_text ||
    !data.data.lead_text
  )
    return null;

  const {
    lead_text,
    description_text,
    button_text,
    about_image: { alternativeText, height, width, url },
  } = data?.data;

  return (
    <section className="px-5 max-w-7xl mx-auto my-10 gap-10 lg:gap-0 md:flex md:items-center md:justify-between">
      <Image
        priority
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={alternativeText}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={await getBase64(url)}
        className="mt-5 rounded-3xl"
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:max-w-lg font-semibold lg:font-bold text-primary">
          {lead_text}
        </h1>
        <p className="text-lg text-gray-800 mt-5 lg:mt-8 leading-7 lg:max-w-xl">
          {description_text}
        </p>
        <div className="mt-5 lg:mt-8">
          <Button asChild>
            <Link href="/o-mnie">{button_text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
