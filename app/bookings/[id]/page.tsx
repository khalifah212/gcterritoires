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

import QRCode from "react-qr-code";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function BookingDetailsPage() {

  const params =
    useParams();

  const router =
    useRouter();

  const [booking, setBooking] =
    useState<any>(null);

  const [ticketRef, setTicketRef] =
    useState<HTMLDivElement | null>(null);

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

  }, [params.id]);

  // -----------------------------------
  // CHECK-IN
  // -----------------------------------

  const handleCheckIn = () => {

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
            checkedIn: true,
            seat:
              b.seat || "12A",
            boardingTime: "07:15",
            status: "Checked-in",
          };

        }

        return b;

      });

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBooking({
      ...booking,
      checkedIn: true,
      seat:
        booking.seat || "12A",
      boardingTime: "07:15",
      status: "Checked-in",
    });

  };

  // -----------------------------------
  // DOWNLOAD PDF
  // -----------------------------------

  const handleDownloadTicket =
    async () => {

      if (!ticketRef) return;

      const canvas =
        await html2canvas(ticketRef);

      const imgData =
        canvas.toDataURL(
          "image/png"
        );

      const pdf =
        new jsPDF({
          orientation:
            "landscape",
          unit: "px",
          format: [
            canvas.width,
            canvas.height,
          ],
        });

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height
      );

      pdf.save(
        `ticket-${booking.flight}.pdf`
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
        Loading booking...
      </div>

    );

  }

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
        <div
          className="
          flex
          items-center
          justify-between
          mb-16
          "
        >

          <div>

            <p
              className="
              uppercase
              tracking-[6px]
              text-[#8A1538]
              text-sm
              mb-4
              "
            >
              Booking Management
            </p>

            <h1
              className="
              text-7xl
              font-light
              "
            >
              {booking.from}
              {" → "}
              {booking.to}
            </h1>

            <p
              className="
              mt-4
              text-slate-500
              text-2xl
              "
            >
              {booking.airline}
              {" • "}
              Flight {booking.flight}
            </p>

          </div>

          {/* STATUS */}
          <div
            className="
            bg-white
            rounded-[30px]
            px-10
            py-8
            shadow-sm
            "
          >

            <p className="text-slate-400 text-sm uppercase">
              Status
            </p>

            <p
              className={`
              text-3xl
              font-light
              mt-3
              ${
                booking.checkedIn
                  ? "text-green-600"
                  : "text-blue-600"
              }
              `}
            >
              {
                booking.status ||
                "Confirmed"
              }
            </p>

          </div>

        </div>

        {/* BOARDING PASS */}
        <div
          ref={setTicketRef}
          className="
          bg-white
          rounded-[40px]
          overflow-hidden
          shadow-sm
          flex
          "
        >

          {/* LEFT */}
          <div
            className="
            flex-1
            p-14
            "
          >

            {/* TOP */}
            <div
              className="
              flex
              items-center
              justify-between
              "
            >

              <div>

                <p className="text-slate-400 uppercase text-sm">
                  Airline
                </p>

                <h2
                  className="
                  text-4xl
                  font-semibold
                  mt-2
                  "
                >
                  {booking.airline}
                </h2>

              </div>

              <div
                className="
                bg-[#8A1538]
                text-white
                px-6
                py-3
                rounded-full
                text-sm
                "
              >
                Business Class
              </div>

            </div>

            {/* ROUTE */}
            <div
              className="
              flex
              items-center
              justify-between
              mt-16
              "
            >

              {/* FROM */}
              <div>

                <p className="text-slate-400 uppercase text-sm">
                  Departure
                </p>

                <h2 className="text-7xl font-light mt-3">
                  {booking.from}
                </h2>

                <p className="text-slate-500 mt-4 text-lg">
                  {
                    new Date(
                      booking.departure
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  }
                </p>

              </div>

              {/* CENTER */}
              <div className="flex-1 px-12">

                <div
                  className="
                  flex
                  items-center
                  "
                >

                  <div className="h-[2px] bg-slate-200 flex-1" />

                  <div
                    className="
                    mx-6
                    text-[#8A1538]
                    text-3xl
                    "
                  >
                    ✈
                  </div>

                  <div className="h-[2px] bg-slate-200 flex-1" />

                </div>

                <p
                  className="
                  text-center
                  text-slate-400
                  mt-4
                  "
                >
                  {booking.duration}
                </p>

              </div>

              {/* TO */}
              <div className="text-right">

                <p className="text-slate-400 uppercase text-sm">
                  Arrival
                </p>

                <h2 className="text-7xl font-light mt-3">
                  {booking.to}
                </h2>

                <p className="text-slate-500 mt-4 text-lg">
                  {
                    new Date(
                      booking.arrival
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  }
                </p>

              </div>

            </div>

            {/* DETAILS */}
            <div
              className="
              grid
              grid-cols-4
              gap-8
              mt-16
              "
            >

              <div>

                <p className="text-slate-400 text-sm">
                  Flight
                </p>

                <p className="text-2xl mt-3">
                  {booking.flight}
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  Terminal
                </p>

                <p className="text-2xl mt-3">
                  {booking.terminal}
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  Gate
                </p>

                <p className="text-2xl mt-3">
                  {booking.gate}
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  Aircraft
                </p>

                <p className="text-2xl mt-3">
                  {booking.aircraft}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
            w-[350px]
            border-l-2
            border-dashed
            border-slate-200
            p-10
            flex
            flex-col
            justify-between
            "
          >

            {/* QR */}
            <div>

              <div
                className="
                w-full
                h-[260px]
                bg-white
                rounded-[30px]
                flex
                items-center
                justify-center
                border
                border-slate-200
                "
              >

                <QRCode
                  value={JSON.stringify({
                    id: booking.id,
                    flight:
                      booking.flight,
                    from:
                      booking.from,
                    to:
                      booking.to,
                    passenger:
                      "John Doe",
                  })}
                  size={180}
                />

              </div>

              {/* PASSENGER */}
              <div className="mt-10">

                <p className="text-slate-400 text-sm">
                  Passenger
                </p>

                <p className="text-2xl mt-2">
                  John Doe
                </p>

              </div>

            </div>

            {/* INFO */}
            <div>

              <div
                className="
                flex
                justify-between
                mb-6
                "
              >

                <div>

                  <p className="text-slate-400 text-sm">
                    Seat
                  </p>

                  <p className="text-2xl mt-2">
                    {
                      booking.seat ||
                      "--"
                    }
                  </p>

                </div>

                <div>

                  <p className="text-slate-400 text-sm">
                    Boarding
                  </p>

                  <p className="text-2xl mt-2">
                    {
                      booking.boardingTime ||
                      "--:--"
                    }
                  </p>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-4">

                {
                  !booking.checkedIn && (

                    <button
                      onClick={
                        handleCheckIn
                      }
                      className="
                      w-full
                      bg-[#8A1538]
                      hover:bg-[#70112e]
                      transition
                      text-white
                      py-5
                      rounded-full
                      text-lg
                      "
                    >
                      Check-in
                    </button>

                  )
                }

                {/* SELECT SEAT */}
                <button
                  onClick={() =>
                    router.push(
                      `/bookings/${params.id}/seat`
                    )
                  }
                  className="
                  w-full
                  bg-blue-500
                  hover:bg-blue-600
                  transition
                  text-white
                  py-5
                  rounded-full
                  text-lg
                  "
                >
                  Select Seat
                </button>

                {/* DOWNLOAD */}
                <button
                  onClick={
                    handleDownloadTicket
                  }
                  className="
                  w-full
                  bg-black
                  hover:bg-slate-800
                  transition
                  text-white
                  py-5
                  rounded-full
                  text-lg
                  "
                >
                  Download Ticket
                </button>

                {/* BACK */}
                <button
                  onClick={() =>
                    router.push(
                      "/bookings"
                    )
                  }
                  className="
                  w-full
                  border
                  border-slate-300
                  hover:bg-slate-100
                  transition
                  py-5
                  rounded-full
                  text-lg
                  "
                >
                  Back
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* TIMELINE */}
        <div
          className="
          bg-white
          rounded-[40px]
          p-12
          shadow-sm
          mt-10
          "
        >

          <h2
            className="
            text-4xl
            font-light
            mb-12
            "
          >
            Flight Timeline
          </h2>

          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            {/* BOOKED */}
            <div className="flex flex-col items-center flex-1">

              <div
                className="
                w-16
                h-16
                rounded-full
                bg-green-500
                text-white
                flex
                items-center
                justify-center
                text-2xl
                "
              >
                ✓
              </div>

              <p className="mt-4 text-lg">
                Booked
              </p>

            </div>

            <div className="h-[3px] bg-green-500 flex-1" />

            {/* CHECKED-IN */}
            <div className="flex flex-col items-center flex-1">

              <div
                className={`
                w-16
                h-16
                rounded-full
                flex
                items-center
                justify-center
                text-2xl
                ${
                  booking.checkedIn
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 text-slate-500"
                }
                `}
              >
                ✓
              </div>

              <p className="mt-4 text-lg">
                Checked-in
              </p>

            </div>

            <div
              className={`
              h-[3px]
              flex-1
              ${
                booking.checkedIn
                  ? "bg-green-500"
                  : "bg-slate-200"
              }
              `}
            />

            {/* BOARDING */}
            <div className="flex flex-col items-center flex-1">

              <div
                className="
                w-16
                h-16
                rounded-full
                bg-slate-200
                text-slate-500
                flex
                items-center
                justify-center
                text-2xl
                "
              >
                ✈
              </div>

              <p className="mt-4 text-lg">
                Boarding
              </p>

            </div>

            <div className="h-[3px] bg-slate-200 flex-1" />

            {/* LANDED */}
            <div className="flex flex-col items-center flex-1">

              <div
                className="
                w-16
                h-16
                rounded-full
                bg-slate-200
                text-slate-500
                flex
                items-center
                justify-center
                text-2xl
                "
              >
                🛬
              </div>

              <p className="mt-4 text-lg">
                Landed
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}