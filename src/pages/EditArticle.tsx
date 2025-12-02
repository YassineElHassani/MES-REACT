import { useParams } from "react-router-dom";

export default function EditArticle() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Edit Article #{id}</h2>
      <p className="text-gray-600">This is a Protected page</p>
    </div>
  );
}
