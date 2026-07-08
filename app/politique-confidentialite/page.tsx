import { ArrowRight } from "lucide-react";


export default function Privacy() {

  return (

    <main className="bg-[#fcfcfb]">


      <section>


        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">


          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">



            {/* TEXTE PRINCIPAL */}

            <div>


              <div className="inline-flex items-center gap-3">

                <span className="h-px w-10 bg-[#8F1D1D]" />


                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">

                  Confidentialité

                </span>


              </div>





              <h1 className="mt-8 text-[3rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">

                Politique de

                <br />

                <span className="text-[#8F1D1D]">
                  confidentialité
                </span>

              </h1>





              <p className="mt-10 max-w-3xl text-xl leading-9 text-[#111]">

                GC Territoires accorde une attention particulière
                à la protection des données personnelles de ses interlocuteurs.

              </p>





              <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-gray-600">



                <p>

                  Les données personnelles collectées via les formulaires
                  de contact sont utilisées uniquement afin de répondre
                  aux demandes formulées par les utilisateurs.

                </p>





                <p>

                  Aucune donnée personnelle n’est vendue, louée ou transmise
                  à des tiers à des fins commerciales.

                  Les informations recueillies sont conservées uniquement
                  pendant la durée nécessaire au traitement de la demande.

                </p>





                <p>

                  Conformément au Règlement Général sur la Protection
                  des Données (RGPD), chaque utilisateur dispose d’un droit
                  d’accès, de rectification, de limitation ou de suppression
                  de ses données personnelles.

                </p>





                <p>

                  Pour exercer ces droits ou obtenir toute information
                  complémentaire, vous pouvez contacter directement
                  GC Territoires.

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
                  href="/mentions-legales"
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

                  Mentions légales

                </a>



              </div>



            </div>









            {/* BLOC LATERAL */}

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

                  Protection des données

                </h2>




                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#8F1D1D]">

                  Engagement du cabinet

                </p>







                <div className="mt-10 space-y-8">


                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Données sécurisées
                    </h3>


                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      Les informations transmises sont traitées
                      de manière confidentielle.

                    </p>


                  </div>







                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Usage limité
                    </h3>


                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      Les données sont utilisées uniquement
                      pour répondre aux sollicitations reçues.

                    </p>


                  </div>







                  <div>

                    <h3 className="text-sm font-medium text-[#111]">
                      Conformité RGPD
                    </h3>


                    <p className="mt-2 text-sm leading-6 text-gray-600">

                      Les droits des utilisateurs sont respectés
                      conformément à la réglementation applicable.

                    </p>


                  </div>



                </div>






                <div className="my-10 border-t border-[#ececec]" />





                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">

                  Transparence • Sécurité • Responsabilité

                </p>



              </div>



            </aside>





          </div>


        </div>


      </section>



    </main>

  );

}