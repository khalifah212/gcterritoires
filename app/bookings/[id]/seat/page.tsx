"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import Sidebar from "@/components/Sidebar";

export default function SeatSelectionPage() {

  const params =
    useParams();

  const router =
    useRouter();

  const [selectedSeat, setSelectedSeat] =
    useState<string | null>(null);

  const [booking, setBooking] =
    useState<any>(null);

  // -----------------------------------
  // OCCUPIED SEATS
  // -----------------------------------

  const occupiedSeats = [
    "1A",
    "1B",
    "2C",
    "3D",
    "4A",
    "5F",
    "6C",
    "7B",
    "8E",
  ];

  // -----------------------------------
  // LOAD BOOKING
  // -----------------------------------

  useEffect(() => {

    const savedBookings =
      JSON.parse(
        localStorage.getItem(
          "bookings"
        ) || "[]"
      );

    const foundBooking =
      savedBookings.find(
        (b: any) =>
          b.id.toString() ===
          params.id
      );

    setBooking(foundBooking);

    if (foundBooking?.seat) {

      setSelectedSeat(
        foundBooking.seat
      );

    }

  }, [params.id]);

  // -----------------------------------
  // SAVE SEAT
  // -----------------------------------

  const handleSaveSeat = () => {

    if (!selectedSeat) return;

    const savedBookings =
      JSON.parse(
        localStorage.getItem(
          "bookings"
        ) || "[]"
      );

    const updatedBookings =
      savedBookings.map((b: any) => {

        if (
          b.id.toString() ===
          params.id
        ) {

          return {
            ...b,
            seat: selectedSeat,
          };

        }

        return b;

      });

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    router.push(
      `/bookings/${params.id}`
    );

  };

  // -----------------------------------
  // LOADING
  // -----------------------------------

  if (!booking) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        text-3xl
        "
      >
        Loading seats...
      </div>

    );

  }

  // -----------------------------------
  // GENERATE SEATS
  // -----------------------------------

  const rows =
    Array.from(
      { length: 8 },
      (_, i) => i + 1
    );

  const columns = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

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
            text-sm
            mb-4
            "
          >
            Seat Selection
          </p>

          <h1
            className="
            text-6xl
            font-light
            "
          >
            Choose Your Seat
          </h1>

          <p
            className="
            mt-6
            text-slate-500
            text-xl
            "
          >
            Flight {booking.flight}
            {" • "}
            {booking.from}
            {" → "}
            {booking.to}
          </p>

        </div>

        {/* TOP INFO */}
        <div
          className="
          grid
          grid-cols-3
          gap-8
          mb-10
          "
        >

          {/* SELECTED */}
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            shadow-sm
            "
          >

            <p className="text-slate-400 text-sm uppercase">
              Selected Seat
            </p>

            <p
              className="
              text-5xl
              font-light
              mt-4
              "
            >
              {
                selectedSeat ||
                "--"
              }
            </p>

          </div>

          {/* CLASS */}
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            shadow-sm
            "
          >

            <p className="text-slate-400 text-sm uppercase">
              Cabin
            </p>

            <p
              className="
              text-5xl
              font-light
              mt-4
              "
            >
              Business
            </p>

          </div>

          {/* PRICE */}
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            shadow-sm
            "
          >

            <p className="text-slate-400 text-sm uppercase">
              Extra Cost
            </p>

            <p
              className="
              text-5xl
              font-light
              mt-4
              "
            >
              €0
            </p>

          </div>

        </div>

        {/* AIRCRAFT */}
        <div
          className="
          bg-white
          rounded-[50px]
          shadow-sm
          p-16
          "
        >

          {/* SCREEN */}
          <div className="text-center mb-16">

            <div
              className="
              mx-auto
              w-[400px]
              bg-slate-200
              py-5
              rounded-full
              text-slate-500
              tracking-[10px]
              "
            >
              COCKPIT
            </div>

          </div>

          {/* LEGEND */}
          <div
            className="
            flex
            justify-center
            gap-10
            mb-16
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                w-6
                h-6
                rounded-full
                bg-slate-200
                "
              />

              <p>Available</p>

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                w-6
                h-6
                rounded-full
                bg-red-500
                "
              />

              <p>Occupied</p>

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                w-6
                h-6
                rounded-full
                bg-[#8A1538]
                "
              />

              <p>Selected</p>

            </div>

          </div>

          {/* SEATS */}
          <div
            className="
            flex
            flex-col
            gap-6
            items-center
            "
          >

            {
              rows.map((row) => (

                <div
                  key={row}
                  className="
                  flex
                  items-center
                  gap-6
                  "
                >

                  {/* LEFT SIDE */}
                  <div className="flex gap-4">

                    {
                      columns
                        .slice(0, 3)
                        .map((col) => {

                          const seat =
                            `${row}${col}`;

                          const occupied =
                            occupiedSeats.includes(
                              seat
                            );

                          const selected =
                            selectedSeat === seat;

                          return (

                            <button
                              key={seat}
                              disabled={occupied}
                              onClick={() =>
                                setSelectedSeat(
                                  seat
                                )
                              }
                              className={`
                              w-16
                              h-16
                              rounded-2xl
                              text-lg
                              font-medium
                              transition
                              ${
                                occupied
                                  ? `
                                  bg-red-500
                                  text-white
                                  cursor-not-allowed
                                  `
                                  : selected
                                  ? `
                                  bg-[#8A1538]
                                  text-white
                                  scale-110
                                  `
                                  : `
                                  bg-slate-200
                                  hover:bg-slate-300
                                  `
                              }
                              `}
                            >
                              {seat}
                            </button>

                          );

                        })
                    }

                  </div>

                  {/* AISLE */}
                  <div
                    className="
                    w-20
                    text-center
                    text-slate-400
                    "
                  >
                    {row}
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex gap-4">

                    {
                      columns
                        .slice(3)
                        .map((col) => {

                          const seat =
                            `${row}${col}`;

                          const occupied =
                            occupiedSeats.includes(
                              seat
                            );

                          const selected =
                            selectedSeat === seat;

                          return (

                            <button
                              key={seat}
                              disabled={occupied}
                              onClick={() =>
                                setSelectedSeat(
                                  seat
                                )
                              }
                              className={`
                              w-16
                              h-16
                              rounded-2xl
                              text-lg
                              font-medium
                              transition
                              ${
                                occupied
                                  ? `
                                  bg-red-500
                                  text-white
                                  cursor-not-allowed
                                  `
                                  : selected
                                  ? `
                                  bg-[#8A1538]
                                  text-white
                                  scale-110
                                  `
                                  : `
                                  bg-slate-200
                                  hover:bg-slate-300
                                  `
                              }
                              `}
                            >
                              {seat}
                            </button>

                          );

                        })
                    }

                  </div>

                </div>

              ))
            }

          </div>

        </div>

        {/* ACTIONS */}
        <div
          className="
          flex
          justify-end
          gap-6
          mt-10
          "
        >

          {/* BACK */}
          <button
            onClick={() =>
              router.push(
                `/bookings/${params.id}`
              )
            }
            className="
            border
            border-slate-300
            hover:bg-slate-100
            transition
            px-10
            py-5
            rounded-full
            text-lg
            "
          >
            Back
          </button>

          {/* SAVE */}
          <button
            disabled={!selectedSeat}
            onClick={handleSaveSeat}
            className={`
            px-12
            py-5
            rounded-full
            text-lg
            text-white
            transition
            ${
              selectedSeat
                ? `
                bg-[#8A1538]
                hover:bg-[#70112e]
                `
                : `
                bg-slate-300
                cursor-not-allowed
                `
            }
            `}
          >
            Confirm Seat
          </button>

        </div>

      </section>

    </main>

  );

}