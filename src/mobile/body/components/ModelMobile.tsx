import React from 'react';
import CarModel from '../../../body/components/CarModel';
import { getModels, Model } from '../../../utils/enums/Model';
import './ModelMobile.css'

const ModelMobile = () => {
    return (
        <div className="model-mobile">
            {getModels().map((el, index) => <CarModel key={index} model={Model[el] as unknown as Model} />)}
        </div>
    );
};

export default ModelMobile;