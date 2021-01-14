import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postedTime } from "../../../../helpers/posted-time";

interface Props {
    title: string;
    createdAt: string;
    _id: string;
}

const NewsCardStyles = styled.li`
    margin-bottom: 30px;
    max-width: 100%;
    list-style: none;
`;

const LinkStyles = styled(Link)``;

const TitleStyles = styled.h2`
    margin-bottom: 7px;
    word-wrap: break-word;
`;

const TimestampStyles = styled.small`
    font-size: 16px;
    opacity: 0.6;
`;

export const NewsCard: React.FC<Props> = ({
    title,
    createdAt,
    _id,
}): React.ReactElement => {
    return (
        <NewsCardStyles className="text">
            <LinkStyles className="text" to={`news/${_id}`}>
                <TitleStyles>{title}</TitleStyles>
            </LinkStyles>
            <TimestampStyles>Опубликовано {postedTime(createdAt)}</TimestampStyles>
        </NewsCardStyles>
    );
};
