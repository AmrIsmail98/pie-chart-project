import React, { useEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5001/data')
    .then(response => response.json())
    .then(data => {
        const chartData = Object.keys(data).map(key => ({
            category: key,
            value: data[key],
        }));
        setData(chartData);
        createChart(chartData);
    })
    .catch(err => console.error("Error fetching data:", err));

  
    }, []);

    const createChart = (chartData) => {
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.data = chartData;

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
    };

    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default App;
