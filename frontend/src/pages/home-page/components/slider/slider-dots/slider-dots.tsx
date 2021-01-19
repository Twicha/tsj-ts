import React from "react";
import styled from "styled-components";
import { SliderDotsItem } from "../slider-dots-item/slider-dots-item";

interface Props {
    items: {
        title?: string;
        text?: string;
        newsId?: string;
        imgUrl: string;
    }[];
    activeSlid: number;
    setActiveSlid: (index: number) => void;
}

const SliderDotsStyles = styled.ul`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    @media (max-width: 1150px) {
        height: 50px;
    }
`;

export const SliderDots: React.FC<Props> = ({
    items,
    activeSlid,
    setActiveSlid,
}): React.ReactElement => {
    return (
        <SliderDotsStyles>
            {items &&
                items.map((_, index) => (
                    <li key={index}>
                        <SliderDotsItem
                            index={index}
                            activeSlid={activeSlid}
                            setActiveSlid={setActiveSlid}
                        />
                    </li>
                ))}
        </SliderDotsStyles>
    );
};
