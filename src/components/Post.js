import React, { useEffect, useState } from "react";
import { getComments, getPost } from "../data/request";
import { Loading, Comments, Post, Markdown } from "../style";
import Comment from "./post/Comment";
import AddComment from "./post/AddComment";
import ReactMarkdown from "react-markdown";
import Pagination from "./Pagination";

const Render = (props) => {
  const { id } = props.match.params;

  const [post, setPost] = useState(false);
  const [comments, setComments] = useState(false);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    getPost(id).then((response) => {
      setPost(response);
    });
  }, [setPost, id]);

  useEffect(() => {
    const number = 10;
    getComments(id, index, number).then((response) => {
      setComments(response.result);
      setCount(response.count);
      setMax(Math.ceil(response.count / number) - 1);
    });
  }, [setComments, id, setCount, index, setMax]);
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
          {count === 0 ? "No" : count} Comment
          {count <= 1 ? "" : "s"}
          {""}
          {count !== 0 ? ":" : "."}
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

      <Pagination index={index} setIndex={setIndex} lenght={max} />

      <AddComment id={post.id} setComments={setComments} setIndex={setIndex} />
    </main>
  );
};

export default Render;
