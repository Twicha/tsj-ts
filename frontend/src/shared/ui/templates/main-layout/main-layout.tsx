import React from "react";
import styled from "styled-components";
import { Header } from "../";
import { Footer } from "../";

interface Props {}

const MainLayoutStyles = styled.div`
    margin: 0 auto;
    padding: ${({ theme }) => theme.sizes.dtBarHeight} 0 0 0;
    width: 100%;
    max-width: 1100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media (max-width: 1150px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width: 480px) {
    }
`;

const MainContent = styled.div`
    margin: 20px 0;
    flex: 1;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
`;

export const MainLayout: React.FC<Props> = ({ children }): React.ReactElement => {
    return (
        <MainLayoutStyles>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <MainContent>{children}</MainContent>
            <Footer />
        </MainLayoutStyles>
    );
};
