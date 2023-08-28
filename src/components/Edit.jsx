import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    // Fetch blog data by id and populate the input fields
    fetch("http://localhost:5000/blogs/" + id)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { title, body };

    // Update the blog data on the server
    fetch("http://localhost:5000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then(() => {
        navigate(`/blogs/${id}`); // Redirect to updated blog details
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-lg font-semibold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <label className="block text-lg font-semibold">Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border rounded p-2 w-full h-32"
        />
        <button
          type="submit"
          className="bg-[#f1356d] text-white px-4 py-2 rounded hover:bg-[#d41d5a]"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default Edit;
