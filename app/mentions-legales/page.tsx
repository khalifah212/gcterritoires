import { ArrowRight } from "lucide-react";


export default function Mentions() {

  return (

    <main className="bg-[#fcfcfb]">


      {/* HERO */}

      <section>


        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">


          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">



            {/* TEXTE */}

            <div>


              <div className="inline-flex items-center gap-3">

                <span className="h-px w-10 bg-[#8F1D1D]" />


                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">

                  Informations légales

                </span>


              </div>




              <h1 className="mt-8 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">

                Mentions

                <br />

                <span className="text-[#8F1D1D]">
                  légales
                </span>

              </h1>




              <p className="mt-10 max-w-2xl text-xl leading-9 text-[#111]">

                GC Territoires accompagne les acteurs publics et privés
                dans leurs projets de développement territorial.

              </p>




              <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-gray-600">


                <p>

                  Le présent site est édité dans le cadre de l’activité
                  de GC Territoires.

                  Les informations diffusées ont vocation à présenter
                  les activités, expertises et services du cabinet.

                </p>



                <p>

                  Les contenus présents sur ce site (textes, éléments
                  graphiques, images et contenus éditoriaux) sont protégés
                  par les dispositions relatives à la propriété intellectuelle.

                </p>



                <p>

                  GC Territoires se réserve le droit de modifier,
                  compléter ou mettre à jour les informations publiées
                  sur ce site à tout moment.

                </p>


              </div>





              <div className="mt-12 flex flex-col gap-4 sm:flex-row">


                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#8F1D1D]
                    px-8
                    py-4
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#761818]
                    hover:shadow-lg
                  "
                >

                  Nous contacter

                  <ArrowRight size={17}/>

                </a>





                <a
                  href="/"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d8d8d8]
                    bg-white
                    px-8
                    py-4
                    text-sm
                    font-medium
                    text-[#111]
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >

                  Retour à l’accueil

                </a>


              </div>


            </div>







            {/* BLOC INFORMATIONS */}

            <aside className="hidden lg:flex items-start justify-end">


              <div
                className="
                  w-full
                  max-w-sm
                  rounded-3xl
                  border
                  border-[#ececec]
                  bg-white
                  p-10
                  shadow-sm
                "
              >


                <div className="h-px w-10 bg-[#8F1D1D]" />




                <h2 className="mt-8 text-2xl font-medium tracking-[-0.04em] text-[#111]">

                  GC Territoires

                </h2>



                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#8F1D1D]">

                  Conseil en stratégie territoriale

                </p>





                <div className="mt-10 space-y-8">


                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Éditeur du site
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      GC Territoires

                    </p>

                  </div>





                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Propriété intellectuelle
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      Les contenus du site sont protégés
                      par le droit de la propriété intellectuelle.

                    </p>

                  </div>





                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Responsabilité
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      Les informations publiées sont fournies
                      à titre indicatif.

                    </p>

                  </div>


                </div>




                <div className="my-10 border-t border-[#ececec]" />



                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">

                  Une information claire et transparente

                </p>


              </div>


            </aside>



          </div>


        </div>


      </section>


    </main>

  );

}