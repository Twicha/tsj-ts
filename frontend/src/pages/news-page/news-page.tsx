import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    selectNewsItems,
    selectNewsPage,
    selectNewsStatus,
} from "../../shared/store/ducks/news/selectors";
import { Loader, NewsCard } from "../../shared/ui/atoms";
import { cleanNews, requestNews } from "../../shared/store/ducks/news/actionCreators";
import { Link } from "react-router-dom";

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

export const NewsPage: React.FC<Props> = (): React.ReactElement => {
    const items = useSelector(selectNewsItems);
    const page = useSelector(selectNewsPage);
    const status = useSelector(selectNewsStatus);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(0);

    React.useEffect(() => {
        document.title = "ТСЖ Книжное | Новости";

        const limit = !!new URLSearchParams(window.location.search).get("limit")
            ? Number(new URLSearchParams(window.location.search).get("limit"))
            : 10;
        const page = !!new URLSearchParams(window.location.search).get("page")
            ? Number(new URLSearchParams(window.location.search).get("page"))
            : 1;

        dispatch(requestNews(`?limit=${limit}&page=${page}`));

        return () => {
            dispatch(cleanNews());
        };
    }, [dispatch, currentPage]);

    const onPagination = (page: number) => {
        setCurrentPage(page);
    };

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

            <ul>
                {page &&
                    Array(page)
                        .fill(1)
                        .map((_, index) => (
                            <li key={index + 1}>
                                <Link
                                    to={`/news?limit=10&page=${index + 1}`}
                                    onClick={() => onPagination(index + 1)}
                                >
                                    {index + 1}
                                </Link>
                            </li>
                        ))}
            </ul>
        </div>
    );
};
