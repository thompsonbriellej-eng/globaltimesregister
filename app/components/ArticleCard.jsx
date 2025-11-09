export default function ArticleCard({ title, excerpt, image }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">{excerpt}</p>
      </div>
    </div>
  );
}
