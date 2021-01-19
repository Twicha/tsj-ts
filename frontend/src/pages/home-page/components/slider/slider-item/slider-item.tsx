import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    item: {
        title?: string;
        text?: string;
        newsId?: string;
        imgUrl: string;
    };
    index: number;
    activeSlid: number;
}

interface ItemStylesProps {
    visible: boolean;
}

interface ImgStylesProps {
    url: string;
}

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
    padding: 10px 0 10px 30px;
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

export const SliderItem: React.FC<Props> = ({
    item,
    index,
    activeSlid,
}): React.ReactElement => {
    return (
        <ItemStyles visible={index === activeSlid}>
            <LeftStyles>
                <ImgStyles url={item.imgUrl} />
            </LeftStyles>
            <RightStyles>
                {item.title && <TitleStyles className="text">{item.title}</TitleStyles>}
                {item.text && <TextStyles className="text">{item.text}</TextStyles>}
                {item.newsId && (
                    <LinkStyles to={`/news/${item.newsId}`} className="text">
                        Читать полностью
                    </LinkStyles>
                )}
            </RightStyles>
        </ItemStyles>
    );
};
