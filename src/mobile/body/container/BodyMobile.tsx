import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../../redux/reducers/reducer';
import { Pages } from '../../../utils/enums/Pages';
import ModelMobile from '../components/ModelMobile';
import AccessoriesMobile from './AccessoriesMobile';
import './BodyMobile.css';
import ColorsMobile from './ColorsMobile';
import SummaryMobile from './SummaryMobile';

const BodyMobile = () => {
    const pageVisible: Pages = useSelector((state: DefaultState) => state.pageVisible);
    const [page, setPage] = useState<Pages>(Pages.Models);

    useEffect(() => {
        if (pageVisible !== undefined)
            setPage(pageVisible);
    }, [setPage, pageVisible])

    return (
        <div className="body-mobile">
            {
                getCorrectPage(page)
            }
        </div>
    );
};

const getCorrectPage = (page: Pages): ReactElement => {
    switch (Pages[page]) {
        case Pages[Pages.Models]:
            return <ModelMobile />
        case Pages[Pages.Colors]:
            return <ColorsMobile />
        case Pages[Pages.Accessories]:
            return <AccessoriesMobile />
        case Pages[Pages.Summary]:
            return <SummaryMobile />
        default: return <ModelMobile />
    }
}


export default BodyMobile;