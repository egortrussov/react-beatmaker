import React, { Component } from 'react'
import TabRow from './components/TabRow'

import './App.css'

export default class App extends Component {

    state = {
        tabs: [],
        isPlaying: false
    }

    componentWillMount() {
        let tabs = [], row = [];
        for (let i = 0; i < 8; i++) 
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

    sound() {
        // console.log(this)
        const { tabs } = this.state;

        for (let i = 0; i < tabs[0].length; i++) {
            setTimeout(() => {
                for (let j = 0; j < 3; j++) {
                    let row = tabs[j].slice();
                    if (row[i]) {
                        let audio = document.querySelector(`audio.sound-${ j }`);
                        audio.play()
                    }
                }
            }, 500 * i)
        }
    }

    onPlay() {
        let { isPlaying, tabs } = this.state;


        isPlaying = !isPlaying;

        if (isPlaying) {
            this.sound();
            this.playInt = setInterval(this.sound.bind(this), tabs[0].length * 500)
        } else {
            clearInterval(this.playInt);
        }

        this.setState({
            isPlaying
        })
    }

    render() {
        const { tabs, isPlaying } = this.state;

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
                <button onClick={ () => this.onPlay() } className="play">{ isPlaying ? 'Stop' : 'play' }</button>

                {
                    sounds.map((sound, inx) => (
                        <audio className={ `sound-${ inx }` }>
                            <source src={ `/sounds/${ sounds[inx] }` } />
                        </audio>
                    ))
                }
            </div> 
        )
    }
}
