import { ArrowRight } from "lucide-react";

export default function ApproachPage() {
  const steps = [
    {
      number: "01",
      title: "Comprendre",
      intro:
        "Analyser les dynamiques territoriales, économiques et institutionnelles pour poser un diagnostic stratégique précis.",
      text:
        "Identifier les acteurs clés, les enjeux fonciers, les contraintes réglementaires et les opportunités afin de construire une vision partagée du projet.",
    },
    {
      number: "02",
      title: "Connecter",
      intro:
        "Créer les conditions du dialogue entre acteurs publics, privés et institutionnels.",
      text:
        "Le cabinet facilite les échanges entre parties prenantes, aligne les intérêts et accompagne la prise de décision collective.",
    },
    {
      number: "03",
      title: "Concrétiser",
      intro:
        "Transformer les intentions stratégiques en projets opérationnels.",
      text:
        "Accompagner la mise en œuvre des projets jusqu'à leur réalisation en sécurisant les dimensions stratégiques, juridiques et opérationnelles.",
    },
  ];

  return (
    <main className="bg-[#fcfcfb]">

      {/* HERO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#8F1D1D]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                Notre approche
              </span>
            </div>


            <h1 className="mt-8 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">
              Une méthode structurée.
              <br />
              <span className="text-[#8F1D1D]">
                Des projets territoriaux maîtrisés.
              </span>
            </h1>


            <p className="mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f]">
              GC Territoires intervient selon une approche en trois étapes
              permettant de comprendre les enjeux, connecter les acteurs et
              concrétiser les projets de développement territorial.
            </p>

          </div>

        </div>
      </section>


      {/* ETAPES */}
      <section className="border-t border-[#ececec]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-3">

            {steps.map((step, index) => (

              <article
                key={step.number}
                className={
                  index !== 0
                    ? "border-t border-[#ececec] pt-10 lg:border-t-0 lg:border-l lg:pl-10"
                    : ""
                }
              >

                <div className="text-xs font-semibold tracking-[0.2em] text-[#8F1D1D]">
                  {step.number}
                </div>


                <h2 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-[#111]">
                  {step.title}
                </h2>


                <p className="mt-6 text-lg leading-8 text-[#5f5f5f]">
                  {step.intro}
                </p>


                <p className="mt-6 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* POSITIONNEMENT */}
      <section className="bg-white border-y border-[#ececec]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">

            <div>

              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#8F1D1D]" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                  Notre rôle
                </span>
              </div>


              <h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
                Un accompagnement
                <br />
                au croisement du public
                <br />
                et du privé.
              </h2>


              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                GC Territoires agit comme un tiers de confiance pour structurer
                les projets, faciliter les échanges et accélérer leur mise en
                œuvre.
              </p>

            </div>


            <div className="rounded-3xl border border-[#ececec] bg-[#fcfcfb] p-10">

              <div className="h-px w-10 bg-[#8F1D1D]" />

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em]">
                Une approche orientée résultats
              </h3>


              <p className="mt-6 text-sm leading-7 text-gray-600">
                Chaque intervention vise à transformer une intention initiale
                en une stratégie claire, partagée et réalisable.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}
      <section>

        <div className="mx-auto max-w-4xl px-6 py-28 text-center">

          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
            Un projet à structurer ?
          </h2>


          <p className="mt-8 text-lg leading-8 text-gray-600">
            Parlons de vos enjeux de développement territorial et de mise en œuvre opérationnelle.
          </p>


          <a
            href="/contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
          >
            Échanger sur votre projet
            <ArrowRight size={18}/>
          </a>

        </div>

      </section>

    </main>
  );
}