import { ReactNode } from "react";

export default function Section({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}