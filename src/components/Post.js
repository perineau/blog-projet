import React, { useEffect, useState } from "react";
import { getComments, getPost } from "../data/request";
import Markdown from "./Markdown";
import Loading from "./Loading";
import Comment from "./post/Comment";
import AddComment from "./post/AddComment";
import Pagination from "./Pagination";
import styled from "@emotion/styled/macro";

const Post = styled.div`
  > h1 {
    padding: 0px;
    margin: 0px;
  }

  .markdown {
    margin-top: 20px;
  }
`;

const Comments = styled.div`
  > ul {
    margin: 0px;
    padding: 0px;
  }
  > ul > li {
    list-style: none;
    margin-top: 20px;
    background-color: #fff780;
    padding: 20px;
  }

  > h1 {
    margin: 0px;
    padding: 0px;
  }

  border-top: 1px black solid;
  padding: 20px 0px;
  margin-top: 20px;
`;

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
        {!post && <Loading />}
        <h1>{post.title}</h1>
        <sup>{post.created_at}</sup>
        <Markdown className="markdown">{post.content}</Markdown>
      </Post>

      <Comments>
        <h1>
          {count === 0 ? "No" : count} Comment
          {count <= 1 ? "" : "s"}
          {""}
          {count !== 0 ? ":" : "."}
        </h1>
        {!comments && <Loading />}
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
