import React from "react";
import styled from "styled-components";

interface Props {}

const year = new Date().getFullYear();

const FooterStyles = styled.footer`
    height: ${({ theme }) => theme.sizes.dtBarHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    transition: border 0.5s;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`;

const CopyrightStyles = styled.small`
    font-size: 16px;

    @media (max-width: 480px) {
        margin-top: 5px;
    }
`;

const CallbackStyles = styled.small`
    font-size: 16px;

    a {
        font-weight: 500;
        font-size: 16px;
    }
`;

export const Footer: React.FC<Props> = (): React.ReactElement => {
    return (
        <FooterStyles>
            <CopyrightStyles className="text">© 2019-{year} ТСЖ Книжное.</CopyrightStyles>
            <CallbackStyles className="text">
                По вопросам сайта:&nbsp;
                <a href="mailto:test@mail.ru" className="text">
                    test@mail.ru
                </a>
            </CallbackStyles>
        </FooterStyles>
    );
};
