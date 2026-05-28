export default function Offers() {

  const offers = [
    {
      title: "Business Class",
      description:
        "Experience luxury travel with lie-flat seats and premium dining.",
      image: "/offer1.jpg",
    },

    {
      title: "Exclusive Deals",
      description:
        "Discover special fares to Dubai, Tokyo and Paris.",
      image: "/offer2.jpg",
    },

    {
      title: "Etihad Guest",
      description:
        "Earn miles and unlock premium travel rewards worldwide.",
      image: "/offer3.jpg",
    },
  ];

  return (

    <section
      className="
      py-32
      px-10
      bg-[#f8f8f8]
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >

        {/* HEADER */}
        <div className="mb-16">

          <p
            className="
            uppercase
            tracking-[8px]
            text-[#8A1538]
            mb-4
            "
          >
            Offers
          </p>

          <h2
            className="
            text-6xl
            font-light
            text-black
            "
          >
            Premium Experiences
          </h2>

        </div>

        {/* CARDS */}
        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >

          {offers.map((offer) => (

            <div
              key={offer.title}
              className="
              group
              relative
              h-[500px]
              rounded-[36px]
              overflow-hidden
              bg-black
              "
            >

              {/* IMAGE */}
              <div
                className="
                absolute
                inset-0
                bg-cover
                bg-center
                transition
                duration-700
                group-hover:scale-110
                "
                style={{
                  backgroundImage:
                    `url(${offer.image})`,
                }}
              />

              {/* OVERLAY */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/30
                to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                absolute
                bottom-0
                p-10
                text-white
                "
              >

                <h3
                  className="
                  text-4xl
                  font-light
                  "
                >
                  {offer.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-300
                  leading-relaxed
                  "
                >
                  {offer.description}
                </p>

                <button
                  className="
                  mt-8
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/30
                  hover:bg-white
                  hover:text-black
                  transition
                  "
                >
                  Discover
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}