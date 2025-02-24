import Image from "next/image";
import getBase64 from "@/utils/getBase64";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function Offer({
  numberOfOffers = 10,
}: {
  numberOfOffers?: number;
}) {
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
    <section className="my-20 bg-primary py-20">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-lg font-medium text-white text-center">Oferta</p>
        <h2 className="mt-1 lg:text-4xl font-bold md:text-center text-white">
          W czym mogę Ci pomóc?
        </h2>
        <div className="grid grid-cols-3 mt-16 gap-5">
          {data.data
            .slice(0, numberOfOffers)
            .map(async (offer: Offer, index: number) => {
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
                <div key={index} className="bg-white p-5 rounded-3xl space-y-3">
                  <div>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                      alt={alternativeText}
                      width={width}
                      height={height}
                      placeholder="blur"
                      blurDataURL={await getBase64(url)}
                      className="rounded-2xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{Name}</h3>
                  <p className="text-lg text-gray-800">{Description}</p>
                </div>
              );
            })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="secondary"
            className="text-primary font-medium"
          >
            <Link href="/oferta">Zobacz więcej</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
