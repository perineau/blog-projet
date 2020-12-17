import React, { useCallback } from "react";
import { addComment } from "../../data/request";
import { AddComment } from "../../style";

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
