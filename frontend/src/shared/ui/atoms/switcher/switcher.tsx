import React from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as MoonIcon } from "./moon.svg";

interface Props {
    onClick: () => void;
    checked: boolean;
    themeSwitcher?: boolean;
}

interface SwitcherStylesProps {
    completed: boolean;
}

const SwitcherStyles = styled.button<SwitcherStylesProps>`
    margin: 0 0 0 15px;
    padding: 0 4px;
    width: 55px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 20px;
    box-sizing: border-box;
    transition: 0.5s;
    background-color: transparent;

    &:before {
        top: -4px;
        right: -4px;
        content: "";
        display: block;
        position: absolute;
        width: 29px;
        height: 29px;
        border: 2px solid ${({ theme }) => theme.colors.text};
        box-sizing: border-box;
        border-radius: 100%;
        transform: ${({ completed }) =>
            !completed ? "translateX(0)" : "translateX(-31px)"};
        background-color: ${({ theme }) => theme.colors.background};
        transition: 0.5s;
    }

    @media (max-width: 1150px) {
        margin: 0 35px 0 0;
    }
`;

const SunIconStyles = styled(SunIcon)`
    width: 19px;
    height: 19px;
`;

const MoonIconStyles = styled(MoonIcon)`
    width: 19px;
    height: 19px;
    fill: white;
`;

export const Switcher: React.FC<Props> = ({
    checked,
    onClick,
    themeSwitcher,
}): React.ReactElement => {
    return (
        <SwitcherStyles completed={checked} onClick={onClick}>
            {themeSwitcher && (
                <React.Fragment>
                    <MoonIconStyles />
                    <SunIconStyles />
                </React.Fragment>
            )}
        </SwitcherStyles>
    );
};
