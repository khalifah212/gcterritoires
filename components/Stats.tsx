export default function Stats() {
  return (
    <section className="border-t border-gray-100 py-24 fade">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

        <div>
          <p className="text-5xl font-light">120+</p>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
            Projets
          </p>
        </div>

        <div>
          <p className="text-5xl font-light">15 ans</p>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
            Expertise
          </p>
        </div>

        <div>
          <p className="text-5xl font-light">40+</p>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
            Territoires
          </p>
        </div>

      </div>

    </section>
  );
}