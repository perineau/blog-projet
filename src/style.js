import styled from "@emotion/styled/macro";

export const Header = styled.header`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
    margin: 0px 10px;
  }

  padding: 10px;
  border-bottom: 2px black solid;
`;

export const Footer = styled.footer`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  display: flex;
  justify-content: center;
  padding: 10px;
  border-top: 1px black solid;
`;

export const Home = styled.main`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
  }

  li {
    list-style: none;
    margin-top: 20px;
  }
`;

export const ArticleList = styled.div`
  h1 {
  }
  sub {
    color: gray;
  }

  a {
    text-decoration: none;
  }
`;

export const Loading = styled.div``;

export const Markdown = styled.div``;

export const Post = styled.div`
  > h1 {
    padding: 0px;
    margin: 0px;
  }

  ${Markdown} {
    margin-top: 20px;
  }
`;

export const Comments = styled.div`
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

export const Comment = styled.div`
  > h1 {
    padding: 0px;
    margin: 0px;
  }

  ${Markdown} {
    margin-top: 20px;
    flex-basis: 100%;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const AddComment = styled.form`
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
