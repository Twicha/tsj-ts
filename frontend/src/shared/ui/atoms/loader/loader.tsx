import React from "react";
import styled from "styled-components";
// import "./loader.css";

const LoaderStyles = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;
    }

    & div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background: ${({ theme }) => theme.colors.text};
        margin: -4px 0 0 -4px;
    }

    & div:nth-child(1) {
        animation-delay: -0.036s;
    }

    & div:nth-child(1):after {
        top: 63px;
        left: 63px;
    }

    & div:nth-child(2) {
        animation-delay: -0.072s;
    }

    & div:nth-child(2):after {
        top: 68px;
        left: 56px;
    }

    & div:nth-child(3) {
        animation-delay: -0.108s;
    }

    & div:nth-child(3):after {
        top: 71px;
        left: 48px;
    }

    & div:nth-child(4) {
        animation-delay: -0.144s;
    }

    & div:nth-child(4):after {
        top: 72px;
        left: 40px;
    }

    & div:nth-child(5) {
        animation-delay: -0.18s;
    }

    & div:nth-child(5):after {
        top: 71px;
        left: 32px;
    }

    & div:nth-child(6) {
        animation-delay: -0.216s;
    }

    & div:nth-child(6):after {
        top: 68px;
        left: 24px;
    }

    & div:nth-child(7) {
        animation-delay: -0.252s;
    }

    & div:nth-child(7):after {
        top: 63px;
        left: 17px;
    }

    & div:nth-child(8) {
        animation-delay: -0.288s;
    }

    & div:nth-child(8):after {
        top: 56px;
        left: 12px;
    }

    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Loader: React.FC = (): React.ReactElement => {
    return (
        <LoaderStyles>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaderStyles>
    );
};

// const LoaderStyles = styled.div<{ size: number }>`
//     display: inline-block;
//     position: relative;
//     width: ${({ size }) => size + "px"};
//     height: ${({ size }) => size + "px"};

//     & div {
//         animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//         transform-origin: ${({ size }) => size * 0.5 + "px"} ${({ size }) => size * 0.5 + "px"};
//     }

//     & div:after {
//         content: " ";
//         display: block;
//         position: absolute;
//         width: ${({ size }) => size * 0.0875 + "px"};
//         height: ${({ size }) => size * 0.0875 + "px"};
//         border-radius: 100%;
//         background: ${({ theme }) => theme.colors.text};
//         margin: ${({ size }) => "-" + size * 0.05 + "px"} 0 0
//             ${({ size }) => "-" + size * 0.05 + "px"};
//     }

//     & div:nth-child(1) {
//         animation-delay: -0.036s;
//     }

//     & div:nth-child(1):after {
//         top: ${({ size }) => size * 0.7875 + "px"};
//         left: ${({ size }) => size * 0.7875 + "px"};
//     }

//     & div:nth-child(2) {
//         animation-delay: -0.072s;
//     }

//     & div:nth-child(2):after {
//         top: ${({ size }) => size * 0.85 + "px"};
//         left: ${({ size }) => size * 0.7 + "px"};
//     }

//     & div:nth-child(3) {
//         animation-delay: -0.108s;
//     }

//     & div:nth-child(3):after {
//         top: ${({ size }) => size * 0.8875 + "px"};
//         left: ${({ size }) => size * 0.6 + "px"};
//     }

//     & div:nth-child(4) {
//         animation-delay: -0.144s;
//     }

//     & div:nth-child(4):after {
//         top: ${({ size }) => size * 0.9 + "px"};
//         left: ${({ size }) => size * 0.5 + "px"};
//     }

//     & div:nth-child(5) {
//         animation-delay: -0.18s;
//     }

//     & div:nth-child(5):after {
//         top: ${({ size }) => size * 0.8875 + "px"};
//         left: ${({ size }) => size * 0.4 + "px"};
//     }

//     & div:nth-child(6) {
//         animation-delay: -0.216s;
//     }

//     & div:nth-child(6):after {
//         top: ${({ size }) => size * 0.85 + "px"};
//         left: ${({ size }) => size * 0.3 + "px"};
//     }

//     & div:nth-child(7) {
//         animation-delay: -0.252s;
//     }

//     & div:nth-child(7):after {
//         top: ${({ size }) => size * 0.7875 + "px"};
//         left: ${({ size }) => size * 0.2125 + "px"};
//     }

//     & div:nth-child(8) {
//         animation-delay: -0.288s;
//     }

//     & div:nth-child(8):after {
//         top: ${({ size }) => size * 0.7 + "px"};
//         left: ${({ size }) => size * 0.15 + "px"};
//     }

//     @keyframes lds-roller {
//         0% {
//             transform: rotate(0deg);
//         }
//         100% {
//             transform: rotate(360deg);
//         }
//     }
// `;
