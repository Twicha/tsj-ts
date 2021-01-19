import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    selectHomeNewsItems,
    selectHomeNewsStatus,
} from "../../shared/store/ducks/home/selectors";
import { BlockTitle, Loader, NewsCard } from "../../shared/ui/atoms";
import { MiniAbout, Slider } from "./components";
import {
    cleanHomeNews,
    requestHomeNews,
} from "../../shared/store/ducks/home/actionCreators";

const sliderItems = [
    {
        title: "Тарифы 2021 г.",
        text: "Актуальная информация по тарифам на ЖКХ",
        newsId: "5fff5da565fac540bc92d8b1",
        imgUrl:
            "https://images.unsplash.com/photo-1594907841536-e747e8df5b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
        title: "Ограницения для проездных",
        text: "Ограничения для проездных в общественном транспорте с 1 февраля 2021 г.",
        newsId: "5fff5e9b65fac540bc92d8b2",
        imgUrl:
            "https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
        title: "Цены на товары",
        text: "Повышение цен на все категории товаров в 2021 г.",
        newsId: "5fff5da565fac540bc92d8b3",
        imgUrl:
            "https://images.unsplash.com/photo-1610589359059-9c2ca412758b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80",
    },
    {
        title: "Ограницения для проездных",
        text: "Ограничения для проездных в общественном транспорте с 1 февраля 2021",
        newsId: "5fff5e9b65fac540bc92d8b4",
        imgUrl:
            "https://images.unsplash.com/photo-1610579604920-01af0b6cae50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
        title: "Тарифы 2020",
        text: "Актуальная информация по тарифам",
        newsId: "5fff5da565fac540bc92d8b5",
        imgUrl:
            "https://images.unsplash.com/photo-1610576243540-afb3a3b17701?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
        title: "Ограницения для проездных",
        text: "Ограничения для проездных в общественном транспорте с 1 февраля 2021",
        newsId: "5fff5e9b65fac540bc92d8b6",
        imgUrl:
            "https://images.unsplash.com/photo-1610572624680-66b7e021f299?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
];

interface Props {}

const MainNewsWrapperStyles = styled.div`
    margin-bottom: 50px;
`;

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

const LastNewsWrapperStyles = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

const MoreNewsStyles = styled(Link)`
    margin-top: 10px;
    align-self: center;
    font-size: 30px;
`;

export const HomePage: React.FC<Props> = (): React.ReactElement => {
    const items = useSelector(selectHomeNewsItems);
    const status = useSelector(selectHomeNewsStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        document.title = "ТСЖ Книжное | Главная";

        dispatch(requestHomeNews());

        return () => {
            dispatch(cleanHomeNews());
        };
    }, [dispatch]);

    return (
        <div>
            <MainNewsWrapperStyles>
                <BlockTitle>Главные новости</BlockTitle>
                <Slider items={sliderItems} />
            </MainNewsWrapperStyles>
            <LastNewsWrapperStyles>
                <BlockTitle>Последние новости</BlockTitle>
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
                <MoreNewsStyles to="/news" className="text">
                    Показать больше
                </MoreNewsStyles>
            </LastNewsWrapperStyles>
            <div>
                <BlockTitle>Краткая информация о ТСЖ</BlockTitle>
                <MiniAbout />
            </div>
        </div>
    );
};
