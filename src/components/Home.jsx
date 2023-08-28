import React from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

function Home() {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:5000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
