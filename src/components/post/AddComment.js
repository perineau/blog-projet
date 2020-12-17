import React, { useCallback } from "react";
import { addComment } from "../../data/request";
import styled from "@emotion/styled/macro";

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
`;

const Render = (props) => {
  const handlerSubmit = useCallback(
    (event) => {
      addComment(props.id, event.target.comment.value).then((result) => {
        let change = false;
        props.setIndex((index) => {
          if (index !== 0) {
            return 0;
          }
          change = true;

          return 0;
        });
        if (change) {
          props.setComments((comments) => {
            return [result, ...comments.slice(0, -1)];
          });
        }
      });
      event.target.comment.value = "";
      event.preventDefault();
    },
    [props]
  );
  return (
    <AddComment onSubmit={handlerSubmit}>
      <textarea name="comment"></textarea>
      <input type="submit" value="SUBMIT" />
    </AddComment>
  );
};

export default Render;
