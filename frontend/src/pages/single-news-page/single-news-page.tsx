import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postedTime } from "../../helpers/posted-time";
import { requestSingleNews } from "../../shared/store/ducks/single-news/actionCreators";
import {
    selectSingleNewsItem,
    selectSingleNewsStatus,
} from "../../shared/store/ducks/single-news/selectors";
import { Loader } from "../../shared/ui/atoms";

interface Props {
    match: any;
}

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SingleNewsPage: React.FC<Props> = ({ match }): React.ReactElement => {
    const dispatch = useDispatch();
    const item = useSelector(selectSingleNewsItem);
    const status = useSelector(selectSingleNewsStatus);
    const id = match.params.id;

    React.useEffect(() => {
        dispatch(requestSingleNews(id));
    }, [dispatch, id]);

    console.log(item);

    const posted = item && postedTime(item.createdAt);

    return (
        <div>
            {status === "loading" && (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            )}
            {status === "loaded" && item && (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <small>Опубликовано {posted}</small>
                </div>
            )}
            {status === "error" && <div>Произошла ошибка...</div>}
        </div>
    );
};
