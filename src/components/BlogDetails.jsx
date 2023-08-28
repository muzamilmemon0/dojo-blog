import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:5000/blogs/" + id);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="space-y-4">
          <h2 className="text-xl text-[#f1356d] font-bold">{blog.title}</h2>
          <p className="text-xl text-[#f1356d] font-bold">
            Written by {blog.author}
          </p>
          <div className="text-justify">{blog.body}</div>
          <div className="flex space-x-2">
            <button
              onClick={handleDelete}
              className="bg-[#f1356d] text-white p-2 cursor-pointer"
            >
              delete
            </button>
            <Link
              to={`/blogs/${blog.id}/edit`}
              className="bg-[#f1356d] text-white p-2 cursor-pointer"
            >
              Edit
            </Link>
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
