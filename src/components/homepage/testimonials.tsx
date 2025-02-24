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
    <>
      <div className="mt-20">
        <p>Opinie</p>
        <h2>Poznaj opinie klientów</h2>
        <div className="grid grid-cols-2">
          {data.data
            .slice(0, 2) // Display only 2 testimonials
            .map(async (testimonial: Testimonial, index: number) => {
              const { FullName, Content } = testimonial;
              return (
                <div key={index}>
                  <p>{Content}</p>
                  <p>{FullName}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
