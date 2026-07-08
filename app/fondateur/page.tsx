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

<div className="max-w-5xl">


<div className="inline-flex items-center gap-3">

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



<p className="mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f]">

Une expertise au croisement des collectivités territoriales,
de l’immobilier et du développement des territoires.

</p>


</div>

</div>

</section>




{/* PRESENTATION */}

<section className="border-t border-[#ececec] bg-white">

<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


<div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">



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

<div>


<h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

Une double culture publique
<br />
et opérationnelle.

</h2>



<div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">


<p>
Avec plus de vingt ans d’expérience dans le développement territorial,
l’immobilier et l’accompagnement de projets publics et privés à fort enjeu,
Gabriel Cruzillac accompagne les acteurs qui transforment les territoires.
</p>


<p>
Son parcours l’a conduit à travailler aux côtés des collectivités,
des élus, des aménageurs et des investisseurs, avec une compréhension
fine des enjeux institutionnels et opérationnels.
</p>


<p>
Cette complémentarité constitue l’ADN de GC Territoires :
comprendre les territoires, connecter les acteurs et faire émerger
des projets réalisables.
</p>


</div>



<a
href="/contact"
className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
>

Échanger avec le cabinet

<ArrowRight size={18}/>

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
au contact des territoires.

</h2>


</div>




<div className="mt-14 grid gap-6 lg:grid-cols-2">


{experiences.map((item)=>(

<div
key={item.title}
className="rounded-3xl border border-[#ececec] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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


<div className="border-l-2 border-[#8F1D1D] pl-8">


<span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
Vision du cabinet
</span>



<h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

Pourquoi GC Territoires ?

</h2>



<p className="mt-8 text-lg leading-8 text-gray-600">

GC Territoires accompagne les acteurs publics et privés
dans la structuration de projets territoriaux complexes,
en apportant une lecture stratégique, institutionnelle et opérationnelle.

</p>



<p className="mt-6 text-lg leading-8 text-gray-600">

L’objectif : sécuriser les décisions, faciliter les échanges
et accélérer la concrétisation des projets.

</p>


</div>


</div>


</section>





{/* CITATION */}

<section>

<div className="mx-auto max-w-5xl px-6 py-28 text-center">


<p className="text-4xl font-light leading-tight tracking-[-0.04em] text-[#111]">

« Les projets territoriaux se construisent autant
sur leur qualité technique que sur leur acceptabilité locale. »

</p>


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