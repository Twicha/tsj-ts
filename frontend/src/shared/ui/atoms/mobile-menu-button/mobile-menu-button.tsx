import React from "react";
import styled from "styled-components";

interface Props {
    active: boolean;
    onClick: () => void;
}

const ButtonStyles = styled.button<{ active: boolean }>`
    display: none;

    @media (max-width: 1150px) {
        width: 30px;
        min-height: 17px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            width: 100%;
            height: 3px;
            background: ${({ theme }) => theme.colors.text};
            transition: ${({ active }) =>
                active
                    ? "transform .2s .2s, opacity .1s .1s, margin .2s"
                    : "transform 0.2s, opacity 0.1s 0.2s, margin 0.2s 0.2s"};

            &:nth-child(1) {
                transform: ${({ active }) => (active ? "rotate(45deg)" : "rotate(0)")};
            }

            &:nth-child(2) {
                margin: ${({ active }) => (active ? "-3px" : "4px")} 0;
                opacity: ${({ active }) => (active ? "0" : "1")};
            }

            &:nth-child(3) {
                transform: ${({ active }) => (active ? "rotate(-45deg)" : "rotate(0)")};
            }
        }
    }
`;

export const MobileMenuButton: React.FC<Props> = ({
    active,
    onClick,
}): React.ReactElement => {
    return (
        <ButtonStyles active={active} onClick={onClick}>
            <div />
            <div />
            <div />
        </ButtonStyles>
    );
};
