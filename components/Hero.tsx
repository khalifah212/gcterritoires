import { ArrowRight } from "lucide-react";

export default function HomePage() {

  const audiences = [
    {
      title: "Collectivités territoriales",
      text: "Structurer leurs stratégies de développement et leurs projets territoriaux."
    },
    {
      title: "Opérateurs immobiliers et aménageurs",
      text: "Sécuriser leurs implantations et leurs relations institutionnelles."
    },
    {
      title: "Investisseurs et entreprises",
      text: "Comprendre les territoires et accélérer leurs projets."
    },
    {
      title: "Architectes, bureaux d’études et ingénieries",
      text: "Renforcer l’ancrage territorial des opérations."
    },
  ];


  const values = [
    {
      number: "01",
      title: "Comprendre",
      text:
        "Analyser les dynamiques territoriales, économiques et institutionnelles avant d’engager les décisions."
    },
    {
      number: "02",
      title: "Connecter",
      text:
        "Créer les passerelles entre acteurs publics, privés et partenaires opérationnels."
    },
    {
      number: "03",
      title: "Transformer",
      text:
        "Faire passer une intention stratégique vers un projet structuré et réalisable."
    },
  ];


  return (

    <main className="bg-[#fcfcfb]">


      {/* HERO */}

      <section>

        <div className="mx-auto flex max-w-7xl items-center px-6 py-24 lg:min-h-[88vh] lg:px-8 lg:py-36">


          <div className="grid w-full gap-16 lg:grid-cols-[1.45fr_0.55fr] lg:gap-28">


            <div>


              <div className="inline-flex items-center gap-3">

                <span className="h-px w-10 bg-[#8F1D1D]" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                  Conseil en stratégie territoriale
                </span>

              </div>



              <h1 className="mt-8 max-w-5xl text-[3.2rem] font-medium leading-[0.94] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5.4rem]">

                Transformer les enjeux territoriaux
                <br />

                en projets réalisables.

                <br />

                <span className="text-[#8F1D1D]">
                  Connecter les acteurs.
                </span>

                <br />

                Sécuriser les décisions.

              </h1>




              <p className="mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f]">

                GC Territoires accompagne les collectivités territoriales,
                opérateurs immobiliers, investisseurs et entreprises dans leurs
                stratégies de développement, d’implantation et de transformation
                des territoires.

              </p>




              <p className="mt-8 max-w-[42rem] text-lg font-medium leading-8 text-[#111]">

                Une expertise au croisement de la décision publique,
                du développement immobilier et des réalités opérationnelles.

              </p>





              <div className="mt-14 flex flex-col gap-5 sm:flex-row">


                <a
                  href="/expertises"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
                >

                  Découvrir les expertises

                  <ArrowRight size={18}/>

                </a>




                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8d8d8] bg-white px-9 py-4 text-[15px] font-medium transition-all duration-300 hover:bg-black hover:text-white"
                >

                  Échanger sur votre projet

                </a>


              </div>





              <div className="mt-24">


                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8F1D1D]">

                  Nous accompagnons

                </h3>




                <div className="mt-8 grid gap-4 sm:grid-cols-2">


                  {audiences.map(item => (

                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#ececec] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >

                      <h4 className="font-medium text-[#111]">
                        {item.title}
                      </h4>


                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {item.text}
                      </p>


                    </div>

                  ))}


                </div>


              </div>



            </div>





            {/* VALEUR AJOUTEE */}

            <aside className="hidden lg:flex">


              <div className="w-full max-w-sm rounded-3xl border border-[#ececec] bg-white p-10 shadow-sm">


                <div className="h-px w-10 bg-[#8F1D1D]" />



                <h2 className="mt-8 text-2xl font-medium tracking-[-0.04em]">

                  Notre valeur ajoutée

                </h2>




                <p className="mt-4 text-sm leading-7 text-gray-600">

                  Une approche construite à l’interface des enjeux publics,
                  privés et territoriaux.

                </p>





                <div className="mt-10">


                  {values.map((item,index)=>(

                    <div
                      key={item.number}
                      className={
                        index
                        ? "mt-8 border-t border-[#ececec] pt-8"
                        : ""
                      }
                    >


                      <div className="text-xs font-semibold tracking-[0.2em] text-[#8F1D1D]">

                        {item.number}

                      </div>



                      <h3 className="mt-3 text-xl font-medium">

                        {item.title}

                      </h3>



                      <p className="mt-3 text-sm leading-7 text-gray-600">

                        {item.text}

                      </p>


                    </div>

                  ))}


                </div>



              </div>


            </aside>



          </div>


        </div>


      </section>





      {/* POSITIONNEMENT */}

      <section className="border-y border-[#ececec] bg-white">


        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">


            <div>


              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">

                L’approche GC Territoires

              </span>




              <h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

                Une connaissance concrète
                des territoires et de leurs acteurs.

              </h2>



              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

                À travers une expérience construite auprès des collectivités,
                des élus, des aménageurs et des investisseurs, GC Territoires
                apporte une lecture globale des projets.

              </p>



            </div>




            <div className="rounded-3xl border border-[#ececec] bg-[#fcfcfb] p-10">


              <h3 className="text-2xl font-medium tracking-[-0.04em]">

                Une double culture

              </h3>



              <p className="mt-6 text-base leading-8 text-gray-600">

                Comprendre les contraintes publiques tout en maîtrisant
                les réalités opérationnelles des acteurs privés.

              </p>


            </div>


          </div>


        </div>


      </section>




{/* CTA */}

<section className="border-t border-[#ececec] bg-white">
  <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">

    <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[#111111] lg:text-5xl">
      Un projet territorial à faire avancer&nbsp;?
    </h2>

    <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5f5f5f]">
      Échangeons sur vos enjeux de développement, d’implantation ou de
      transformation territoriale.
    </p>

    <a
      href="/contact"
      className="mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
    >
      Échanger sur votre projet
      <ArrowRight size={18} />
    </a>

  </div>
</section>

    </main>

  );
}