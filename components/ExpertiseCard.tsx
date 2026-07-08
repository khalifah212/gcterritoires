export default function ExpertiseCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border p-6 hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}