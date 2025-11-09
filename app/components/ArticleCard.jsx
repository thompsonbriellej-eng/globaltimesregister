interface ArticleCardProps {
  title: string;
  excerpt: string;
  image?: string;
}

export default function ArticleCard({ title, excerpt, image }: ArticleCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
      </div>
    </article>
  );
}
