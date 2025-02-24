export default async function Testimonials() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*`
  );
  const data = await response.json();

  type Testimonial = {
    FullName: string;
    Content: string;
  };

  if (data.data.length === 0) return;

  return (
    <section className="mt-20 py-10 px-5 max-w-7xl mx-auto">
      <p className="text-lg font-medium text-gray-800 text-center">Opinie</p>
      <h2 className="mt-1 lg:text-4xl font-semibold md:text-center text-primary">
        Poznaj opinie klientów
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {data.data
          .slice(0, 2) // Display only 2 testimonials
          .map(async (testimonial: Testimonial, index: number) => {
            const { FullName, Content } = testimonial;
            return (
              <div key={index} className="bg-gray-50 p-10 rounded-3xl">
                <p className="leading-7 text-lg">{Content}</p>
                <p className="mt-5 font-medium">{FullName}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
