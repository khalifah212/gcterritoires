import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";


/* ---------------- SEO ---------------- */

export const metadata: Metadata = {
  title:
    "Notre approche | Conseil en développement territorial | GC Territoires",

  description:
    "GC Territoires accompagne collectivités, entreprises et aménageurs avec une méthode structurée pour comprendre les enjeux territoriaux, connecter les acteurs et concrétiser les projets.",

  keywords: [
    "approche développement territorial",
    "conseil territorial",
    "stratégie territoriale",
    "accompagnement collectivités",
    "aménagement du territoire",
    "relations acteurs publics privés",
  ],

  alternates: {
    canonical: "/approche",
  },

  openGraph: {
    title: "Notre approche | GC Territoires",
    description:
      "Une méthode structurée pour accompagner les projets de développement territorial.",
    type: "website",
    locale: "fr_FR",
  },
};



export default function ApproachPage() {


const steps = [
{
number:"01",
title:"Comprendre",

intro:
"Analyser les dynamiques territoriales, économiques et institutionnelles pour poser un diagnostic stratégique précis.",

text:
"Identifier les acteurs clés, les enjeux fonciers, les contraintes réglementaires et les opportunités afin de construire une vision partagée du projet.",
},

{
number:"02",
title:"Connecter",

intro:
"Créer les conditions du dialogue entre acteurs publics, privés et institutionnels.",

text:
"Le cabinet facilite les échanges entre parties prenantes, aligne les intérêts et accompagne la prise de décision collective.",
},

{
number:"03",
title:"Concrétiser",

intro:
"Transformer les intentions stratégiques en projets opérationnels.",

text:
"Accompagner la mise en œuvre des projets jusqu'à leur réalisation en sécurisant les dimensions stratégiques, juridiques et opérationnelles.",
},
];


return (

<main className="bg-[#fcfcfb]">


{/* FAQ SCHEMA */}

<Script
id="approach-faq-schema"
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"FAQPage",

"mainEntity":[

{
"@type":"Question",
"name":"Quelle est l'approche de GC Territoires ?",

"acceptedAnswer":{
"@type":"Answer",
"text":"GC Territoires applique une méthode en trois étapes : comprendre les enjeux territoriaux, connecter les acteurs publics et privés, puis concrétiser les projets."
}
},

{
"@type":"Question",
"name":"Pourquoi faire appel à un cabinet de conseil territorial ?",

"acceptedAnswer":{
"@type":"Answer",
"text":"Un cabinet de conseil territorial permet de structurer les projets, faciliter le dialogue entre acteurs et sécuriser leur mise en œuvre."
}
}

]

})
}}
/>



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

GC Territoires accompagne les collectivités territoriales,
entreprises et aménageurs selon une approche structurée permettant
de comprendre les enjeux, connecter les acteurs et concrétiser
les projets de développement territorial.

</p>


</div>

</div>

</section>





{/* ETAPES */}

<section className="border-t border-[#ececec]">


<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


<h2 className="sr-only">
Méthode d'accompagnement territorial en trois étapes
</h2>


<div className="grid gap-12 lg:grid-cols-3">


{steps.map((step,index)=>(

<article
key={step.number}
className={
index !== 0
?
"border-t border-[#ececec] pt-10 lg:border-t-0 lg:border-l lg:pl-10"
:""
}
>


<div className="text-xs font-semibold tracking-[0.2em] text-[#8F1D1D]">
{step.number}
</div>



<h3 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-[#111]">
{step.title}
</h3>



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





{/* SECTION SEO */}

<section className="border-y border-[#ececec] bg-white">

<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


<div className="max-w-4xl">


<h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

Une approche adaptée aux enjeux des territoires.

</h2>


<p className="mt-8 text-lg leading-8 text-gray-600">

Notre accompagnement repose sur une compréhension fine des
dynamiques locales, économiques et institutionnelles.
GC Territoires aide les acteurs publics et privés à structurer
leurs projets d’aménagement, d’implantation et de développement.

</p>


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
les projets, faciliter les échanges et accélérer leur mise en œuvre.

</p>


<Link
href="/expertises"
className="mt-8 inline-flex items-center gap-2 text-[#8F1D1D] font-medium"
>
Découvrir nos expertises
<ArrowRight size={18}/>
</Link>


</div>




<div className="rounded-3xl border border-[#ececec] bg-[#fcfcfb] p-10">


<div className="h-px w-10 bg-[#8F1D1D]" />


<h3 className="mt-8 text-2xl font-medium tracking-[-0.04em]">
Une approche orientée résultats
</h3>



<p className="mt-6 text-sm leading-7 text-gray-600">

Chaque intervention vise à transformer une intention initiale
en stratégie claire, partagée et réalisable.

</p>


</div>


</div>


</div>


</section>





{/* CTA */}

<section className="border-t border-[#ececec] bg-white">

<div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">


<h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[#111111] lg:text-5xl">

Un projet à structurer ?

</h2>



<p className="mt-8 max-w-2xl text-lg leading-9 text-[#5f5f5f]">

Parlons de vos enjeux de développement territorial
et de mise en œuvre opérationnelle.

</p>



<Link
href="/contact"
className="mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
>

Échanger sur votre projet

<ArrowRight size={18}/>

</Link>


</div>

</section>


</main>

);

}