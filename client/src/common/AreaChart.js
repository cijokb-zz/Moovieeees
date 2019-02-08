//@flow
import React from 'react';
import Chart from 'react-google-charts';

type Props = {
    data: Array<[]>
};

const AreaChart = ({ data }: { data: Props }) => {
    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '50%', height: '70%' },
                tooltip: { isHtml: false, trigger: 'visible' },
                'legend': 'left',
                'is3D': true,
                // lineWidth: 25
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default AreaChart;
