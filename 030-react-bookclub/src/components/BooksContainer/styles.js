import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 40px;
  color: white;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "scroll")};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? "fixed" : "unset")};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800px) {
    padding: 120px 24px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 4px 0;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 24px;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 64px;
    grid-row-gap: 64px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;
