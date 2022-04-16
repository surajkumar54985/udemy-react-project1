import React from "react";

import './chart.css';

import ChartBar from "./ChartBar";

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const TotalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={TotalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;