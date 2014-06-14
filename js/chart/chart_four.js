$(function () {
 Highcharts.setOptions({
     colors: ['#e36', '#693', '#bce', '#35f', '#fe6', '#dc2']
    });
    $('#chart_four').highcharts({
	
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Event by signature'
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
	
});