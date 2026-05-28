"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import Sidebar from "@/components/Sidebar";

export default function BookingsPage() {

  const [bookings, setBookings] =
    useState<any[]>([]);

  // -----------------------------------
  // LOAD BOOKINGS
  // -----------------------------------

  useEffect(() => {

    const savedBookings =
      JSON.parse(
        localStorage.getItem(
          "bookings"
        ) || "[]"
      );

    setBookings(savedBookings);

  }, []);

  // -----------------------------------
  // DELETE BOOKING
  // -----------------------------------

  const handleDelete =
    (index: number) => {

      const updatedBookings =
        bookings.filter(
          (_, i) => i !== index
        );

      setBookings(updatedBookings);

      localStorage.setItem(
        "bookings",
        JSON.stringify(updatedBookings)
      );

    };

  return (

    <main className="flex bg-[#f5f7fb]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <section
        className="
        ml-[220px]
        min-h-screen
        w-full
        px-16
        py-16
        "
      >

        {/* HEADER */}
        <div className="mb-16">

          <p
            className="
            uppercase
            tracking-[6px]
            text-[#8A1538]
            mb-4
            text-sm
            "
          >
            Manage Bookings
          </p>

          <h1
            className="
            text-6xl
            font-light
            text-black
            "
          >
            My Reservations
          </h1>

          <p
            className="
            mt-6
            text-slate-500
            text-xl
            "
          >
            {bookings.length} bookings
          </p>

        </div>

        {/* EMPTY */}
        {
          bookings.length === 0 && (

            <div
              className="
              bg-white
              rounded-[40px]
              p-20
              text-center
              shadow-sm
              "
            >

              <div className="text-8xl">
                ✈️
              </div>

              <h2
                className="
                text-5xl
                font-light
                mt-8
                "
              >
                No Bookings Yet
              </h2>

              <p className="text-slate-500 mt-6">
                Reserve your first flight
              </p>

            </div>

          )
        }

        {/* BOOKINGS */}
        <div className="flex flex-col gap-8">

          {
            bookings.map(
              (booking, index) => (

                <div
                 key={`${booking.id}-${index}`}
                  className="
                  bg-white
                  rounded-[40px]
                  p-10
                  shadow-sm
                  hover:shadow-xl
                  transition
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                  >

                    {/* LEFT */}
                    <div>

                      <h2
                        className="
                        text-3xl
                        font-semibold
                        "
                      >
                        {booking.airline}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        Flight {booking.flight}
                      </p>

                      {/* ROUTE */}
                      <div
                        className="
                        flex
                        items-center
                        gap-8
                        mt-8
                        "
                      >

                        <div>

                          <p className="text-slate-400 text-sm uppercase">
                            From
                          </p>

                          <p className="text-4xl font-light">
                            {booking.from}
                          </p>

                        </div>

                        <div className="text-4xl text-[#8A1538]">
                          →
                        </div>

                        <div>

                          <p className="text-slate-400 text-sm uppercase">
                            To
                          </p>

                          <p className="text-4xl font-light">
                            {booking.to}
                          </p>

                        </div>

                      </div>

                      {/* DATES */}
                      <div className="mt-8 text-slate-500">

                        <p>
                          Departure:
                          {" "}
                          {
                            new Date(
                              booking.departure
                            ).toLocaleString()
                          }
                        </p>

                        <p className="mt-2">
                          Arrival:
                          {" "}
                          {
                            new Date(
                              booking.arrival
                            ).toLocaleString()
                          }
                        </p>

                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="text-right">

                      <p
                        className="
                        text-slate-400
                        uppercase
                        tracking-widest
                        text-sm
                        "
                      >
                        Price
                      </p>

                      <p
                        className="
                        text-6xl
                        font-light
                        text-[#8A1538]
                        mt-2
                        "
                      >
                        €{booking.price}
                      </p>

                      {/* STATUS */}
                      <div className="mt-6">

                        <span
                          className="
                          bg-green-100
                          text-green-700
                          px-5
                          py-2
                          rounded-full
                          text-sm
                          "
                        >
                          {booking.status || "Confirmed"}
                        </span>

                      </div>

                      {/* BUTTONS */}
                      <div className="flex gap-4 mt-8">

                        {/* MANAGE */}
                        <Link
                          href={`/bookings/${booking.id}`}
                          className="
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          text-white
                          px-8
                          py-4
                          rounded-full
                          inline-flex
                          items-center
                          justify-center
                          "
                        >
                          Manage
                        </Link>

                        {/* CANCEL */}
                        <button
                          onClick={() =>
                            handleDelete(index)
                          }
                          className="
                          bg-red-500
                          hover:bg-red-600
                          transition
                          text-white
                          px-8
                          py-4
                          rounded-full
                          "
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )
            )
          }

        </div>

      </section>

    </main>

  );

}