import { Accessories } from '../../utils/enums/Accessories';
import { Color } from '../../utils/enums/Color';
import { Model } from '../../utils/enums/Model';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import { ADD_ACCESSORY, NEXT_PAGE, REMOVE_ACCESSORY, UPDATE_COLOR, UPDATE_MODEL, UPDATE_PAGE, UPDATE_PRICE, UPDATE_PRODUCT } from '../actions/action';

export type DefaultState = {
    pageVisible: Pages,
    product: { price: number, model?: Model, accessories: Accessories[], color?: Color, summary?: "" }
}

//initial state for redux store
export const initialState: DefaultState = { pageVisible: Pages.Models, product: { price: 0, accessories: [] } };

export const reducer = (state = initialState, action: any): any => {
    switch (action.type) {

        case UPDATE_PRODUCT: {
            return { ...state, product: { ...action.payload } }
        }

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
            return { ...state, product: { ...state.product, accessories: [...state.product.accessories, accessory] } }
        }

        case NEXT_PAGE: {
            if (state.pageVisible >= getPagesValues().length - 1)
                return state;
            return { ...state, pageVisible: state.pageVisible += 1, product: { ...state.product, } }
        }

        //returns default state, in case some unknown action type is discovered
        default: return state;
    }
}