import { Dispatch } from "react";

export const dispatchAction = (dispatch: Dispatch<any>, type: string, payload?: any) =>
    dispatch({ type, payload })