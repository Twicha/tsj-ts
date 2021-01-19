import React from "react";
import styled from "styled-components";

interface Props {}

const BlockTitleStyles = styled.h2`
    margin: 0 0 15px 0;
    padding: 0 0 0 10px;
    border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
    font-size: 32px;
`;

export const BlockTitle: React.FC<Props> = ({ children }): React.ReactElement => {
    return <BlockTitleStyles className="text">{children}</BlockTitleStyles>;
};
