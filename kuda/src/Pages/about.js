import React, { Component } from 'react'
import ButtonAppBar from '../components/navbar';
import TemporaryDrawer from '../components/drawer';
import PaperAbout from '../components/paperAbout';
import Education from '../components/education'

export class About extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <PaperAbout />
            </div>
        )
    }
}

export default About
