export default function Destinations() {
  const places = [
    "Dubai",
    "Tokyo",
    "Maldives",
  ];

  return (
    <section
      className="
      ml-[92px]
      px-20
      pb-32
    "
    >
      <h2 className="text-6xl mb-16">
        Popular Destinations
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        {places.map((p) => (
          <div
            key={p}
            className="
            relative
            rounded-[40px]
            overflow-hidden
            h-[520px]
            group
          "
          >

            <img
              src={`https://picsum.photos/1000/1600?${p}`}
              className="
              absolute
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-10 left-10">

              <h3 className="text-5xl">
                {p}
              </h3>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}