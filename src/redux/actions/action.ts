//action types created and exported
export const UPDATE_PAGE = "upload page";
export const UPDATE_PRODUCT = "update product";
export const UPDATE_PRICE = "update price";
export const UPDATE_MODEL = "update model";
export const UPDATE_COLOR = "update color";
export const REMOVE_ACCESSORY = "remove accessory";
export const ADD_ACCESSORY = "add accessory";
export const NEXT_PAGE = "next page";

export const uploadPage = () => ({
    type: UPDATE_PAGE
})

export const updateProduct = () => ({
    type: UPDATE_PRODUCT
})

export const updatePrice = () => ({
    type: UPDATE_PRICE
})

export const updateModel = () => ({
    type: UPDATE_MODEL
})

export const updateColor = () => ({
    type: UPDATE_COLOR
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

export const addAccessory = () => ({
    type: ADD_ACCESSORY
})

export const removeAccessory = () => ({
    type: REMOVE_ACCESSORY
})
