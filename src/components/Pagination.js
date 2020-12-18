import styled from "@emotion/styled/macro";
import React, { useCallback, useState, useEffect } from "react";

export const Index = styled.div`
  button {
    padding: 0.5em 1em;
    margin: 0;
    background-color: #f1f0ee;
  }

  .active > button {
    background-color: #3ed667;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  margin-top: 20px;
  display: flex;
`;

const maxCase = 7;

const range = (min, max) => {
  return [...Array(max - min + 1)].map((el, index) => index + min);
};

const Render = (props) => {
  const handlePage = useCallback(
    (ev) => {
      if (ev.target.textContent === "...") {
        return;
      }
      props.setIndex(ev.target.textContent - 1);
    },
    [props]
  );

  const handlePrevious = useCallback(() => {
    props.setIndex((index) => {
      if (index === 0) {
        return index;
      }
      return index - 1;
    });
  }, [props]);

  const handleNext = useCallback(() => {
    props.setIndex((index) => {
      if (index === props.lenght) {
        return index;
      }
      return index + 1;
    });
  }, [props]);

  const [cases, setCase] = useState([]);

  useEffect(() => {
    const pageIndex = props.index + 1;
    const pageMax = props.lenght + 1;
    if (pageMax <= maxCase) {
      setCase(range(1, pageMax));
      return;
    }

    const baseCases = [
      ...range(1, 2),
      -10,
      -1,
      -10,
      ...range(pageMax - 1, pageMax),
    ];
    const index = baseCases.indexOf(pageIndex);

    if (index === -1) {
      setCase(
        baseCases.map((el, index) =>
          index === Math.floor(maxCase / 2) ? pageIndex : el
        )
      );
      return;
    }
    setCase(
      baseCases.reduce((res, el) => (el === -1 ? [...res] : [...res, el]), [])
    );
  }, [props.index, props.lenght, setCase]);

  if (props.lenght <= 0) {
    return "";
  }

  return (
    <Index>
      <button onClick={handlePrevious}>previous</button>
      <ul>
        {cases.map((el, index) => (
          <li key={index} className={el === props.index + 1 ? "active" : ""}>
            <button onClick={handlePage} disabled={el === -10 ? true : false}>
              {el === -10 ? "..." : el}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>next</button>
    </Index>
  );
};
export default Render;
