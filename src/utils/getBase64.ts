import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(src: string) {
  let image_data;

  try {
    const buffer = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`
    ).then(async (res) => Buffer.from(await res.arrayBuffer()));

    image_data = await getPlaiceholder(buffer);
  } catch (error) {
    console.log(error);
  }

  return image_data?.base64;
}
