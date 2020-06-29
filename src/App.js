import React, { Component } from 'react'
import TabRow from './components/TabRow'

import './App.css'

export default class App extends Component {

    state = {
        tabs: []
    }

    componentWillMount() {
        let tabs = [], row = [];
        for (let i = 0; i < 5; i++) 
            row.push(false);
        for (let i = 0; i < 3; i++) 
            tabs.push(row);
        this.setState({
            tabs
        })
    }

    onSelect(row, inx) {
        let { tabs } = this.state;
        console.log(row, inx)
        let r = tabs[row].slice();
        r[inx] = !r[inx];
        tabs[row] = r;

        console.log(tabs)

        this.setState({
            tabs
        })
    }    

    render() {
        const { tabs } = this.state;

        let sounds = ['kick.mp3', 'snare.mp3', 'snare2.mp3'];
        let colors = ['#33ffff', '#33ff66', '#ff3366'];

        return (
            <div>
                {
                    tabs.map((row, inx) => {
                        return (
                            <TabRow data={ row } type={ inx } sound={ sounds[inx] } onSelect={ (row, inx) => this.onSelect(row, inx) } color={ colors[inx] } />
                        )
                    })
                }
            </div> 
        )
    }
}
