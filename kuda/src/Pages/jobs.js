import React, { Component } from 'react'
import ButtonAppBar from '../components/navbar';
import PaperJobs from '../components/paperJobs';

export class Jobs extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <PaperJobs />
            </div>
        )
    }
}

export default Jobs
