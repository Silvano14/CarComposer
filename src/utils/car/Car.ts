import { Accessories } from "../enums/Accessories";
import { Color } from "../enums/Color";
import { Model } from "../enums/Model";

abstract class Car {

    constructor(
        private _model: Model,
        private _color: Color[],
        private _accessories: Accessories[],
        private _description: string) { }

    set model(model: Model) {
        this._model = model;
    }

    get model(): Model {
        return this._model;
    }

    set color(color: Color[]) {
        this._color = color;
    }

    get color(): Color[] {
        return this._color;
    }

    set accessories(accessories: Accessories[]) {
        this._accessories = accessories;
    }

    get accessories(): Accessories[] {
        return this._accessories;
    }

    set description(description: string) {
        this._description = description;
    }

    get description(): string {
        return this._description;
    }

}

export class Bmw extends Car {
    constructor(model: Model) {
        switch (model) {
            case Model.i3:
                super(Model.i3,
                    [Color.White, Color.MineralGrey, Color.OrangeMetallic],
                    [Accessories.ChargingStation, Accessories.MaintenanceProgramUpgrade, Accessories.maintenanceProgramUpgradeOneYear],
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum."
                )
                break;
            case Model.i8:
                super(Model.i8,
                    [Color.GreyMetallic, Color.WhitePerlMetallic],
                    [Accessories.ChargingStation, Accessories.MaintenanceProgramUpgrade, Accessories.maintenanceProgramUpgradeOneYear, Accessories.LaserLight],
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum. "
                )
                break;
            default: console.log("errore")
        }
    }
}