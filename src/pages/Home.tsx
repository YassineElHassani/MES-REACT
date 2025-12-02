import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <Link key={article.id} to={`/article/${article.id}`} className="relative bg-white shadow-md rounded-lg overflow-hidden hover:scale-[1.02] transition-transform">
            <img src={article.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {article.title}
              </h3>
            </div>
            <Link key={article.id} to={`/edit/${article.id}`} className="absolute top-3 right-3 bg-blue-100 hover:bg-black text-black text-sm font-medium px-3 py-1 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition">
              Edit
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
}
