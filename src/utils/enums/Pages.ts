export enum Pages {
    Models,
    Colors,
    Accessories,
    Summary
}

export const getPagesValues = (): number[] => Object.keys(Pages).filter(k => typeof Pages[k as any] !== "number") as unknown as number[];