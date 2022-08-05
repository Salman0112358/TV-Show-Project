import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  background: black;
  border: solid black;
  border-radius: 25px;
`;

export const EpisodeDetails = styled.p`
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  color: white;
  font-weight: 600;
`;

export const EpisodeDescription = styled.p`
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  min-height: 200px;
  color: white;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1000px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 25px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
