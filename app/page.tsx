import Hero
from "@/components/Hero";

import SearchBox
from "@/components/SearchBox";

import Destinations
from "@/components/Destinations";

import Offers
from "@/components/Offers";

import Footer
from "@/components/Footer";

export default function HomePage() {

  return (

    <main
      className="
      bg-white
      overflow-hidden
      "
    >

      <Hero />

      <SearchBox />

      <Destinations />

      <Offers />

      <Footer />

    </main>

  );

}