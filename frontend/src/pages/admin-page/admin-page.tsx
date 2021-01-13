import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postedTime } from "../../helpers/posted-time";
import { cleanNews, requestNews } from "../../shared/store/ducks/news/actionCreators";
import {
    selectNewsItems,
    selectNewsStatus,
} from "../../shared/store/ducks/news/selectors";
import { Loader } from "../../shared/ui/atoms";
import { ReactComponent as Delete } from "./delete.svg";
import { ReactComponent as Edit } from "./edit.svg";

interface Props {}

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ListStyles = styled.ul`
    list-style: none;
`;

const ListItemStyles = styled.li`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin-bottom: 5px;
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.adminNewsItemBg};
        transition: background-color 0.5s;
    }
`;

const EditIcon = styled(Edit)`
    min-width: 40px;
    width: 40px;
    height: 40px;
    fill: #4444ff;
`;

const DeleteIcon = styled(Delete)`
    min-width: 40px;
    width: 40px;
    height: 40px;
    fill: red;
`;

export const AdminPage: React.FC<Props> = (): React.ReactElement => {
    const dispatch = useDispatch();
    const items = useSelector(selectNewsItems);
    const newsStatus = useSelector(selectNewsStatus);

    React.useEffect(() => {
        document.title = "ТСЖ Книжное | Административная панель";

        dispatch(requestNews());

        return () => {
            dispatch(cleanNews());
        };
    }, [dispatch]);

    return (
        <React.Fragment>
            <div>
                {newsStatus === "loading" && (
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                )}
                {newsStatus === "loaded" && (
                    <ListStyles>
                        {items &&
                            items.map((item) => (
                                <ListItemStyles key={item._id}>
                                    <div>
                                        <h2 className="text">{item.title}</h2>
                                        <small className="text">
                                            Опубликовано&nbsp;
                                            {postedTime(item.createdAt, true)}
                                        </small>
                                    </div>
                                    <div>
                                        <button>
                                            <EditIcon />
                                        </button>
                                        <button>
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </ListItemStyles>
                            ))}
                    </ListStyles>
                )}
                {newsStatus === "error" && (
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                )}
            </div>
        </React.Fragment>
    );
};
