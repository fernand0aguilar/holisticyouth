import React, { Component } from 'react';

import Intro from '../components/Intro'

import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'


export class Wrapper extends Component {
    render(){
        return <div>
            <Intro></Intro>
            <One></One>
            <Two></Two>
            <Three></Three>
        </div>
    }
}

export default Wrapper;