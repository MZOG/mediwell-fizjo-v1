import Image from "next/image";
import getBase64 from "@/utils/getBase64";

export default async function Hero() {
  const response = await fetch("http://localhost:1337/api/homepage?populate=*");
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
    <div>
      <p>{hero_text}</p>
      <p>{lead_text}</p>
      <p>{button_text}</p>
      <Image
        priority
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={alternativeText}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
}
