import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "./arrow.svg";

interface Props {
    items: {
        title?: string;
        text?: string;
        _id?: string;
        imgUrl: string;
    }[];
}

interface ItemStylesProps {
    visible: boolean;
}

interface ImgStylesProps {
    url: string;
}

interface DotsItemStylesProps {
    active: boolean;
}

const SliderWrapStyles = styled.div`
    margin-bottom: 50px;
`;

const SliderStyles = styled.ul`
    height: 300px;
    list-style: none;
    position: relative;
`;

const ItemStyles = styled.li<ItemStylesProps>`
    width: 100%;
    height: 100%;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    animation: show 0.5s linear forwards;

    @keyframes show {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

const LeftStyles = styled.div`
    padding: 0 30px 0 0;
    width: 50%;
    border-right: 2px solid ${({ theme }) => theme.colors.borderColor};
    transition: border 0.5s;

    @media (max-width: 1150px) {
        display: none;
    }
`;

const ImgStyles = styled.div<ImgStylesProps>`
    height: 100%;
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const RightStyles = styled.div`
    padding: 10px 50px 10px 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    transition: border 0.5s;

    @media (max-width: 1150px) {
        padding: 10px 0;
        width: 100%;
    }
`;

const TitleStyles = styled.h2`
    font-size: 36px;

@media (max-width: 480px) {
    font-size: 26px;
}
`;

const TextStyles = styled.p`
    font-size: 18px;

@media (max-width: 480px) {
    font-size: 16px;
}
`;

const LinkStyles = styled(Link)`
    font-size: 20px;

@media (max-width: 480px) {
    font-size: 18px;
}
`;

const ArrowWrap = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 130px;
    cursor: pointer;

@media (max-width: 1150px) {
    width: 30px;
    height: 30px;
    top: auto;
    bottom: -40px
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

const DotsStyles = styled.ul`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

const DotsItemStyles = styled.button<DotsItemStylesProps>`
    margin: 7px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme, active }) => (active ? theme.colors.text : "transparent")};
    transition: border 0.5s, background 0.5s;
`;

export const Slider: React.FC<Props> = ({ items }): React.ReactElement => {
    const [activeSlid, setActiveSlid] = React.useState(0);
    const [hover, setHover] = React.useState(false);

    const sliderTick = () => {
        setActiveSlid((prev) => {
            if (prev === items.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    };

    const onHover = () => {
        setHover(true);
    };

    const onNotHover = () => {
        setHover(false);
    };

    React.useEffect(() => {
        if (items.length > 1 && !hover) {
            const sliderTickInterval = setInterval(sliderTick, 5000);

            return () => {
                clearInterval(sliderTickInterval);
            };
        }
    }, [activeSlid, hover]);

    const onPrevSlid = () => {
        if (activeSlid === 0) {
            return;
        }

        setActiveSlid((prev) => prev - 1);
    };

    const onNextSlid = () => {
        if (activeSlid === items.length - 1) {
            return;
        }

        setActiveSlid((prev) => prev + 1);
    };

    return (
        <SliderWrapStyles onMouseOver={onHover} onMouseOut={onNotHover}>
            <SliderStyles>
                {items &&
                    items.map((item, index) => (
                        <ItemStyles
                            key={item._id || index}
                            visible={index === activeSlid}
                        >
                            <LeftStyles>
                                <ImgStyles url={item.imgUrl} />
                            </LeftStyles>
                            <RightStyles>
                                {item.title && (
                                    <TitleStyles className="text">
                                        {item.title}
                                    </TitleStyles>
                                )}
                                {item.text && (
                                    <TextStyles className="text">{item.text}</TextStyles>
                                )}
                                {item._id && (
                                    <LinkStyles to={`/news/${item._id}`} className="text">
                                        Читать полностью
                                    </LinkStyles>
                                )}
                            </RightStyles>
                        </ItemStyles>
                    ))}
                {activeSlid > 0 && (
                    <ArrowPrev onClick={onPrevSlid}>
                        <ArrowStyles />
                    </ArrowPrev>
                )}
                {activeSlid < items.length - 1 && (
                    <ArrowNext onClick={onNextSlid}>
                        <ArrowStyles />
                    </ArrowNext>
                )}
            </SliderStyles>
            <DotsStyles>
                {items.map((_, index) => (
                    <li key={index}>
                        <DotsItemStyles
                            active={activeSlid === index}
                            onClick={() => setActiveSlid(index)}
                        />
                    </li>
                ))}
            </DotsStyles>
        </SliderWrapStyles>
    );
};
