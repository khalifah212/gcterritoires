export default function Stats() {
  const stats = [
    ["120+", "Countries"],
    ["5M+", "Travelers"],
    ["99%", "Satisfaction"],
  ];

  return (
    <section
      className="
      ml-[92px]
      px-20
      py-20
    "
    >
      <div
        className="
        rounded-[40px]
        bg-gradient-to-r
        from-[#10283A]
        to-[#09131E]
        p-20
      "
      >
        <div className="grid lg:grid-cols-3">

          {stats.map(([n, t]) => (
            <div
              key={t}
              className="text-center"
            >
              <div className="text-7xl text-[#C6A46A]">
                {n}
              </div>

              <div className="mt-4 text-white/60">
                {t}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}