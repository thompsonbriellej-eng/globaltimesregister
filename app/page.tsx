import ArticleCard from "./components/ArticleCard";



export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          The Global Times Register
        </h1>
        <p className="text-gray-600 mt-2">
          Independent journalism for a connected world.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard
          title="Breaking: Global Markets React to Overnight Shifts"
          excerpt="Analysts warn volatility will continue as new policies reshape the economic landscape."
          image="/placeholder.png"
        />
        <ArticleCard
          title="Inside the Rapid Rise of Urban AI Infrastructure"
          excerpt="Cities worldwide are adopting generative systems to manage transit, safety, and climate readiness."
          image="/placeholder.png"
        />
        <ArticleCard
          title="A New Era of Culture: Youth Movements Go Global"
          excerpt="From sports to street arts, young creators redefine influence in an interconnected world."
          image="/placeholder.png"
        />
      </section>
    </div>
  );
}
