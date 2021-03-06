import styled from "styled-components";

const AuthorCardS = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(196, 213, 235, 0.596);
  padding: 20px 30px;

  .avatar {
    width: 80px;
    height: 80px;
    background-color: azure;
    border-radius: 40px;
    overflow: hidden;
    margin-right: 30px;
    flex-shrink: 0;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export default AuthorCardS;
