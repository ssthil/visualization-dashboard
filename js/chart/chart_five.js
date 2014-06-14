$(function () {
Highcharts.setOptions({
     colors: ['#FF7D05', '#4890FC', '#935CCE' , '#FC687F', '#D5CC09']
    });
        $('#chart_five').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Open tickets'
            },
           // subtitle: {
           //     text: 'Source: WorldClimate.com'
          //  },
            xAxis: {
                categories: [
                    'Device 1',
                    'Device 2',
                    'Device 3',
                    'Device 4',
                    'Device 5',
                    'Device 6',
					'Device 7',
					'Device 8',
					'Device 9',
					'Device 10'
                    
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Health and availability',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]
    
            }, {
                name: 'General ticket',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5]
    
            }, {
                name: 'Problem management',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2]
    
            }, {
                name: 'Device mangaement',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1]
    
            },
			{
                name: 'Trouble ticket',
                data: [42.4, 73.2, 34.5, 59.7, 22.6, 75.5, 27.4, 60.4, 72.6, 45.1]
    
            }
			]
        });
		
    });
    
