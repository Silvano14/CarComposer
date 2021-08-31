import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { Pages } from '../../utils/enums/Pages';
import Accessories from './Accessories';
import './Body.css';
import Colors from './Colors';
import Models from './Models';
import Summary from './Summary';

const Body = () => {
    const pageVisible: Pages = useSelector((state: DefaultState) => state.pageVisible);
    const [page, setPage] = useState<Pages>(Pages.Models);

    useEffect(() => {
        if (pageVisible)
            setPage(pageVisible);
    }, [setPage, pageVisible])

    return (
        <div className="body">
            {
                getCorrectPage(page)
            }
        </div>
    );
};

const getCorrectPage = (page: Pages): ReactElement => {
    switch (Pages[page]) {
        case Pages[Pages.Models]:
            return <Models />
        case Pages[Pages.Colors]:
            return <Colors />
        case Pages[Pages.Accessories]:
            return <Accessories />
        case Pages[Pages.Summary]:
            return <Summary />
        default: return <Models />
    }
}


export default Body;