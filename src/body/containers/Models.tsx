import React from 'react';
import { getModels, Model } from '../../utils/enums/Model';
import CarModel from '../components/CarModel';
import './Models.css';

const styleImage: React.CSSProperties = {
    width: '370px',
    height: '170px',
}

const Models = () =>
    <div className="model">
        {getModels().map((el, index) => <CarModel style={styleImage} key={index} model={Model[el] as unknown as Model} />)}
    </div>

export default Models;