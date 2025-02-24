import Image from "next/image";
import getBase64 from "@/utils/getBase64";

export default async function Offer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/offers?populate=*`
  );
  const data = await response.json();

  type Offer = {
    Name: string;
    Description: string;
    Image: {
      alternativeText: string;
      url: string;
      formats: {
        small: {
          width: number;
          height: number;
          url: string;
        };
      };
    };
  };

  return (
    <>
      <div className="mt-20">
        <p>Oferta</p>
        <h2>W czym mogę Ci pomóc?</h2>
        <div className="grid grid-cols-3">
          {data.data.map(async (offer: Offer, index: number) => {
            const {
              Name,
              Description,
              Image: {
                alternativeText,
                formats: {
                  small: { height, width, url },
                },
              },
            } = offer;
            return (
              <div key={index}>
                <div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                    alt={alternativeText}
                    width={width}
                    height={height}
                    placeholder="blur"
                    blurDataURL={await getBase64(url)}
                  />
                </div>
                <h3>{Name}</h3>
                <p>{Description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
