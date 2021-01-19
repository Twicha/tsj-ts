import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { scrollTop } from "../../../../helpers/scroll-top";
import { toggleTheme } from "../../../store/ducks/theme/actionCreators";
import { selectTypeTheme } from "../../../store/ducks/theme/selectors";
import { darkTheme, lightTheme } from "../../theme/theme";
import { Logo, MobileMenuButton, NavigationList, Switcher } from "./components";

interface Props {}

const HeaderStyles = styled.header`
    width: calc(100% - 20px);
    max-width: 1100px;
    height: ${({ theme }) => theme.sizes.dtBarHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    transition: border 0.5s, background 0.5s;
    background: ${({ theme }) => theme.colors.background};
    z-index: 10000;
`;

const Wrapper = styled.div`
    display: flex;
`;

export const Header: React.FC<Props> = (): React.ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const theme = useSelector(selectTypeTheme);
    const checked = theme === "light";
    const [activeMenu, setActiveMenu] = React.useState(false);

    const switchTheme = (): void => {
        if (checked) {
            dispatch(
                toggleTheme({
                    theme: "dark",
                    activeTheme: darkTheme,
                })
            );
            localStorage.setItem("theme", "dark");
        } else {
            dispatch(
                toggleTheme({
                    theme: "light",
                    activeTheme: lightTheme,
                })
            );
            localStorage.setItem("theme", "light");
        }
    };

    const toggleMenu = () => {
        setActiveMenu((prev) => {
            return !prev;
        });
    };

    const onClickMenuItems = (e: any) => {
        if (document.documentElement.clientWidth < 1150) {
            setActiveMenu(false);
        }

        if (e.target.pathname === history.location.pathname) {
            scrollTop(0, "smooth");
        } else {
            scrollTop();
        }
    };

    return (
        <HeaderStyles>
            <Logo onClick={onClickMenuItems} />
            <Wrapper>
                <NavigationList active={activeMenu} onClick={onClickMenuItems} />
                <Switcher checked={checked} onClick={switchTheme} themeSwitcher={true} />
                <MobileMenuButton active={activeMenu} onClick={toggleMenu} />
            </Wrapper>
        </HeaderStyles>
    );
};
