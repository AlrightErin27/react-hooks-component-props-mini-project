import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);

  // for (let i = 0; i < posts.length; i++) {
  //   console.log("🍄", posts[i].title);
  // }
  const postItems = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });

  return (
    <main>
      ArticleList:
      {postItems}
    </main>
  );
}

export default ArticleList;
