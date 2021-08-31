import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Model } from '../../utils/enums/Model';
import { Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './Page.css';

const Page = ({ page, isVisible }: { readonly page: number, readonly isVisible: boolean }) => {
    const dispatch = useDispatch();
    const modelIsSelected: Model | undefined = useSelector((state: DefaultState) => state.product.model);
    const isSelected: React.CSSProperties = { borderBottom: '3px solid #FFB80B', color: '#FFB80B' };
    return (
        <div
            className={"name page"}
            style={isVisible ? isSelected : {}}
            onClick={() => modelIsSelected ? dispatchAction(dispatch, UPDATE_PAGE, page) : {}}>
            <p>{Pages[page]}</p>
        </div>)
}


export default Page;

