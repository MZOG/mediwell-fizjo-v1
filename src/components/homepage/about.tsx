import Image from "next/image";
import getBase64 from "@/utils/getBase64";

export default async function About() {
  const response = await fetch(
    "http://localhost:1337/api/homepage-about?populate=*"
  );
  const data = await response.json();
  const {
    lead_text,
    description_text,
    button_text,
    about_image: { alternativeText, height, width, url },
  } = data.data;
  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={alternativeText}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={await getBase64(url)}
      />
      <p>{lead_text}</p>
      <p>{description_text}</p>
      <p>{button_text}</p>
    </>
  );
}
