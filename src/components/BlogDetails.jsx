import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:5000/blogs/" + id);

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="space-y-4">
          <h2 className="text-xl text-[#f1356d] font-bold">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="text-justify">{blog.body}</div>
          <button
            onClick={handleClick}
            className="bg-[#f1356d] text-white p-2 cursor-pointer"
          >
            delete
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
