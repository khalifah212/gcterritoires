import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import SectorSection from "@/components/SectorSection";

/* ---------------- SEO ---------------- */

export const metadata: Metadata = {
  title: "GC Territoires | Conseil en développement territorial",
    description:
        "GC Territoires accompagne les collectivités, entreprises et opérateurs immobiliers dans leurs projets de développement territorial, d'aménagement et de relations institutionnelles.",
          keywords: [
              "développement territorial",
                  "aménagement du territoire",
                      "relations institutionnelles",
                          "cabinet conseil territorial",
                              "collectivités",
                                  "foncier",
                                    ],
                                      openGraph: {
                                          title: "GC Territoires",
                                              description:
                                                    "Cabinet de conseil en développement territorial, aménagement et relations institutionnelles.",
                                                        type: "website",
                                                            locale: "fr_FR",
                                                              },
                                                              };

                                                              /* ---------------- PAGE ---------------- */

                                                              export default function HomePage() {
                                                                return (
                                                                    <main className="overflow-x-hidden bg-white">

                                                                          {/* HERO (H1 principal dans ton composant Hero) */}
                                                                                <Hero />

                                                                                      {/* INTRO SEO (IMPORTANT : Google adore ça) */}
                                                                                            <section className="mx-auto max-w-6xl px-6 py-24">
                                                                                                    <h2 className="text-4xl font-semibold text-[#111111]">
                                                                                                              Cabinet de conseil en développement territorial
                                                                                                                      </h2>

                                                                                                                              <p className="mt-8 text-lg leading-9 text-gray-600">
                                                                                                                                        GC Territoires intervient auprès des collectivités territoriales,
                                                                                                                                                  entreprises, opérateurs immobiliers et aménageurs pour accompagner
                                                                                                                                                            leurs stratégies de développement, leurs projets d’implantation et
                                                                                                                                                                      leurs relations institutionnelles.
                                                                                                                                                                              </p>

                                                                                                                                                                                      <p className="mt-6 text-lg leading-9 text-gray-600">
                                                                                                                                                                                                Notre approche repose sur la compréhension fine des territoires,
                                                                                                                                                                                                          la maîtrise des enjeux publics et privés et la capacité à créer du
                                                                                                                                                                                                                    dialogue entre les acteurs afin de faciliter la mise en œuvre des projets.
                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                  </section>

                                                                                                                                                                                                                                        {/* À PROPOS */}
                                                                                                                                                                                                                                              <AboutSection />

                                                                                                                                                                                                                                                    {/* EXPERTISES */}
                                                                                                                                                                                                                                                          <ExpertiseSection />

                                                                                                                                                                                                                                                                {/* SECTEURS */}
                                                                                                                                                                                                                                                                      <SectorSection />

                                                                                                                                                                                                                                                                            {/* CTA SEO FINAL (très important pour conversion + ranking) */}
                                                                                                                                                                                                                                                                                  <section className="border-t border-gray-200 py-28">
                                                                                                                                                                                                                                                                                          <div className="mx-auto max-w-4xl px-6 text-center">

                                                                                                                                                                                                                                                                                                    <h2 className="text-5xl font-semibold text-[#111111]">
                                                                                                                                                                                                                                                                                                                Un projet territorial ?
                                                                                                                                                                                                                                                                                                                          </h2>

                                                                                                                                                                                                                                                                                                                                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                                                                                                                                                                                                                                                                                                                                                Développement territorial, aménagement, stratégie publique ou
                                                                                                                                                                                                                                                                                                                                                            relations institutionnelles : échangeons sur vos enjeux.
                                                                                                                                                                                                                                                                                                                                                                      </p>

                                                                                                                                                                                                                                                                                                                                                                                <a
                                                                                                                                                                                                                                                                                                                                                                                            href="/contact"
                                                                                                                                                                                                                                                                                                                                                                                                        className="mt-12 inline-flex items-center justify-center rounded-full bg-[#C62828] px-8 py-4 font-medium text-white transition hover:bg-[#A91F1F]"
                                                                                                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                                                                                                              Prendre contact
                                                                                                                                                                                                                                                                                                                                                                                                                                        </a>

                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                      </section>

                                                                                                                                                                                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                                            }