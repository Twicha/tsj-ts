import React from "react";
import styled from "styled-components";
import img from "./img.jpg";

interface Props {}

const MiniAboutStyles = styled.div`
    display: flex;
    align-items: center;
`;

const TextStyles = styled.p`
    padding: 0 0 0 30px;
    width: 50%;
    font-size: 18px;
    line-height: 139%;
`;

const ImgStyles = styled.div`
    width: 50%;
    height: 320px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const MiniAbout: React.FC<Props> = (): React.ReactElement => {
    return (
        <MiniAboutStyles>
            <ImgStyles />
            <TextStyles className="text">
                <b>Товарищество собственников жилья (ТСЖ) Книжного</b> — юридическое лицо,
                некоммерческая организация, созданная на основе объединения собственников помещений
                многоквартирного дома, которые находятся в совместном владении и пользовании, а
                также для ведения хозяйственной деятельности в таком доме и на земле, находящейся в
                совместном владении, в форме эксплуатации общего имущества, строительства
                дополнительных помещений и объектов общего имущества, а также сдачи в аренду, внаём
                части общего имущества в многоквартирном доме. Данный сайт выполняет только
                информирующую функцию, и не выполняет ни каких коммерческих деятельностей и т.п.
            </TextStyles>
        </MiniAboutStyles>
    );
};
