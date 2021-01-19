import React from "react";
import styled from "styled-components";
import { SliderArrows } from "./slider-arrows/slider-arrows";
import { SliderDots } from "./slider-dots/slider-dots";
import { SliderItem } from "./slider-item/slider-item";

interface Props {
    items: {
        title?: string;
        text?: string;
        newsId?: string;
        imgUrl: string;
    }[];
}

const SliderWrapStyles = styled.div``;

const SliderStyles = styled.ul`
    height: 300px;
    list-style: none;
    position: relative;
`;

export const Slider: React.FC<Props> = ({ items }): React.ReactElement => {
    const [activeSlid, setActiveSlid] = React.useState(0);
    const [hover, setHover] = React.useState(false);

    const onHover = () => {
        setHover(true);
    };

    const onNotHover = () => {
        setHover(false);
    };

    React.useEffect(() => {
        if (items.length > 1 && !hover) {
            const sliderTickInterval = setInterval(onNextSlid, 5000);

            return () => {
                clearInterval(sliderTickInterval);
            };
        }
    }, [activeSlid, hover, items.length]);

    const onPrevSlid = () => {
        if (activeSlid === 0) {
            setActiveSlid(items.length - 1);

            return;
        }

        setActiveSlid((prev) => prev - 1);
    };

    const onNextSlid = () => {
        if (activeSlid === items.length - 1) {
            setActiveSlid(0);

            return;
        }

        setActiveSlid((prev) => prev + 1);
    };

    return (
        <SliderWrapStyles onMouseOver={onHover} onMouseOut={onNotHover}>
            <SliderStyles>
                {items &&
                    items.map((item, index) => (
                        <SliderItem
                            key={item.newsId || index}
                            item={item}
                            index={index}
                            activeSlid={activeSlid}
                        />
                    ))}
                <SliderArrows onNextSlid={onNextSlid} onPrevSlid={onPrevSlid} />
            </SliderStyles>
            <SliderDots
                items={items}
                activeSlid={activeSlid}
                setActiveSlid={setActiveSlid}
            />
        </SliderWrapStyles>
    );
};
