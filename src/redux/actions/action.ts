//action types created and exported
export const UPDATE_PAGE = "update page";
export const UPDATE_PRICE = "update price";
export const UPDATE_MODEL = "update model";
export const UPDATE_COLOR = "update color";
export const REMOVE_ACCESSORY = "remove accessory";
export const ADD_ACCESSORY = "add accessory";
export const NEXT_PAGE = "next page";
export const PREVIOUS_PAGE = "previous page";
export const SHOW_ALERT_MODEL = "show alert model";

export const uploadPage = () => ({
    type: UPDATE_PAGE
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

export const previousPage = () => ({
    type: PREVIOUS_PAGE
})

export const addAccessory = () => ({
    type: ADD_ACCESSORY
})

export const removeAccessory = () => ({
    type: REMOVE_ACCESSORY
})

export const showAlertModel = () => ({
    type: SHOW_ALERT_MODEL
})
