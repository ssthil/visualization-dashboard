$(function () {
Highcharts.setOptions({
     colors: ['#50B432', '#f00', '#DDDF00']
    });
        $('#chart_two').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5']
            },
            yAxis: {
                min: 0,
                title: {
                   text: ''
                }
                
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Up',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Down',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Unknown',
                data: [3, 4, 4, 2, 5]
            }]
        });
    });
    
