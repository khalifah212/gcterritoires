import Link from "next/link";
import { ArrowRight } from "lucide-react";

const expertises = [
  {
    number: "01",
    title: "Développement territorial",
    description:
      "Accompagnement des stratégies d’implantation et de développement des acteurs publics et privés.",
  },
  {
    number: "02",
    title: "Relations institutionnelles",
    description:
      "Construction de relations de confiance avec les acteurs publics et les décideurs.",
  },
  {
    number: "03",
    title: "Accès foncier",
    description:
      "Identification et qualification d’opportunités foncières en amont des projets.",
  },
  {
    number: "04",
    title: "Consultations publiques",
    description:
      "Accompagnement aux réponses aux appels d’offres et consultations complexes.",
  },
  {
    number: "05",
    title: "Stratégie territoriale",
    description:
      "Analyse des dynamiques locales et accompagnement stratégique des décideurs.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#FCFCFB] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#8F1D1D]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
              Nos expertises
            </span>
          </div>

          <h2 className="mt-8 text-[3rem] font-medium leading-[0.96] tracking-[-0.06em] text-[#111111] lg:text-[4rem]">
            Une expertise au service
            <br />
            des territoires.
          </h2>

          <p className="mt-8 max-w-2xl text-[1.15rem] leading-9 text-[#5F5F5F]">
            Une approche stratégique, opérationnelle et transversale pour accompagner les acteurs publics et privés dans leurs projets de développement.
          </p>

        </div>

        {/* Liste */}

        <div className="mt-24 border-t border-[#ECECEC]">

          {expertises.map((item) => (
            <div
              key={item.number}
              className="group grid items-start gap-10 border-b border-[#ECECEC] py-12 transition-all duration-300 hover:pl-4 lg:grid-cols-[110px_1fr_70px]"
            >

              {/* Numéro */}

              <span className="text-sm font-semibold tracking-[0.2em] text-[#8F1D1D]">
                {item.number}
              </span>

              {/* Contenu */}

              <div>

                <h3 className="text-[1.9rem] font-medium tracking-[-0.03em] text-[#111111] transition-colors duration-300 group-hover:text-[#8F1D1D]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-[#666666]">
                  {item.description}
                </p>

              </div>

              {/* CTA */}

              <div className="flex justify-start lg:justify-end">

                <Link
                  href="/contact"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] transition-all duration-300 group-hover:border-[#8F1D1D] group-hover:bg-[#8F1D1D] group-hover:text-white"
                >
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}