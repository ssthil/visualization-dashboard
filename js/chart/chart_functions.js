$(function () {
	//var chart;
	$(document).ready(function(){
	
		var cont_deviceStatus = new Highcharts.Chart({
			chart: {
				renderTo:'cont_deviceStatus',
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			 title: {
				text: 'Device status'
			},
			colors: ['#50B432', '#f00', '#FFD600'],
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
            type: 'pie',
            name: 'Device Status',
				data: [
					['Unknown',   85.0],
					['Down',       16.4],
					['Up',     3.6]
				  
				]
			}]
			
		});
		//container 2
		var cont_serviceStatus = new Highcharts.Chart({
		chart: {
			renderTo:'cont_serviceStatus',
            type: 'bar'
        },
		title: {
                text: ''
        },
		colors: ['#50B432', '#f00', '#FFD600'],
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
		series: [
			{
				name: 'Up',
				data: [5, 3, 4, 7, 2]
            },
			{
				name: 'Down',
                data: [2, 2, 3, 2, 1]
			},
			{
				name: 'Unknown',
                data: [3, 4, 4, 2, 5]
			}
		]
		});
		//container 3
		var cont_eventBySeverity = new Highcharts.Chart({
			chart: {
				renderTo:'cont_eventBySeverity',
                type: 'column',
				marginTop: 70
            },
            title: {
                text: ''
            },
			colors:['#B063B0', '#663366', '#4F4F9C' , '#333366', '#666699'],
            xAxis: {
                categories: ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -10,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 0px black, 0 0 0px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Medium',
                data: [5, 3, 4,5 , 2]
            }, {
                name: 'Informational',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Serious',
                data: [3, 4, 3, 2, 5]
            },{
				name:'Critical',
				data:[2, 2, 3, 2, 1]
			},{
				name:'N/A',
				data:[5, 3, 4, 3, 2]
			}
			]
		});
		// Container 4
		var cont_eventBySignature = new Highcharts.Chart({
			chart: {
			renderTo:'cont_eventBySignature',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Event by signature'
        },
		colors:['#007070', '#CCCC33', '#334D66', '#0066CC', '#FFB13D'],
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Event by signature',
            data: [
                ['Denial of Service',   85.0],
                ['Host Infection',       16.4],
                ['Worm',     3.6],
				['Sql Injection', 34.9],
				['Exploit Attempt', 45.0]
              
            ]
        }]
		});
		// Container 5
		var cont_openTickets = new Highcharts.Chart({
			chart: {
				renderTo:'cont_openTickets',
                type: 'column'
            },
            title: {
                text: 'Open tickets'
            },
			colors:['#FF7D05', '#50B432', '#058DC7' , '#DDDF00', '#F058D7'],
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
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
                data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194]
    
            }, {
                name: 'General ticket',
                data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83]
    
            }, {
                name: 'Problem management',
                data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65]
    
            }, {
                name: 'Device mangaement',
                data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39]
    
            },
			{
                name: 'Trouble ticket',
                data: [42, 73, 34, 59, 22, 75, 27, 60, 72, 45]
    
            }
			]
		});
		
		var cont_monitoredSecurity = new Highcharts.Chart({
			chart: {
				renderTo:'cont_monitoredSecurity',
                zoomType: 'xy'
            },
            title: {
                text: ''
            },
			colors:['#058DC7', '#001A33'],
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5', 'Device 6']
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Open tickets',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Total tickets',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 130,
                verticalAlign: 'top',
                y: 30,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Total tickets',
                type: 'column',
                yAxis: 1,
                data: [45, 71, 105, 130, 114, 106],
                tooltip: {
                    valueSuffix: ' '
                }
    
            }, {
                name: 'Open tickets',
                type: 'spline',
                data: [7, 8, 9, 14, 7, 5],
                tooltip: {
                    valueSuffix: ''
                }
            }]
		});
		
	}); // document end
   
});