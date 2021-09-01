export enum Pages {
    Models = 0,
    Colors = 1,
    Accessories = 2,
    Summary = 3
}

export const getPagesValues = (): number[] => Object.keys(Pages).filter(k => typeof Pages[k as any] !== "number") as unknown as number[];