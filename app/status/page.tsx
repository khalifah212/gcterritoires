export default function StatusPage() {
  return (
    <section className="p-20">

      <h1 className="text-5xl font-light">
        Flight Status
      </h1>

      <div className="mt-12 bg-white p-12 rounded-[40px]">

        <input
          placeholder="Flight Number"
          className="border rounded-2xl px-6 py-5 w-full"
        />

      </div>

    </section>
  );
}