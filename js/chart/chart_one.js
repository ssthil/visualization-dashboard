$(function () {
 Highcharts.setOptions({
     colors: ['#50B432', '#f00', '#DDDF00']
    });
    $('#chart_one').highcharts({
	
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Device status'
        },
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
                ['Up',   85.0],
                ['Down',       16.4],
                ['Unknown',     3.6]
              
            ]
        }]
    });
	
});