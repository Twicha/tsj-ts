import React from "react";
import styled from "styled-components";
import { NavigationLink } from "../../atoms";

const links = [
    { exact: true, to: "/", title: "Главная" },
    { exact: false, to: "/news", title: "Новости" },
    { exact: false, to: "/contacts", title: "Контакты" },
    { exact: false, to: "/admin", title: "Админка" },
];

interface Props {
    active: boolean;
    onClick: () => void;
}

const NavigationListStyles = styled.ul<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    @media (max-width: 1150px) {
        visibility: ${({ active }) => (active ? "visible" : "hidden")};
        opacity: ${({ active }) => (active ? "1" : "0")};
        transform: ${({ active }) => (active ? "translateY(0)" : "translateY(30px)")};
        position: fixed;
        top: ${({ theme }) => theme.sizes.dtBarHeight};
        left: 0;
        bottom: 0;
        right: 0;
        flex-direction: column;
        background-color: ${({ theme }) => theme.colors.background};
        transition: 0.5s;
    }
`;

export const NavigationList: React.FC<Props> = ({
    active,
    onClick,
}): React.ReactElement => {
    return (
        <NavigationListStyles active={active}>
            {links.map((item, index) => (
                <NavigationLink
                    key={`${index} + ${item.title}`}
                    exact={item.exact}
                    to={item.to}
                    onClick={onClick}
                >
                    {item.title}
                </NavigationLink>
            ))}
        </NavigationListStyles>
    );
};
