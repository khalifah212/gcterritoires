import { ArrowUpRight } from "lucide-react";


export default function Footer() {

  return (

    <footer className="border-t border-[#ececec] bg-[#fcfcfb]">


      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">


        <div className="grid gap-12 text-center lg:grid-cols-[1.8fr_0.8fr_0.8fr] lg:gap-16 lg:text-left">



          {/* IDENTITÉ DU CABINET */}

          <div>


            <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#111]">
              GC Territoires
            </h3>



            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
              Conseil en stratégie territoriale
            </p>



            <p className="mt-8 max-w-xl text-base leading-8 text-gray-600">

              GC Territoires accompagne les collectivités territoriales,
              entreprises, investisseurs et opérateurs dans leurs projets
              de développement, d’implantation et de transformation des territoires.

            </p>




            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">

              Fondé par{" "}
              <span className="font-medium text-[#111]">
                Gabriel Cruzillac
              </span>,
              le cabinet intervient au croisement des enjeux publics,
              privés et territoriaux.

            </p>




            {/* SIGNATURE */}

           <div className="mx-auto mt-8 max-w-fit border-l-2 border-[#8F1D1D] pl-5 text-left">


              <p className="text-sm font-medium leading-6 text-[#111]">

                Faire émerger les projets.
                <br />
                Faciliter les décisions.
                <br />
                Accélérer les territoires.

              </p>


            </div>




            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-gray-500">

              Montpellier • Paris • Intervention nationale

            </p>


          </div>








          {/* NAVIGATION */}

          <div>


            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#111]">
              Navigation
            </h4>



            <nav className="mt-8 flex flex-col gap-4 text-sm">


              <a
                href="/"
                className="
                  text-gray-600
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                Accueil
              </a>




              <a
                href="/Notre-approche"
                className="
                  text-gray-600
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                Notre approche
              </a>




              <a
                href="/expertises"
                className="
                  text-gray-600
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                Expertises
              </a>




              <a
                href="/Gabriel-Cruzillac"
                className="
                  text-gray-600
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                Gabriel Cruzillac
              </a>




              <a
                href="/contact"
                className="
                  text-gray-600
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                Contact
              </a>


            </nav>


          </div>









          {/* CONTACT */}

          <div>


            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#111]">
              Contact
            </h4>




            <div className="mt-8 space-y-6 text-sm text-gray-600">


              <div>

                <p className="font-medium text-[#111]">
                  Téléphone
                </p>

                <p className="mt-1">
                  07 87 02 95 80
                </p>

              </div>





              <div>

                <p className="font-medium text-[#111]">
                  Email
                </p>

                <p className="mt-1">
                 gabriel.cruzillac@gcterritoires.fr
                </p>

              </div>





              <div>

                <p className="font-medium text-[#111]">
                  Localisation
                </p>

                <p className="mt-1">
                  Montpellier / Paris
                </p>

              </div>





              <a
                href="https://fr.linkedin.com/in/gabriel-cruzillac-114a8898"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >

                LinkedIn

                <ArrowUpRight size={15}/>

              </a>


            </div>


          </div>




        </div>









        {/* BAS DE PAGE */}

        <div
          className="
          mt-16
          flex
          flex-col
          items-center
          gap-4
          border-t
          border-[#ececec]
          pt-8
          text-center
          text-xs
          text-gray-500
          md:flex-row
          md:items-center
          md:justify-between
          "
        >



          <p>

            © {new Date().getFullYear()} GC Territoires.
            Tous droits réservés.

          </p>





          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">


            <a
              href="/mentions-legales"
              className="
                transition
                hover:text-[#8F1D1D]
              "
            >

              Mentions légales

            </a>




            <a
              href="/politique-confidentialite"
              className="
                transition
                hover:text-[#8F1D1D]
              "
            >

              Politique de confidentialité

            </a>


          </div>


        </div>



      </div>


    </footer>

  );

}
