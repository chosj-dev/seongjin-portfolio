import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    color: {
        black: '#222831',
        gray: '#232323',
        blue: '#00ADB5',
        white: '#ffffff',
        gradient: 'linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)',

        green: '#346751',
        red: '#C84B31',
        baige: '#FEF8F1',

        neonBlue: '#001AFF',
        neonGreen: '#00FF94',

        textBlack: '#000000',
    },
};

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    laptop: customMediaQuery(1440),
    tablet: customMediaQuery(800),
    mobile: customMediaQuery(420),
};
