import styled from "styled-components";

export const Image = styled.div<{ url: string; width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ url }) => url});
  background-size: contain;
`;
