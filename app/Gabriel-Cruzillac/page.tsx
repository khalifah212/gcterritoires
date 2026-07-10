import Image from "next/image";
import {
  User,
  Landmark,
  Building2,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    icon: Building2,
    title: "Développement foncier et immobilier",
    description:
      "Direction du développement foncier et immobilier auprès d’acteurs majeurs de l’aménagement et de l’immobilier, avec une approche stratégique et opérationnelle.",
  },
  {
    icon: Landmark,
    title: "Collectivités territoriales et décideurs publics",
    description:
      "Accompagnement des collectivités et des élus dans leurs stratégies d’aménagement, de développement local et de transformation territoriale.",
  },
  {
    icon: User,
    title: "Expérience d’élu local",
    description:
      "Une connaissance concrète du fonctionnement institutionnel, des arbitrages publics et des dynamiques politiques territoriales.",
  },
  {
    icon: MapPinned,
    title: "Relations institutionnelles",
    description:
      "Création de passerelles entre acteurs publics, privés et institutionnels pour faciliter l’émergence des projets.",
  },
];

export default function FounderPage() {
  return (
    <main className="bg-[#fcfcfb]">
      {/* HERO IDENTIFICATION */}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-5xl text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-10 bg-[#8F1D1D]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                Le cabinet
              </span>
            </div>

            <h1 className="mt-8 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">
              Gabriel Cruzillac
              <br />
              <span className="text-[#8F1D1D]">
                Président fondateur de GC Territoires
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f] lg:mx-0">
              Une expertise au croisement des collectivités territoriales, de
              l’aménagement et du développement des territoires.
            </p>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}

      <section className="border-t border-[#ececec] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* IMAGE */}

            <div>
              <div className="overflow-hidden rounded-3xl border border-[#ececec] bg-[#f5f5f5]">
                <Image
                  src="/gabriel-cruzillac.png"
                  alt="Gabriel Cruzillac - Président fondateur de GC Territoires"
                  width={900}
                  height={1125}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>

            {/* TEXTE */}

            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
                Une double culture publique
                <br />
                et privée au service des territoires.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Depuis plus de vingt ans, Gabriel Cruzillac accompagne les
                  décideurs publics et privés dans la structuration, la
                  sécurisation et le développement de projets à fort enjeu
                  territorial.
                </p>

                <p>
                  Son parcours lui confère une compréhension approfondie des
                  territoires, des équilibres institutionnels et des réalités
                  opérationnelles.
                </p>

                <p>
                  GC Territoires est né d’une conviction : les projets les plus
                  ambitieux réussissent lorsque les territoires sont compris, les
                  acteurs réunis et les décisions éclairées.
                </p>

                <p className="font-medium text-[#111]">
                  Comprendre les territoires. Connecter les acteurs. Faire
                  avancer les projets.
                </p>
              </div>

              <a
                href="/contact"
                className="mx-auto mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white lg:mx-0"
              >
                Échanger avec le cabinet

                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
              Parcours
            </span>

            <h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
              Une expérience construite
              <br />
              au contact des territoires.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#ececec] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:text-left"
              >
                <item.icon size={24} className="text-[#8F1D1D]" />

                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}

      <section className="border-y border-[#ececec] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <div className="border-l-0 px-0 text-center lg:border-l-2 lg:border-[#8F1D1D] lg:pl-8 lg:text-left">
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
              Vision du cabinet
            </span>

            <h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
              Pourquoi GC Territoires ?
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              GC Territoires accompagne les acteurs publics et privés dans la
              structuration de projets territoriaux complexes, en apportant une
              lecture stratégique, institutionnelle et opérationnelle.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              L’objectif : sécuriser les décisions, faciliter les échanges et
              accélérer la concrétisation des projets.
            </p>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="bg-[#fcfcfb]">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-6 py-24">
          <blockquote className="max-w-4xl text-center">
            <p className="text-4xl font-light leading-[1.45] tracking-[-0.03em] text-[#111111] lg:text-5xl">
              « Les projets territoriaux se construisent autant sur leur qualité
              technique que sur leur acceptabilité locale. »
              </p>
              </blockquote>
              </div>
              </section>
      
      {/* CTA */}

      <section className="border-t border-[#ececec]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
            Échangeons sur votre projet territorial
          </h2>

          <a
            href="/contact"
            className="mt-12 inline-flex rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#761818]"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}