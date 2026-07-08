import { ArrowRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Connaissance des territoires",
    description:
      "Compréhension fine des dynamiques locales, des acteurs publics et des enjeux économiques pour sécuriser les projets dès leur conception.",
  },
  {
    number: "02",
    title: "Relations institutionnelles",
    description:
      "Création de conditions favorables au dialogue entre entreprises, collectivités et décideurs publics afin de faciliter l’émergence des projets.",
  },
  {
    number: "03",
    title: "Vision stratégique",
    description:
      "Accompagnement des dirigeants dans leurs décisions grâce à une analyse globale des enjeux fonciers, économiques et territoriaux.",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-[#FCFCFB] py-32 lg:py-40">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* HEADER */}

        <div className="max-w-4xl">

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-[#8F1D1D]" />

            <span className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#8F1D1D]
            ">
              Notre approche
            </span>

          </div>


          <h2 className="
            mt-8
            text-[3rem]
            font-medium
            leading-[0.96]
            tracking-[-0.06em]
            text-[#111111]
            lg:text-[4rem]
          ">
            Une approche du conseil fondée
            <br />
            sur les territoires, la stratégie
            <br />
            et les relations institutionnelles.
          </h2>


          <p className="
            mt-10
            max-w-3xl
            text-[1.15rem]
            leading-9
            text-[#5F5F5F]
          ">
            GC Territoires accompagne les acteurs publics et privés dans leurs
            projets de développement territorial, d’aménagement du territoire
            et de stratégie foncière.
            <br />
            <br />
            Notre approche repose sur l’analyse des territoires, la proximité
            avec les acteurs locaux et la qualité du dialogue entre les parties prenantes.
          </p>


        </div>



        {/* CARDS */}

        <div className="
          mt-24
          grid
          gap-6
          lg:grid-cols-3
        ">


          {values.map((item) => (

            <div
              key={item.number}
              className="
                group
                rounded-3xl
                border
                border-[#ECECEC]
                bg-white
                p-8
                lg:p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#8F1D1D]
                hover:shadow-xl
              "
            >


              <span className="
                text-xs
                font-semibold
                tracking-[0.22em]
                text-[#8F1D1D]
              ">
                {item.number}
              </span>


              <h3 className="
                mt-8
                text-[1.65rem]
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-[#111111]
              ">
                {item.title}
              </h3>


              <p className="
                mt-6
                text-base
                leading-8
                text-[#666666]
              ">
                {item.description}
              </p>



              <a
                href="/expertises"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#111111]
                  transition
                  group-hover:text-[#8F1D1D]
                "
              >
                En savoir plus

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </a>


            </div>

          ))}


        </div>




        {/* QUOTE */}

        <div className="
          mt-32
          border-l
          border-[#8F1D1D]
          pl-8
          lg:pl-12
        ">


          <p className="
            max-w-5xl
            text-2xl
            font-light
            leading-relaxed
            tracking-[-0.02em]
            text-[#111111]
            lg:text-4xl
          ">
            « Une approche fondée sur la confiance,
            la connaissance des territoires,
            la stratégie et la qualité des relations
            entre acteurs publics et privés. »
          </p>


        </div>


      </div>

    </section>
  );
}