import React, { Component } from 'react'

export default class TabRow extends Component {
    render() {
        const { data, onSelect, sound, type, color } = this.props;

        let tabs = [];

        data.forEach((info, inx) => {
            tabs.push((
                <div className={ info ? 'tab active' : 'tab' } className="tab" onClick={ () => onSelect(type, inx) } style={ { backgroundColor: info ? color : '' } }>

                </div>
            ))
        })

        return (
            <div className="tab-row">
                {
                    tabs
                }
            </div>
        )
    }
}
