import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default async function MainCTA() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global-config`
  );
  const { data: data } = await response.json();

  const formatPhone = (phone: string) => {
    return `+48 ${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)}`;
  };

  return (
    <div className="mt-10 max-w-7xl mx-auto px-5">
      <div className="flex gap-10 items-center px-10 py-5 bg-primary rounded-full">
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-full p-4 text-primary">
            <Phone />
          </div>
          <a
            href={`tel:+48${data.phone}`}
            className="text-white text-lg font-medium"
          >
            {formatPhone(data.phone)}
          </a>
        </div>

        <div className="flex gap-4 items-center text-primary">
          <div className="bg-white rounded-full p-4">
            <MapPin />
          </div>
          <p className="text-white text-lg font-medium">{data.address}</p>
        </div>

        <div className="ml-auto">
          <Link
            href="/kontakt"
            className="bg-white px-7 py-4 rounded-full font-medium text-primary text-lg"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
}
