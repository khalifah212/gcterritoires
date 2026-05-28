export default function Hero() {

  return (

    <section
      className="
      relative
      h-[700px]
      overflow-hidden
      "
    >

      {/* BG IMAGE */}
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/30
        "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-10
        h-full
        flex
        flex-col
        justify-center
        "
      >

        <h1
          className="
          text-7xl
          text-white
          font-light
          max-w-3xl
          leading-tight
          "
        >
          Explore more than
          160 destinations
        </h1>

        <button
          className="
          mt-10
          w-fit
          px-10
          py-5
          rounded-full
          border
          border-white
          text-white
          hover:bg-white
          hover:text-black
          transition
          "
        >
          Start Planning
        </button>

      </div>

    </section>

  );

}