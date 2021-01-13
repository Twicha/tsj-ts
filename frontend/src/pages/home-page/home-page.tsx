import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cleanNews, requestNews } from "../../shared/store/ducks/news/actionCreators";
import {
    selectNewsItems,
    selectNewsStatus,
} from "../../shared/store/ducks/news/selectors";
import { Loader, NewsCard } from "../../shared/ui/atoms";

interface Props {}

const LoaderWrapperStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListStyles = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HomePage: React.FC<Props> = (): React.ReactElement => {
    const items = useSelector(selectNewsItems);
    const status = useSelector(selectNewsStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        document.title = "ТСЖ Книжное | Главная";

        dispatch(requestNews());

        return () => {
            dispatch(cleanNews());
        };
    }, [dispatch]);

    return (
        <div>
            {status === "loading" && (
                <LoaderWrapperStyles>
                    <Loader />
                </LoaderWrapperStyles>
            )}
            {status === "loaded" && (
                <ListStyles>
                    {items &&
                        items.map((item) => {
                            return (
                                <NewsCard
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    createdAt={item.createdAt}
                                />
                            );
                        })}
                </ListStyles>
            )}
            {status === "error" && <span className="text">Произошла ошибка...</span>}
        </div>
    );
};
