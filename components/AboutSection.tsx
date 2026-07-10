import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#FCFCFB] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-start gap-24 lg:grid-cols-[1.3fr_0.7fr]">

         {/* LEFT */}

<div className="text-center lg:text-left">

  <div className="flex items-center justify-center gap-3 lg:justify-start">
    <span className="h-px w-10 bg-[#8F1D1D]" />
    <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
      Le cabinet
    </span>
  </div>

  <h2 className="mt-8 mx-auto max-w-4xl text-[3rem] font-medium leading-[0.96] tracking-[-0.06em] text-[#111111] lg:mx-0 lg:text-[4rem]">
    Faire émerger les projets.
    <br />
    Faciliter les décisions.
    <br />
    <span className="text-[#8F1D1D]">
      Accélérer les territoires.
    </span>
  </h2>

  <p className="mt-10 mx-auto max-w-2xl text-[1.15rem] leading-9 text-[#5F5F5F] lg:mx-0">
    GC Territoires accompagne les collectivités territoriales,
    entreprises, investisseurs et aménageurs dans leurs stratégies
    de développement, d'implantation et de transformation des territoires.
  </p>

  <Link
    href="/expertises"
    className="mt-14 inline-flex items-center justify-center gap-2 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
  >
    Découvrir les expertises
    <ArrowRight size={18} />
  </Link>

</div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-[#ECECEC] bg-white p-10 shadow-sm">

            <div>

              <p className="text-6xl font-medium tracking-[-0.05em] text-[#8F1D1D]">
                20 ans
              </p>

              <p className="mt-2 text-base text-[#666666]">
                d'expérience au service des territoires
              </p>

            </div>

            <div className="my-10 h-px bg-[#ECECEC]" />

            <div className="space-y-8">

              <div>

                <h3 className="text-xl font-medium text-[#111111]">
                  Double culture
                </h3>

                <p className="mt-3 text-[#666666] leading-7">
                  Une parfaite compréhension des enjeux publics et privés pour
                  créer des stratégies partagées.
                </p>

              </div>

              <div>

                <h3 className="text-xl font-medium text-[#111111]">
                  Réseau
                </h3>

                <p className="mt-3 text-[#666666] leading-7">
                  Une connaissance approfondie des décideurs publics,
                  investisseurs et partenaires territoriaux.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}