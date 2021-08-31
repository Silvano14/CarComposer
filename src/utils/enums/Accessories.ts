export enum Accessories {
    ChargingStation,
    MaintenanceProgramUpgrade,
    maintenanceProgramUpgradeOneYear,
    LaserLight,
}

export const getAccessoriesAvailable = () => {
    return {
        [Accessories.ChargingStation]: {
            description: "BMW Chargin Station",
            price: 1080
        },
        [Accessories.MaintenanceProgramUpgrade]: {
            description: "BMW Maintenance Program Upgrade",
            price: 1895
        },
        [Accessories.maintenanceProgramUpgradeOneYear]: {
            description: "1 year BMW Maintenance Program Upgrade",
            price: 975
        },
        [Accessories.LaserLight]: {
            description: "BMW Laserlight",
            price: 975
        }
    }
}