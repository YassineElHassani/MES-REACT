import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import AddToCartButton from '../components/AddToCartButton';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold text-red-600">Article not found.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">{article.title}</h2>
      <img src={article.image} className="w-full rounded-lg mb-6" />
      <p className="text-lg leading-relaxed mb-8">{article.content}</p>
      <button onClick={() => navigate("/")} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mr-[450px]">Back to Home</button>
      <AddToCartButton article={{ id: article.id, title: article.title, price: article.price }} />
    </div>
  );
}
