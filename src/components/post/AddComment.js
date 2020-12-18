import styled from "@emotion/styled/macro";
import React, { useCallback } from "react";

import { addComment } from "../../data/request";

const AddComment = styled.form`
  textarea {
    min-width: 400px;
    min-height: 150px;
    width: 100%;
  }

  input {
    align-self: end;
    flex: none;
    padding: 1em 1.5em;
  }
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Render = (props) => {
  const { dispatch } = props;
  const handlerSubmit = useCallback(
    (event) => {
      addComment(props.id, event.target.comment.value).then((result) => {
        dispatch({ type: "addComment", comment: result });
      });
      event.target.comment.value = "";
      event.preventDefault();
    },
    [dispatch, props.id]
  );
  return (
    <AddComment onSubmit={handlerSubmit}>
      <textarea name="comment"></textarea>
      <input type="submit" value="SUBMIT" />
    </AddComment>
  );
};

export default Render;
