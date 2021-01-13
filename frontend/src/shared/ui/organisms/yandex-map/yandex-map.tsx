import React from "react";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import styled from "styled-components";
import { selectTypeTheme } from "../../../store/ducks/theme/selectors";
import { Loader } from "../../atoms";

interface Props {}

interface MapStylesProps {
    dark: string;
}

const MapStyles = styled(Map)<MapStylesProps>`
    max-width: 1100px;
    width: 100%;
    height: 600px;
    filter: ${({ dark }) => (dark === "dark" ? "brightness(60%)" : "brightness(100%)")};
    transition: 0.5s;
    z-index: 1;

    @media (max-width: 1150px) {
        height: 400px;
    }
`;

const WrapperLoadMapStyles = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoadMapStyles = styled.p`
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 30px;
`;

export const YandexMap: React.FC<Props> = (): React.ReactElement => {
    const theme = useSelector(selectTypeTheme);
    const [mapLoaded, setMapLoaded] = React.useState(false);

    const onMapLoad = () => {
        setMapLoaded(true);
    };

    return (
        <div style={{ zIndex: 1 }}>
            {!mapLoaded && (
                <WrapperLoadMapStyles>
                    <LoadMapStyles className="text">
                        Карта еще загружается...
                    </LoadMapStyles>
                    <Loader />
                </WrapperLoadMapStyles>
            )}
            <YMaps>
                <MapStyles
                    defaultState={{
                        center: [54.678468, 20.471617],
                        zoom: 17,
                        controls: [],
                    }}
                    modules={["control.ZoomControl"]}
                    onLoad={onMapLoad}
                    instanceRef={(ref: any) => {
                        ref && ref.behaviors.disable("scrollZoom");
                    }}
                    dark={theme}
                >
                    <ZoomControl
                        options={{
                            position: {
                                right: 20,
                                top: 20,
                            },
                            size: "small",
                        }}
                    />
                    <Placemark defaultGeometry={[54.678468, 20.471617]} />
                </MapStyles>
            </YMaps>
        </div>
    );
};
