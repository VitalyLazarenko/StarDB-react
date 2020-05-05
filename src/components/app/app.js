import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import PeoplePage from "../people-page/people-page";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
};

