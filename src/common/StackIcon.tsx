import styled from 'styled-components';
import Image from 'next/image';

const StackIcon = ({
    stack,
    iconwidth,
    wrapwidth,
    backgroundcolor,
}: StackIconProps) => {
    return (
        <IconBox wrapwidth={wrapwidth} backgroundcolor={backgroundcolor}>
            <Image
                src={`https://raw.githubusercontent.com/chosj-dev/seongjin-portfolio/main/src/assets/images/${stack}.svg`}
                alt={`${stack} images`}
                width={iconwidth}
                height={iconwidth}
                loading="lazy"
            />
        </IconBox>
    );
};

export default StackIcon;

interface StackIconProps {
    stack?: string;
    iconwidth?: number;
    wrapwidth?: number;
    backgroundcolor?: string;
}

export const IconBox = styled.div<StackIconProps>`
    display: flex;
    width: ${(props) => props.wrapwidth}px;
    height: ${(props) => props.wrapwidth}px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundcolor};
`;
