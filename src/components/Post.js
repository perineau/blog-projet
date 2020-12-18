import React, { useCallback, useEffect, useReducer } from "react";
import { getComments, getPost } from "../data/request";
import Markdown from "./Markdown";
import Loading from "./Loading";
import Comment from "./post/Comment";
import AddComment from "./post/AddComment";
import Pagination from "./Pagination";
import styled from "@emotion/styled/macro";
import { useParams } from "react-router-dom";

const number = 10;

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
  padding-top: 20px;
  margin-top: 20px 0px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "setIndex":
      return { ...state, index: action.index };
    case "setPost":
      return { ...state, post: action.post };
    case "setComments":
      return { ...state, comments: action.comments };
    case "setCount":
      return {
        ...state,
        count: action.count,
        max: Math.ceil(action.count / number) - 1,
      };
    case "addComment":
      return {
        ...state,
        comments: [action.comment, ...state.comments.slice(0, -1)],
        count: state.count + 1,
        max: Math.ceil((state.count + 1) / number) - 1,
      };

    default:
      return state;
  }
};

const Render = () => {
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, {
    post: false,
    comments: false,
    count: 0,
    index: 0,
    max: 0,
  });

  const handleSetIndex = useCallback(
    (newIndex) => {
      dispatch({ type: "setIndex", index: newIndex(state.index) });
    },
    [dispatch, state.index]
  );

  useEffect(() => {
    getPost(id).then((response) => {
      dispatch({ type: "setPost", post: response });
    });
  }, [dispatch, id]);

  useEffect(() => {
    getComments(id, state.index, number).then((response) => {
      dispatch({ type: "setComments", comments: response.result });
      dispatch({ type: "setCount", count: response.count });
    });
  }, [dispatch, id, state.index]);
  return (
    <main>
      <Post>
        {!state.post && <Loading />}
        <h1>{state.post.title}</h1>
        <sup>{state.post.created_at}</sup>
        <Markdown className="markdown">{state.post.content}</Markdown>
      </Post>

      <Comments>
        <h1>
          {state.count === 0 ? "No" : state.count} Comment
          {state.count <= 1 ? "" : "s"}
          {""}
          {state.count !== 0 ? ":" : "."}
        </h1>
        {!state.comments && <Loading />}
        <ul>
          {state.comments &&
            state.comments.map((comment) => (
              <li key={comment.id}>
                <Comment {...comment} />
              </li>
            ))}
        </ul>
      </Comments>

      <Pagination
        index={state.index}
        setIndex={handleSetIndex}
        lenght={state.max}
      />

      <AddComment state={state} dispatch={dispatch} id={id} />
    </main>
  );
};

export default Render;
