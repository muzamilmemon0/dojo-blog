import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:5000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="max-w-[400px] mx-auto mt-0 mb-0 ">
      <h2 className="font-bold text-[#f1356d] text-2xl">Add a new blog</h2>
      <form
        onSubmit={handleSubmit}
        className="flex sm:flex-col space-y-3 md:flex-col"
      >
        <label className="text-left block text-xl">Blog title:</label>
        <input
          className="border-2  text-left"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="text-left block text-xl">Blog body:</label>
        <textarea
          className="border-2 "
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-left block text-xl">Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="hover:border-black border-2"
        >
          <option value="mario" className="">
            mario
          </option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className="bg-[#f1356d] text-white border-0 px-8 py-2 rounded cursor-pointer">
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default Create;
