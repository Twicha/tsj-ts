import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    onClick: () => void;
}

const LogoStyles = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    font-size: 30px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Logo: React.FC<Props> = ({ onClick }): React.ReactElement => {
    return (
        <LogoStyles to="/" className="text" onClick={onClick}>
            ТСЖ Книжное
        </LogoStyles>
    );
};
