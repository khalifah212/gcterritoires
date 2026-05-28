export default function OffersPage() {
  return (
    <section className="p-20">

      <h1 className="text-5xl font-light">
        Exclusive Offers
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-16">

        <div className="bg-[#223847] text-white rounded-[40px] p-12">
          <h2 className="text-4xl font-light">
            Dubai Escape
          </h2>

          <p className="mt-6 text-white/70">
            From €499 round trip
          </p>
        </div>

        <div className="bg-[#e9dfcf] rounded-[40px] p-12">
          <h2 className="text-4xl font-light">
            Tokyo Adventure
          </h2>

          <p className="mt-6 text-black/70">
            Premium deals available
          </p>
        </div>

      </div>

    </section>
  );
}