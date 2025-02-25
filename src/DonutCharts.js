import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const DonutChart = () => {
    const [options] = useState({
        data: [
            { asset: "Entertaiment", amount: 50 },
            { asset: "Bills", amount: 750 },
            { asset: "Dining out", amount: 75 },
            { asset: "Personal Care", amount: 100 },
        ],
        series: [
            {
                type: "donut",
                calloutLabelKey: "asset",
                angleKey: "amount",
                innerRadiusRatio: 0.7,
            },
        ],
    });

    return <AgCharts options={options} />;
};

export default DonutChart;
