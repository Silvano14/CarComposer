export enum Model {
    i3,
    i8
}

export const getModelsAvailable = () => {
    return {
        [Model.i3]: {
            price: 42400
        },
        [Model.i8]: {
            price: 140700
        }
    }
}

export const getModels = (): number[] => Object.keys(Model).filter(k => typeof Model[k as any] !== "number") as unknown as number[];

