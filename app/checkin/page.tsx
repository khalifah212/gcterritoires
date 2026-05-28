export default function CheckinPage() {
  return (
    <section className="p-20">

      <h1 className="text-5xl font-light">
        Online Check-in
      </h1>

      <div className="bg-white rounded-[40px] p-12 mt-12">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Booking reference"
            className="border rounded-2xl px-6 py-5"
          />

          <input
            placeholder="Last name"
            className="border rounded-2xl px-6 py-5"
          />

        </div>

        <button
          className="
            mt-8
            bg-[#223847]
            text-white
            px-8
            py-4
            rounded-full
          "
        >
          Continue
        </button>

      </div>

    </section>
  );
}