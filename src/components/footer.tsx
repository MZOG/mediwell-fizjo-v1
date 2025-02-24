export default function Footer() {
  return (
    <footer>
      <div className="my-10 max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center px-10 py-5 bg-gray-100 rounded-full text-[15px]">
          <p>&copy; 2025 · Nazwa firmy</p>
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
