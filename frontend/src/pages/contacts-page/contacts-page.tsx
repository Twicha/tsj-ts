import React from "react";
import styled from "styled-components";
import { YandexMap } from "../../shared/ui/organisms";

interface Props {}

const HeadingStyles = styled.h1`
    font-weight: 500;
    font-size: 28px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const ListStyles = styled.ul`
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
`;

const ListItemStyles = styled.li`
    margin-bottom: 15px;
    width: 48%;

    &:nth-last-child(1),
    &:nth-last-child(2) {
        margin-bottom: 0;
    }

    @media (max-width: 1150px) {
        width: 100%;
        font-size: 20px;

        &:not(:last-child) {
            margin-bottom: 25px;
        }
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        line-height: 145%;
    }
`;

const ListItemLinkStyles = styled.a`
    font-weight: 600;
`;

export const ContactsPage: React.FC<Props> = (): React.ReactElement => {
    React.useEffect(() => {
        document.title = "ТСЖ Книжное | Контакты";
    }, []);

    return (
        <div>
            <HeadingStyles className="text">Контактрая информация:</HeadingStyles>
            <ListStyles>
                <ListItemStyles className="text">
                    Наш адрес:&nbsp;
                    <ListItemLinkStyles
                        href="https://yandex.ru/maps/-/CCUIyMgbTA"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="text"
                    >
                        Россия, г. Калининград, ул. Павлика Морозова, д. 32
                    </ListItemLinkStyles>
                </ListItemStyles>
                <ListItemStyles className="text">
                    Наш E-mail:&nbsp;
                    <ListItemLinkStyles href="mailto:knignoe@gmail.com" className="text">
                        knignoe@gmail.com
                    </ListItemLinkStyles>
                </ListItemStyles>
                <ListItemStyles className="text">
                    Телефон председателя:&nbsp;
                    <ListItemLinkStyles href="tel:89999999999" className="text">
                        8 (999) 999 99 99
                    </ListItemLinkStyles>
                </ListItemStyles>
                <ListItemStyles className="text">
                    Телефон аварийной службы:&nbsp;
                    <ListItemLinkStyles href="tel:89999999988" className="text">
                        8 (999) 999 99 88
                    </ListItemLinkStyles>
                </ListItemStyles>
                <ListItemStyles className="text">
                    Телефон управляющей компании:&nbsp;
                    <ListItemLinkStyles href="tel:89999999977" className="text">
                        8 (999) 999 99 77
                    </ListItemLinkStyles>
                </ListItemStyles>
            </ListStyles>
            <YandexMap />
        </div>
    );
};
