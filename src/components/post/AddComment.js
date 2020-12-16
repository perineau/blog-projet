import React, { useCallback } from "react";
import { addComment } from "../../data/request";
import { AddComment } from "../../style";

const Render = (props) => {
  const handlerSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addComment(props.id, event.target.comment.value).then((result) => {
        props.setComments((comments) => [result, ...comments]);
      });
      event.target.comment.value = "";
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
