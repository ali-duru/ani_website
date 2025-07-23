import React from "react";

type BlogProps = {
  title: string;
  date: string;
  content: string;
};

const Blog: React.FC<BlogProps> = ({ title, date, content }) => (
  <article className="prose mx-auto my-8">
    <h1>{title}</h1>
    <p className="text-gray-500">{date}</p>
    <div>{content}</div>
  </article>
);

export default Blog;
