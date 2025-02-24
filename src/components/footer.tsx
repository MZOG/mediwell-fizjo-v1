type FooterProps = {
  companyName: string;
};

export default function Footer({ companyName }: FooterProps) {
  return (
    <footer>
      <div className="my-10 max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center px-5 md:px-10 py-5 bg-gray-50 rounded-2xl md:rounded-full text-[15px]">
          <p>&copy; 2025 · {companyName}</p>
          <p>
            Projekt i realizacja ·{" "}
            <a href="https://mediwell.pl" className="font-medium">
              Mediwell
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
