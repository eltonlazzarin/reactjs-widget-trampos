import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 413px;
    height: 55px;
    background-color: #241f1d;
    text-indent: 24px;
    color: #fff;

    h3 {
      margin-left: 6px;
      font-size: 15px;
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;
    height: 220px;
    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
      background: #55504d;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background: #dcdcdc;
    }

    ::-webkit-scrollbar-thumb {
      background: #dcdcdc;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    color: #fff;
    width: 407px;
    height: 55px;
    background: #2b2623;
    border-left: 6px solid #dfc125;
    border-bottom: 1px solid #38322f;

    &:hover {
      background: #38322f;
    }
  }

  div {
    margin-left: 24px;
  }

  a {
    text-decoration: none;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 10px;
    }
  }

  footer {
    width: 413px;
    height: 52px;
    background: #241f1d;
    text-indent: 24px;

    img {
      margin-top: 12px;
    }
  }
`;
