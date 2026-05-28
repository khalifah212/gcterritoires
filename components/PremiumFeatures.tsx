export default function PremiumFeatures() {
  const items = [
    {
      title: "Luxury Experience",
      text: "Premium cabins and exceptional comfort.",
    },

    {
      title: "Secure Payments",
      text: "Stripe protected checkout.",
    },

    {
      title: "24/7 Concierge",
      text: "Travel assistance anytime.",
    },
  ];

  return (
    <section
      className="
      ml-[92px]
      px-20
      py-32
    "
    >
      <p className="text-[#C6A46A] uppercase tracking-[10px]">
        Experience
      </p>

      <h2
        className="
        text-6xl
        font-light
        mt-6
      "
      >
        Travel Reimagined
      </h2>

      <div
        className="
        mt-16
        grid
        lg:grid-cols-3
        gap-8
      "
      >
        {items.map((i) => (
          <div
            key={i.title}
            className="
            bg-white/5
            border
            border-white/10
            rounded-[32px]
            p-10
            backdrop-blur-xl
            hover:border-[#C6A46A]
            transition
          "
          >
            <h3 className="text-3xl">
              {i.title}
            </h3>

            <p className="mt-6 text-white/60">
              {i.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}