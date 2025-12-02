import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <Link key={article.id} to={`/article/${article.id}`} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-[1.02] transition">
            <img src={article.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
