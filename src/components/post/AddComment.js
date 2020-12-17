import React, { useCallback } from "react";
import { addComment } from "../../data/request";
import { AddComment } from "../../style";

const Render = (props) => {
  const handlerSubmit = useCallback(
    (event) => {
      addComment(props.id, event.target.comment.value).then((result) => {
        props.setIndex((index) => {
          if (index !== 0) {
            return 0;
          }
          console.log(index);
          props.setComments((comments) => {
            console.log([result, ...comments.slice(0, -1)]);
            return [result, ...comments.slice(0, -1)];
          });

          return 0;
        });
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
