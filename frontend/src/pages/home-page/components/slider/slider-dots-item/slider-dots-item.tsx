import React from "react";
import styled from "styled-components";

interface Props {
    activeSlid: number;
    index: number;
    setActiveSlid: (index: number) => void;
}

interface DotsItemStylesProps {
    active: boolean;
}

const DotsItemStyles = styled.button<DotsItemStylesProps>`
    margin: 7px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme, active }) => (active ? theme.colors.text : "transparent")};
    transition: border 0.5s, background 0.5s;
`;

export const SliderDotsItem: React.FC<Props> = ({
    activeSlid,
    index,
    setActiveSlid,
}): React.ReactElement => {
    return (
        <DotsItemStyles
            active={activeSlid === index}
            onClick={() => setActiveSlid(index)}
        />
    );
};
