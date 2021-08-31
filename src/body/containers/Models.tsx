import React from 'react';
import { getModels, Model } from '../../utils/enums/Model';
import CarModel from '../components/CarModel';
import './Models.css';

const Models = () => {
    return (
        <div className="model">
            {getModels().map((el, index) => <CarModel key={index} model={Model[el] as unknown as Model} />)}
        </div>
    );
};

export default Models;