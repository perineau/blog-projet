import React, { useEffect, useState } from "react";
import { getComments, getPost } from "../data/request";
import { Loading, Comments, Post, Markdown } from "../style";
import Comment from "./post/Comment";
import AddComment from "./post/AddComment";
import ReactMarkdown from "react-markdown";

const Render = (props) => {
  const { id } = props.match.params;

  const [post, setPost] = useState(false);
  const [comments, setComments] = useState(false);

  useEffect(() => {
    getPost(id).then((response) => {
      setPost(response);
    });
  }, [setPost, id]);

  useEffect(() => {
    getComments(id).then((response) => {
      setComments(response);
    });
  }, [setComments, id]);
  return (
    <main>
      <Post>
        {!post && <Loading>Loading ...</Loading>}
        <h1>{post.title}</h1>
        <sup>{post.created_at}</sup>
        <Markdown>
          <ReactMarkdown children={post.content} />
        </Markdown>
      </Post>

      <Comments>
        <h1>
          {comments.length === 0 ? "No" : comments.length} Comment
          {comments.length <= 1 ? "" : "s"}
          {""}
          {comments.length !== 0 ? ":" : "."}
        </h1>
        {!comments && <Loading>Loading ...</Loading>}
        <ul>
          {comments &&
            comments.map((comment) => (
              <li key={comment.id}>
                <Comment {...comment} />
              </li>
            ))}
        </ul>
      </Comments>

      <AddComment id={post.id} setComments={setComments} />
    </main>
  );
};

export default Render;
