import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
    to: string;
    exact?: boolean;
    onClick: () => void;
}

const Wrapper = styled.li`
    margin: 0 15px 0 0;

    &:last-child {
        margin: 0 0 0 0;
    }

    @media (max-width: 1150px) {
        margin: 0 0 40px 0;

        &:last-child {
            margin: 0 0 0 0;
        }
    }
`;

const NavLinkStyles = styled(NavLink)`
    padding: 5px 10px;
    text-decoration: none;
    font-weight: 500;

    &.active {
        text-decoration: underline;
    }

    @media (max-width: 1150px) {
        font-size: 40px;
    }
`;

export const NavigationLink: React.FC<Props> = ({
    children,
    to,
    exact,
    onClick,
}): React.ReactElement => {
    return (
        <Wrapper>
            <NavLinkStyles exact={exact} to={to} className="text" onClick={onClick}>
                {children}
            </NavLinkStyles>
        </Wrapper>
    );
};
