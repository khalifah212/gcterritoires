import {
  Mail,
  Phone,
  Clock,
  LinkIcon,
  MapPin,
  ArrowRight,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";


export default function ContactPage() {

  return (

    <main className="bg-[#fcfcfb]">


      {/* HERO */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

          <div className="max-w-5xl text-center lg:text-left">

            <div className="flex items-center justify-center gap-3 lg:justify-start">

              <span className="h-px w-10 bg-[#8F1D1D]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                Contact
              </span>

            </div>


            <h1 className="mt-8 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">

              Parlons de votre projet.

              <br />

              <span className="text-[#8F1D1D]">
                Construisons les prochaines étapes.
              </span>

            </h1>


            <p className="mx-auto mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f] lg:mx-0">

              GC Territoires accompagne collectivités, entreprises,
              investisseurs et opérateurs dans leurs projets de développement,
              d’implantation et de transformation territoriale.

            </p>


          </div>

        </div>

      </section>





      {/* FORMULAIRE + INFOS */}

      <section className="border-y border-[#ececec] bg-white">


        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">


            {/* FORMULAIRE */}

            <div className="text-center lg:text-left">


              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#111]">

                Échangeons sur votre projet

              </h2>


              <p className="mt-4 text-lg text-gray-600">

                Décrivez-nous vos enjeux, nous reviendrons vers vous rapidement.

              </p>


              <ContactForm />


            </div>





            {/* INFORMATIONS */}

            <aside>


              <div className="rounded-3xl border border-[#ececec] bg-[#fcfcfb] p-8 text-center lg:p-10 lg:text-left">


                <div className="mx-auto h-px w-10 bg-[#8F1D1D] lg:mx-0" />


                <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em] text-[#111]">

                  GC Territoires

                </h3>


                <p className="mt-4 text-sm leading-7 text-gray-600">

                  Cabinet de conseil en stratégie territoriale,
                  fondé par Gabriel Cruzillac.

                </p>




                <div className="mt-10 space-y-7">


                  <Info
                    icon={<Mail size={18}/>}
                    title="Email"
                    text="gabriel.cruzillac@gcterritoires.fr"
                  />


                  <Info
                    icon={<Phone size={18}/>}
                    title="Téléphone"
                    text="07 87 02 95 80"
                  />


                  <Info
                    icon={<LinkIcon size={18}/>}
                    title="LinkedIn"
                    text="Gabriel Cruzillac"
                  />


                  <Info
                    icon={<MapPin size={18}/>}
                    title="Localisation"
                    text="Montpellier / Paris"
                  />


                  <Info
                    icon={<Clock size={18}/>}
                    title="Horaires"
                    text={"Lundi - Vendredi\n9h00 - 18h00"}
                  />


                </div>


                <div className="my-8 border-t border-[#e5e5e5]" />


                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">

                  Réponse sous 24 à 48h

                </p>


              </div>


            </aside>


          </div>


        </div>


      </section>





      {/* CARTE */}

      <section className="border-t border-[#ececec]">

        <iframe
          title="Carte Google"
          src="https://www.google.com/maps?q=Montpellier%20Paris&output=embed"
          loading="lazy"
          className="h-72 w-full lg:h-[450px]"
        />

      </section>





      {/* CTA FINAL */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">

          <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[#111111] lg:text-5xl">
            Un projet territorial à faire avancer&nbsp;?
          </h2>


          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5f5f5f]">
            Échangeons sur vos enjeux de développement, d’implantation ou de
            transformation des territoires.
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





function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {


  return (

    <div className="flex justify-center gap-4 text-left lg:justify-start">


      <div className="mt-1 text-[#8F1D1D]">
        {icon}
      </div>


      <div>

        <p className="font-medium text-[#111]">
          {title}
        </p>


        <p className="mt-1 whitespace-pre-line text-sm leading-6 text-gray-600">
          {text}
        </p>


      </div>


    </div>

  );

}