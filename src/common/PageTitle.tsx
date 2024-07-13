import React from 'react';
import styled from 'styled-components';
import { Frank_Ruhl_Libre } from 'next/font/google';

type textType = {
    text: string;
};

const frankRuhlLibre = Frank_Ruhl_Libre({
    subsets: ['latin'],
    weight: ['500'],
});

const PageTitle = ({ text }: textType) => {
    return <Title className={`${frankRuhlLibre.className}`}>{text}</Title>;
};

export default PageTitle;

const Title = styled.h2`
    width: 100%;
    max-width: 1300px;
    font-size: 2.5rem;
    color: #fff;
    margin: 30px 0 30px 120px;
`;
