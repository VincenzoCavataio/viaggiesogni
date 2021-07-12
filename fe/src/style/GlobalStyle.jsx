import styled from "styled-components";

const GlobalStyle = styled.main`

  font-family: "Courier New", Courier, monospace;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  .btn {
    background-color: transparent;
    box-shadow: none;
    border: 0.05em solid black;
    cursor: pointer;
    font-size: 16px;
    padding: 8px;
  }

  .white {
    color: white;
    border-color: white;
  }

  .big {
    font-size: 25px;
    padding: 12px 20px;
  }

  /* .teamCards {
    display: flex;
    flex-wrap: wrap;
  }

  .teamCards .authorCard {
    width: 45%;
    margin: 0 auto 20px; 
  }*/

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: black;
  }
 /*  @media screen and (max-width: 768px) {
    .teamCards {
      flex-direction: column;
    }

    .teamCards .authorCard {
      width: 90%;
    }
  } */
`;

export default GlobalStyle;
