import { Accessories } from '../../utils/enums/Accessories';
import { Color } from '../../utils/enums/Color';
import { Model } from '../../utils/enums/Model';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import { ADD_ACCESSORY, NEXT_PAGE, PREVIOUS_PAGE, REMOVE_ACCESSORY, SHOW_ALERT_MODEL, UPDATE_COLOR, UPDATE_MODEL, UPDATE_PAGE, UPDATE_PRICE } from '../actions/action';

export type DefaultState = {
    pageVisible: Pages,
    showAlertModel?: boolean,
    product: {
        price: number,
        model?: Model,
        accessories: Array<{ accessory: Accessories, isSelected: boolean }>,
        color: Color,
        summary?: "",
    }
}

export type AccessoriesStored = Array<{ accessory: Accessories, isSelected: boolean }>

//initial state for redux store
export const initialState: DefaultState = { pageVisible: Pages.Models, showAlertModel: false, product: { accessories: [], price: 0, color: Color.White | Color.GreyMetallic } };

export const reducer = (state = initialState, action: any): any => {
    switch (action.type) {

        case UPDATE_PRICE: {
            return { ...state, product: { ...state.product, price: action.payload ?? 0 } }
        }

        case UPDATE_COLOR: {
            return { ...state, product: { ...state.product, color: action.payload } }
        }

        case UPDATE_MODEL: {
            return { ...state, product: { ...state.product, model: action.payload } }
        }

        case UPDATE_PAGE: {
            return { ...state, pageVisible: action.payload ?? Pages.Models }
        }

        case REMOVE_ACCESSORY: {
            const { accessory, price } = action.payload;
            const accessoriesFiltered = state.product.accessories?.filter(el => el === accessory);
            state.product.price -= price;
            return { ...state, product: { ...state.product, accessories: accessoriesFiltered } }
        }

        case ADD_ACCESSORY: {
            const { accessory, price } = action.payload;
            state.product.price += price;
            state.product.accessories?.push({ accessory, isSelected: true });
            return { ...state };
        }

        case NEXT_PAGE: {
            if (state.pageVisible >= getPagesValues().length - 1)
                return state;
            let checkPageVisible: number = 0;

            // Sometimes we have some problem caused by Enums,
            if (typeof state.pageVisible === 'string') {
                checkPageVisible = parseInt(state.pageVisible);
                return { ...state, pageVisible: checkPageVisible += 1 }
            }

            return { ...state, pageVisible: state.pageVisible += 1 }

        }

        case PREVIOUS_PAGE: {
            if (!state.pageVisible)
                return state;
            let checkPageVisible: number = 0;

            // Sometimes we have some problem caused by Enums,
            if (typeof state.pageVisible === 'string') {
                checkPageVisible = parseInt(state.pageVisible);
                return { ...state, pageVisible: checkPageVisible -= 1 }
            }

            return { ...state, pageVisible: state.pageVisible -= 1 }

        }

        case SHOW_ALERT_MODEL: {
            return { ...state, showAlertModel: !!action.payload }
        }

        default: return state;
    }
}