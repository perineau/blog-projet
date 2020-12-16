import styled from "@emotion/styled";

export const Header = styled.header`
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
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top: 1px black solid;
`;

export const Home = styled.main`
  > div {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
  }

  li {
    list-style: none;
    margin-top: 20px;
  }

  display: flex;
  justify-content: center;
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
