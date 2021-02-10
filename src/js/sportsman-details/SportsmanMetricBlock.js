import React from "react";
import "../../css/sportsman-details.css"
import {DetailsChart} from "./DetailsChart";


export class SportsmanMetricBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSportsman: this.props.currentSportsman
        }

    }

    render() {
        const { metrics, bigIconUrl, type, chartData } = this.props;

        return (
            <div className="d-flex flex-row justify-content-start sportsman-metric-block">
                <div className="d-flex h-100 justify-content-end align-items-center big-icon-wrapper">
                    <img src={bigIconUrl} height="110" alt=""/>
                </div>
                <div className="d-flex h-100 flex-column justify-content-center align-items-center metrics-wrapper">
                    {metrics}
                </div>
                <DetailsChart type={type} chartData={chartData}/>
            </div>
        );
    }

}