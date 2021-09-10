import React from 'react';
import { Button } from '../../utils';
import { MenuList } from './MenuList';
import './Header.css';

export const Header = () =>
    <div className="header">
        <Button className="btn-homepage" label="< Article & Download" />
        <div className="title menu">
            <h1> Product Builder </h1>
            <MenuList />
        </div>
    </div>
