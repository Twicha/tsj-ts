import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "./arrow.svg";

interface Props {
    onPrevSlid: () => void;
    onNextSlid: () => void;
}

const ArrowWrap = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: -55px;
    cursor: pointer;

    @media (max-width: 1150px) {
        width: 30px;
        height: 30px;
        bottom: -40px;
    }
`;

const ArrowPrev = styled(ArrowWrap)`
    left: 0;
    transform: rotate(180deg);
`;

const ArrowNext = styled(ArrowWrap)`
    right: 0;
`;

const ArrowStyles = styled(ArrowSvg)`
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.text};
    transition: fill 0.5s;
    -webkit-filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.background});
    filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.background});
`;

export const SliderArrows: React.FC<Props> = ({
    onNextSlid,
    onPrevSlid,
}): React.ReactElement => {
    return (
        <div>
            <ArrowPrev onClick={onPrevSlid}>
                <ArrowStyles />
            </ArrowPrev>
            <ArrowNext onClick={onNextSlid}>
                <ArrowStyles />
            </ArrowNext>
        </div>
    );
};
