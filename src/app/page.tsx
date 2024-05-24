"use client";

import styled from "styled-components";
import Background from "components/Background";

export default function Home() {
  return (
    <Container>
      <Background />
      <InnerContainer></InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;
