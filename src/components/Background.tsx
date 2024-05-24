'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const Background = () => {
    const [bgColor, setBgColor] = useState<string>(theme.color.baige);
    return (
        <Container>
            <BackgroundImage bgColor={bgColor} />
        </Container>
    );
};

const BackgroundImage = styled.div<{ bgColor: string }>`
    width: 100%;
    max-width: 1800px;
    min-height: 100vh;
    height: 100;
    margin: 0 auto;
    background-color: ${({ bgColor }) => bgColor};
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
`;

export default Background;
