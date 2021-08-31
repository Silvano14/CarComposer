export enum Color {
    GreyMetallic,
    WhitePerlMetallic,
    White,
    MineralGrey,
    OrangeMetallic
}


export const getColorAvailable = () => {
    return {
        [Color.GreyMetallic]: {
            description: "Grey Metallic",
            price: 0,
            hexColor: "#303539"
        },
        [Color.WhitePerlMetallic]: {
            description: "White Perl Metallic",
            price: 1800,
            hexColor: "#D1D1D1"
        },
        [Color.White]: {
            description: "White",
            price: 0,
            hexColor: "#FFFFFF"
        },
        [Color.MineralGrey]: {
            description: "Mineral Grey",
            price: 550,
            hexColor: "#303539"
        },
        [Color.OrangeMetallic]: {
            description: "Orange",
            price: 550,
            hexColor: "#CF5A16"
        }
    }
}