/*highstock*/
var $assetTime = transformsec();
var oldJson = [1.04502,1.04505,1.04507,1.04506,1.04511,1.04513,1.04515,1.04514,1.04511,1.04514,1.04512,1.04509,1.04505,1.04509,1.04508,1.04495,1.04495,1.04495,1.04488,1.04489,1.04490,]
var newJson = [1.04493,1.04489,1.04492,1.04480,1.04475,1.04481,1.04475,1.04481,1.04485,1.04485,1.04489,1.04489,1.04495,1.04495,1.04496,1.04494,1.04490,1.04488,1.04486,1.04489,1.04491,1.04488,1.04486,1.04492,1.04493,1.04498,1.04505,1.04506,1.04507,1.04506,1.04504,1.04504,1.04507,1.04507,1.04508,1.04510,1.04512,1.04511,1.04514,1.04516,1.04515,1.04515,1.04514,1.04513,1.04511,1.04509,1.04511,1.04514,1.04510,1.04506,1.04506,1.04504,1.04503,1.04505,1.04504,1.04504,1.04502,1.04497,1.04500,1.04502,1.04502,1.04501,1.04497,1.04501,1.04502,1.04497,1.04503,1.04503,1.04502,1.04498,1.04497,1.04499,1.04499,1.04495,1.04494,1.04496,1.04501,1.04501,1.04500,1.04499,1.04507,1.04506,1.04505,1.04507,1.04506,1.04507,1.04523,1.04523,1.04534,1.04532,1.04531,1.04533,1.04529,1.04533,1.04527,1.04529,1.04529,1.04527,1.04528,1.04519,1.04517,1.04519,1.04527,1.04526,1.04527,1.04526,1.04530,1.04533,1.04534,1.04534,1.04535,1.04537,1.04537,1.04534,1.04536,1.04534,1.04534,1.04533,1.04529,1.04529,1.04527,1.04526,1.04527,1.04521,1.04517,1.04517,1.04513,1.04506,1.04509,1.04507,1.04507,1.04507,1.04506,1.04507,1.04507,1.04508,1.04507,1.04507,1.04507,1.04507,1.04510,1.04514,1.04514,1.04511,1.04510,1.04506,1.04508,1.04509,1.04509,1.04509,,1.04508,1.04506,1.04507,1.04507,1.04505,1.04507,1.04507,1.04506,1.04506,1.04505,1.04505,1.04506,1.04507,1.04507,1.04506,1.04507,1.04505,1.04506,1.04506,1.04507,1.04506,1.04508,1.04507,1.04507,1.04508,1.04508,1.04508,1.04512,1.04512,1.04515,1.04514,1.04510,1.04514,1.04516,1.04509,1.04510,1.04510,1.04509,1.04507,1.04503,1.04505,1.04506,1.04505,1.04507,1.04506,1.04505,1.04506,1.04507,1.04508,1.04508,1.04507,1.04508,1.04508,1.04508,1.04512,1.04512,1.04515,1.04514,1.04510,1.04516,1.04509,1.04510,1.04510,1.04509,1.04507,1.04504,1.04503,1.04500,1.04503,1.04507,1.04507,1.04506,1.04508,1.04507,1.04507,1.04510,1.04513,1.04513,1.04513,1.04509,1.04507,1.04513,1.04511,1.04508,1.04510,1.04509,1.04507,1.04504,1.04503,1.04500,1.04503,1.04507,1.04508,1.04508,1.04507,1.04510,1.04513,1.04513,1.04509,1.04507,1.04513,1.04511,1.04511,1.04508,1.04510,1.04510,1.04503,1.04505,1.04505,1.04507,1.04508,1.04508,1.04509,1.04508,1.04513,1.04516,1.04515,1.04516,1.04519,1.04516,1.04515,1.04514,1.04516,1.04517,1.04523,1.04526,1.04526,1.04526,1.04522,1.04523,1.04524,1.04529,1.04528,1.04529,1.04526,1.04529,1.04528,1.04529,1.04534,1.04536,1.04540,1.04545,1.04540,1.04540,1.04541,1.04545,1.04546,1.04541,1.04534,1.04541,1.04542,1.04546,1.04535,1.04539,1.04541,1.04544,1.04534,1.04538,1.04533,1.04534,1.04541,1.04548,1.04553,1.04552,1.04553,1.04554,1.04551,1.04551,1.04548,1.04548,1.04550,1.04554,1.04550,1.04556,1.04554,1.04555,1.04545,1.04547,1.04544,1.04545,1.04544,1.04544,1.04543,1.04543,1.04538,1.04537,1.04534,1.04537,1.04538,1.04534,1.04534,1.04533,1.04531,1.04538,1.04539,1.04527,1.04529,1.04527,1.04527,1.04531,1.04530,1.04531,1.04534,1.04535,1.04534,1.04536,1.04529,1.04530,1.04531,1.04535,1.04542,1.04543,1.04542,1.04536,1.04536,1.04536,1.04532,1.04531,1.04529,1.04530,1.04538,1.04538,1.04530,1.04529,1.04533,1.04533,1.04533,1.04527,1.04526,1.04523,1.04525,1.04524,1.04526,1.04525,1.04527,1.04532,1.04527,1.04525,1.04526,1.04530,1.04529,1.04524,1.04520,1.04521,1.04525,1.04526,1.04529,1.04529,1.04528,1.04530,1.04526,1.04529,1.04527,1.04527,1.04533,1.04532,1.04532,1.04536,1.04532,1.04531,1.04531,1.04533,1.04528,1.04531,1.04522,1.04514,1.04515,1.04514,1.04518,1.04516,1.04517,1.04515,1.04517,1.04521,1.04519,1.04518,1.04526,1.04527];

var json = [1.04502,1.04505,1.04507,1.04506,1.04511,1.04513,1.04515,1.04514,1.04511,1.04514,1.04512,1.04509,1.04505,1.04509,1.04508,1.04495,1.04495,1.04495,1.04488,1.04489,1.04490,1.04493,1.04489,1.04492,1.04480,1.04475,1.04481,1.04475,1.04481,1.04485,1.04485,1.04489,1.04489,1.04495,1.04495,1.04496,1.04494,1.04490,1.04488,1.04486,1.04489,1.04491,1.04488,1.04486,1.04492,1.04493,1.04498,1.04505,1.04506,1.04507,1.04506,1.04504,1.04504,1.04507,1.04507,1.04508,1.04510,1.04512,1.04511,1.04514,1.04516,1.04515,1.04515,1.04514,1.04513,1.04511,1.04509,1.04511,1.04514,1.04510,1.04506,1.04506,1.04504,1.04503,1.04505,1.04504,1.04504,1.04502,1.04497,1.04500,1.04502,1.04502,1.04501,1.04497,1.04501,1.04502,1.04497,1.04503,1.04503,1.04502,1.04498,1.04497,1.04499,1.04499,1.04495,1.04494,1.04496,1.04501,1.04501,1.04500,1.04499,1.04507,1.04506,1.04505,1.04507,1.04506,1.04507,1.04523,1.04523,1.04534,1.04532,1.04531,1.04533,1.04529,1.04533,1.04527,1.04529,1.04529,1.04527,1.04528,1.04519,1.04517,1.04519,1.04527,1.04526,1.04527,1.04526,1.04530,1.04533,1.04534,1.04534,1.04535,1.04537,1.04537,1.04534,1.04536,1.04534,1.04534,1.04533,1.04529,1.04529,1.04527,1.04526,1.04527,1.04521,1.04517,1.04517,1.04513,1.04506,1.04509,1.04507,1.04507,1.04507,1.04506,1.04507,1.04507,1.04508,1.04507,1.04507,1.04507,1.04507,1.04510,1.04514,1.04514,1.04511,1.04510,1.04506,1.04508,1.04509,1.04509,1.04509,,1.04508,1.04506,1.04507,1.04507,1.04505,1.04507,1.04507,1.04506,1.04506,1.04505,1.04505,1.04506,1.04507,1.04507,1.04506,1.04507,1.04505,1.04506,1.04506,1.04507,1.04506,1.04508,1.04507,1.04507,1.04508,1.04508,1.04508,1.04512,1.04512,1.04515,1.04514,1.04510,1.04514,1.04516,1.04509,1.04510,1.04510,1.04509,1.04507,1.04503,1.04505,1.04506,1.04505,1.04507,1.04506,1.04505,1.04506,1.04507,1.04508,1.04508,1.04507,1.04508,1.04508,1.04508,1.04512,1.04512,1.04515,1.04514,1.04510,1.04516,1.04509,1.04510,1.04510,1.04509,1.04507,1.04504,1.04503,1.04500,1.04503,1.04507,1.04507,1.04506,1.04508,1.04507,1.04507,1.04510,1.04513,1.04513,1.04513,1.04509,1.04507,1.04513,1.04511,1.04508,1.04510,1.04509,1.04507,1.04504,1.04503,1.04500,1.04503,1.04507,1.04508,1.04508,1.04507,1.04510,1.04513,1.04513,1.04509,1.04507,1.04513,1.04511,1.04511,1.04508,1.04510,1.04510,1.04503,1.04505,1.04505,1.04507,1.04508,1.04508,1.04509,1.04508,1.04513,1.04516,1.04515,1.04516,1.04519,1.04516,1.04515,1.04514,1.04516,1.04517,1.04523,1.04526,1.04526,1.04526,1.04522,1.04523,1.04524,1.04529,1.04528,1.04529,1.04526,1.04529,1.04528,1.04529,1.04534,1.04536,1.04540,1.04545,1.04540,1.04540,1.04541,1.04545,1.04546,1.04541,1.04534,1.04541,1.04542,1.04546,1.04535,1.04539,1.04541,1.04544,1.04534,1.04538,1.04533,1.04534,1.04541,1.04548,1.04553,1.04552,1.04553,1.04554,1.04551,1.04551,1.04548,1.04548,1.04550,1.04554,1.04550,1.04556,1.04554,1.04555,1.04545,1.04547,1.04544,1.04545,1.04544,1.04544,1.04543,1.04543,1.04538,1.04537,1.04534,1.04537,1.04538,1.04534,1.04534,1.04533,1.04531,1.04538,1.04539,1.04527,1.04529,1.04527,1.04527,1.04531,1.04530,1.04531,1.04534,1.04535,1.04534,1.04536,1.04529,1.04530,1.04531,1.04535,1.04542,1.04543,1.04542,1.04536,1.04536,1.04536,1.04532,1.04531,1.04529,1.04530,1.04538,1.04538,1.04530,1.04529,1.04533,1.04533,1.04533,1.04527,1.04526,1.04523,1.04525,1.04524,1.04526,1.04525,1.04527,1.04532,1.04527,1.04525,1.04526,1.04530,1.04529,1.04524,1.04520,1.04521,1.04525,1.04526,1.04529,1.04529,1.04528,1.04530,1.04526,1.04529,1.04527,1.04527,1.04533,1.04532,1.04532,1.04536,1.04532,1.04531,1.04531,1.04533,1.04528,1.04531,1.04522,1.04514,1.04515,1.04514,1.04518,1.04516,1.04517,1.04515,1.04517,1.04521,1.04519,1.04518,1.04526,1.04527]

$(document).ready(function () {
        Highcharts.setOptions({
            global : {
                useUTC : false
            },
            lang : {
                rangeSelectorZoom:false
            }
        });
        $('#charts').highcharts('StockChart', {
                chart : {
                    backgroundColor: '#161a1f',
                    events : {
                        load : function () {
                            // set up the updating of the chart each second                         
                            var series = this.series[0];  //数据pointer的数组
                            var len = series.xData.length - 1;  //数据的长度
                            var yIndex = 0;   //初始化y值为null的下标志
                            /*遍历数组 找到第一个为null的y的位置*/
                            for(var i=0;i<len;i++){
                                if(series.yData[i] == null){
                                    yIndex = i;
                                    break;
                                }
                            }
                            var lastPoint = series.yData[yIndex-1];    //找到y有值的最后一个点
                            var lastTwoPoint = series.yData[yIndex]; //找到倒数第二个点
                            var dateA = [];   //初始化data数组接受每次更新的数据
                            var yValue = lastPoint;  //拿到最新一个数据的点
                            var $y = this.yAxis[0];  //拿到Y轴
                            var $x = this.xAxis[0];
                            $y.removePlotLine('plot-line-1');  //移除X水平线线
                            /*为当前最新的点添加水平线*/
                            $y.addPlotLine({
                                value: yValue,
                                width: 1,
                                color: '#737477',
                                dashStyle:'longdash',
                                id: 'plot-line-1',
                                label: {
                                    text: '<span class="chart-indicator">' + yValue.toFixed(5) + "</span>",
                                    align: "right",
                                    style:{
                                        color : '#fff',
                                        background: '#0d75ff',
                                        padding: '3px 3px 3px 5px'
                                    },
                                    y: 0,
                                    x: 0,
                                    useHTML: true
                                }
                            });
                            /*将数据更新到dateA中*/
                            for(var i=0;i<len;i++){
                                dateA.push([series.xData[i],series.yData[i]]);
                            }
                            var $color = ''; 
                            if(lastPoint>lastTwoPoint){
                                $color = '#2BA304';
                            }else if(lastPoint<lastTwoPoint){
                                $color = '#bd0609';
                            }else{
                                $color = '#b3b3b3';
                            }

                            /*series.data[yIndex-1].update({  //update每次更新最新的货币数据
                                marker: {
                                  enabled: true,
                                  fillColor: $color  //给marker添加判断后的颜色
                                }
                              }, true);*/
                            var jsonIndex = 0;
                            setInterval(function() {
                              var x = (new Date()).getTime(); // current time  获取本地时间
                              /*遍历数组 找到第一个为null的y的位置*/
                              series.update({
                                    data:dateA
                              });
                              for(var i=0;i<len+1;i++){
                                    if(series.yData[i] == null){
                                        yIndex = i;
                                        if(yIndex >= len){
                                             var data = [], time = (new Date()).getTime(), i;
                                             var startTime = 350;
                                             var j = 0;
                                             for (i = -420; i <= 0; i ++) {
                                                    if(i<-startTime){
                                                        j++;
                                                        data.push([
                                                            time + i * 1000  + (startTime * 1000),
                                                            oldJson[j]
                                                        ]);
                                                    }else{
                                                        data.push([
                                                            time + i * 1000  + (startTime * 1000),
                                                            null
                                                        ]);
                                                    }
                                                }
                                             dateA = data;
                                             series.update({
                                                data:dateA
                                            });
                                        }
                                        break;
                                    }
                                }

                              $y.removePlotLine('plot-line-1'); //移除水平线
                              lastPoint = series.yData[yIndex-1],  //找到y有值的最后一个点
                              lastTwoPoint = series.yData[yIndex-2];

                            function check(time){
                                if( time < 10 ){
                                    return '0' + time;
                                }else{
                                    return time;
                                }
                            }

                            function check2(times){
                                var $date = new Date(times);
                                var $hours = $date.getHours();
                                $hours = check($hours);
                                var $minutes = $date.getMinutes();
                                $minutes = check($minutes);
                                var $seconds = $date.getSeconds();
                                $seconds = check($seconds);
                                return $time = $hours + ':' + $minutes + ':' + $seconds;
                            }
                            


                              $x.removePlotLine("plotX-line-left");
                              $x.removePlotLine("plotX-line-right");

                              $x.addPlotLine({
                                value: series.xData[yIndex-1],
                                    width: 1,
                                    color: '#0d75ff',
                                    dashStyle:'solid',
                                    id: 'plotX-line-left',
                                    label: {
                                        text: '<span class="chart-time-indicator">' + check2(series.xData[yIndex-1]) + "</span>",
                                        align: "right",
                                        style:{
                                            color : '#fff',
                                            background: '#0d75ff',
                                            padding: '0px 2px'
                                        },
                                        x:5,
                                        y:514,
                                        useHTML: true
                                    }
                              });

                              $x.addPlotLine({
                                    value: series.xData[yIndex-1 + parseInt($assetTime)],
                                    width: 1,
                                    color: '#7cba05',
                                    dashStyle:'solid',
                                    id: 'plotX-line-right',
                                    label: {
                                        text: '<span class="chart-time-indicator">' + check2(series.xData[yIndex-1 + parseInt($assetTime)]) + "</span>",
                                        align: "right",
                                        style:{
                                            color : '#fff',
                                            background: '#7cba05',
                                            padding: '0px 2px'
                                        },
                                        x:5,
                                        y:514,
                                        useHTML: true
                                    }
                              });


                              var newData = newJson[jsonIndex] ;  //生成随机一个新的数据
                              jsonIndex++;

                              dateA[yIndex].splice(1,1,newData);  //将数据替换之前的null   [[X,Y],[X,Y],[X,Y],[X,Y]]
                              lastPoint = series.yData[yIndex-1];  //找到y有值的最后一个点
                              lastTwoPoint = series.yData[yIndex-2];
                              yValue = lastPoint;
                              $y.removePlotLine('plot-line-1'); 
                              $y.addPlotLine({
                                    value: yValue,
                                    width: 1,
                                    color: '#0d75ff',
                                    dashStyle:'solid',
                                    id: 'plot-line-1',
                                    label: {
                                        text: '<span class="chart-indicator">' + yValue.toFixed(5) + "</span>",
                                        align: "right",
                                        style:{
                                            color : '#fff',
                                            background: '#0d75ff',
                                            padding: '3px'
                                        },
                                        y: 0,
                                        x: 0,
                                        useHTML: true
                                    }
                              });
                              
                              if(lastPoint>lastTwoPoint){
                                  $color = '#2BA304';
                                  //说明涨了
                              }else if(lastPoint<lastTwoPoint){
                                   $color = '#bd0609';
                                   //说明跌了
                              }else{
                                    $color = '#b3b3b3';
                                }

                              /*series.data[yIndex-2].update({  //update每次更新最新的货币数据
                                marker: {
                                  enabled: true,
                                  fillColor: $color  //给marker添加判断后的颜色
                                }
                              }, true);*/
                            }, 1000);   //时间为1000ms
                        }
                    },
                    background:'#ccc'
                },
                rangeSelector: {
                    buttons: [{
                        count: 3,
                        type: 'minute',
                        text: '3M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 2
                },
                navigator: {
                    enabled: false 
                },
                credits: { 
                    enabled: false 
                },
                scrollbar: {
                    enabled: false 
                },
                xAxis: {
                },
                yAxis: {
                    labels: {
                        align: 'right',
                        format: '{value:.5f}',
                        y: -3,
                        x: 0
                    },
                    gridLineDashStyle: 'longdash',
                    gridLineColor: '#606060',
                    min: 1.04430,
                    max: 1.04550,
                    startOnTick: false,
                    endOnTick: false
                },
                tooltip: {
                formatter: function () {
                    return Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 5);
                }
                },
                plotOptions: {
                    line: {
                        allowPointSelect: false,
                        showCheckbox: false,
                        animation: true
                    },
                    series: {
                        color: "rgba(88, 88, 88, 0.6)",
                        lineWidth: 1,
                        marker: {
                            enabled: false,
                            symbol: "circle",
                            radius: 3,
                            color: '#000'

                        },
                        states: {
                                hover: {
                                    enabled: true,
                                    lineWidth: 1,
                                    lineWidthPlus: 0,
                                    radiusPlus: 0,
                                    symbol: "circle",
                                    radius: 2
                                }
                        }
                    }
                },
                dataGrouping:{
                    enabled: false  //true
                },
                title : {
                    text : ''
                },
                exporting: {
                    enabled: false
                },
                series : [{
                    name : '',
                    //type : 'area',
                    color : "rgba(13, 117, 255, 0.2)",
                    lineColor: '#0d75ff',
                    data : (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime(), i;
                        var startTime = 350;
                        var j = 0;
                        for (i = -420; i <= 0; i ++) {
                                if(i<-startTime){
                                    j++;
                                    data.push([
                                        time + i * 1000  + (startTime * 1000),
                                        oldJson[j]
                                    ]);
                                }else{
                                    data.push([
                                        time + i * 1000  + (startTime * 1000),
                                        null
                                    ]);
                                }
                            }
                        return data;
                    }())
                }]
        },function(c){
            chart = c ;
            c.series[0].update({
                type : 'area'
            });
        });

        var chart = $('#charts').highcharts();
        setInterval(targetRandom, 1000);
        var series = chart.series[0];  //数据pointer的数组
        var len = series.data.length - 1;  //数据的长度
        var yIndex = 0; 
        for(var i=0;i<len;i++){
            if(series.data[i].y == null){
            yIndex = i;
            break;
            }
        }

        var lastPoint = series.data[yIndex-1];    //找到y有值的最后一个点
        var lastTwoPoint = series.data[yIndex-2]; //找到倒数第二个点
        var yValue = lastPoint.y;  //拿到最新一个数据的点
        var $y = chart.yAxis[0];  //拿到Y轴
        var $x = chart.xAxis[0];  //拿到X轴
        var highIn = '';
        var lowIn = '';
        var dataLen = series.data.length;
        $('.high-btn').click(function(){
            $y.removePlotBand('plot-band-low');
            $y.removePlotBand('plot-band-high');
            clearInterval(lowIn);
            chart.yAxis[0].addPlotBand({
                from: yValue,
                to: 1000,
                color: 'rgba(137, 175, 124, 0.3)',
                id: 'plot-band-high'
            });
            function high(){
            for(var i=0;i<len;i++){
                if(series.data[i].y == null){
                yIndex = i;
                break;
                }
            }

            lastPoint = series.data[yIndex-1];    //找到y有值的最后一个点
            lastTwoPoint = series.data[yIndex-2]; //找到倒数第二个点
            yValue = lastPoint.y;  //拿到最新一个数据的点
            $y = chart.yAxis[0];  //拿到Y轴    

            $y.removePlotBand('plot-band-high');
                chart.yAxis[0].addPlotBand({
                    from: yValue,
                    to: 1000,
                    color: 'rgba(137, 175, 124, 0.3)',
                    id: 'plot-band-high'
                });
            }
            highIn = setInterval(high);
        });



        $('.low-btn').click(function(){
            $y.removePlotBand('plot-band-high');
            $y.removePlotBand('plot-band-low');
            clearInterval(highIn);
            chart.yAxis[0].addPlotBand({
                from: 0,
                to: yValue,
                color: 'rgba(224, 116, 118, 0.3)',
                id: 'plot-band-low'
            });
            function low(){
                for(var i=0;i<len;i++){
                if(series.data[i].y == null){
                yIndex = i;
                break;
                    }
                }
                lastPoint = series.data[yIndex-1];    //找到y有值的最后一个点
                lastTwoPoint = series.data[yIndex-2]; //找到倒数第二个点
                yValue = lastPoint.y;  //拿到最新一个数据的点
                $y = chart.yAxis[0];  //拿到Y轴    
                $y.removePlotBand('plot-band-high');
                $y.removePlotBand('plot-band-low');
                    chart.yAxis[0].addPlotBand({
                        from: 0,
                        to: yValue,
                        color: 'rgba(224, 116, 118, 0.3)',
                        id: 'plot-band-low'
                    });
            }
            lowIn = setInterval(low);
        });

        $.each(['area', 'line', 'candlestick'], function (i, type) {
        $('#' + type).click(function () {
            chart.series[0].update({
                type: type
            });
        });
    });
    });
/*slide-btn*/
$('.asset-cul-head').click(function(){
    $(this).find('.asset-index .iconfont').toggleClass('rotate-btn');
    var $index = $(this).parent().index();
    $('.asset-cul').eq($index).find('.asset-cul-content').slideToggle(200);
});
$('.collect').click(function(){
    $(this).toggleClass('collected');
});
$('.time-cul').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $assetTime = transformsec();
    console.log($assetTime);
});
$('.slide-container .col-xs-4').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.dash-head-cul').click(function() {
    var $index = $(this).index();
    $(this).find('.head-icon').addClass('active').parents().find('.dash-head-cul').eq($index).siblings().find('.head-icon').removeClass('active');
});
$('.chart-button').click(function() {
    var $index = $(this).index();
    $(this).find('.iconfont').addClass('active').parents().find('.chart-button').eq($index-1).siblings().find('.iconfont').removeClass('active');
});
$('.asset-cul-content').click(function() {
    $(this).addClass('active').siblings().removeClass('active').parent().siblings('.asset-cul').find('.asset-cul-content').removeClass('active');
    $('.chart-title-name,.dash-content-head-name').text($(this).find('.asset-cul-name').text());

    $('.asset-slide-E').text($(this).find('.asset-cul-name').text());
    var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
    $tragetValue.start();
});

/*已平仓，未平仓*/
$('.open,.trade-details').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).hasClass('open')){
        $('.open-countdown').show();
        $('.trade-dateals-content').hide();
    }else{
        $('.trade-dateals-content').show();
        $('.open-countdown').hide();
    }
    
});
/*mobile*/
$('.slide-btn-left').click(function(){
    if ( $('.body').css('left') == '0px') {
        $('.body').css('left','300px');
        $('.slide-left').css('left','0');
    }else{
        $('.body').css('left','0');
        $('.slide-left').css('left','-300px');
    }
});

$('.slide-btn-right').click(function(){
    if ( $('.body').css('left') == '0px') {
        $('.body').css('left','-300px');
        $('.slide-right').css('right','0');
    }else{
        $('.body').css('left','0');
        $('.slide-right').css('right','-100%');
    }
});
console.log($('.asset-cul-content.active'));
$('.chart-title-name').text($('.asset-cul-content.active').eq(0).find('.asset-cul-name').text());
var countDown = '';
$('.one-more').click(function(){
    clearInterval(countDown);
    $(this).hide();
    $('.one-more,.trading-info-amount').hide();
    $('.low-high-btn').show();
    $('.trade-info-amount,.trade-info-time,.trade-info-outcome').show();  
});
// var $demoacount = parseInt($('#user-acount').text()); 
// var $demoacounts = parseInt($('#user-acount-pc').text()); 
/*login in demo*/
$('.logon,.signIn').click(function(){
    var $user = $('input[name = "user"]').val();
    var $password = $('input[name = "password"]').val();
    var $moblieuser = $('input[name = "moblieuser"]').val();
    var $mobliepassword = $('input[name = "mobliepassword"]').val();
    if(($user != '') && ($password != '')){
        //登录成功
        layer.msg('尊敬的用户：' + $user + "，您好！");
        $('.dash-logon,.logon,.sign-in,.moblie-user,.moblie-psd').hide();
        $('.user-info,.welcome,.logout').show();
    }else if($moblieuser != '' && $mobliepassword != ''){
        layer.msg('尊敬的用户：' + $moblieuser + "，您好！");
        $('.dash-logon,.logon,.sign-in,.moblie-user,.moblie-psd').hide();
        $('.user-info,.welcome,.logout').show();
    }else{
        //登录失败
        layer.msg('请输入任意用户名和密码');
    }
});
/*$('#signIn').on('click',function(){
    alert(1);
})*/
$('.slide-container .trade-type-panel').click(function() {
   var $index = $(this).index();
   $(this).find('a').addClass('active').parents().find('.trade-type-panel').eq($index).siblings().find('a').removeClass('active');
});
$('.logout').click(function(){
    $('.dash-logon,.logon,.sign-in').show();
    $('.user-info,.welcome,.logout').hide();
    $('input[name = "password"]').val('');
});
/*moblie silde*/
/*$(".asset-slide-head:first").click(function(){
    $('.asset-slide-list').eq(0).slideToggle();
});
$('.type-silde-head').click(function(){
    $('.asset-slide-list').eq(1).slideToggle();
});
*/
$('.add-user-acount').click(function() {
    if( ($account + 1000) > 2000){
        layer.msg('模拟账户最多只能拥有2000元');
    }else{
        var $tragetValue = new CountUp("user-acount",  $account, ($account + 1000), 2, 1, options);
        $tragetValue.start();
        $account += 1000;
        $('.user-acount').text($account);
    }
});


function transformtime(overtime){
    var $hours = parseInt(overtime / 3600);
    var $minutes = parseInt(overtime / 60);
    var $seconds = overtime % 60;
    return check($hours) + ':' + check($minutes) + ':' + check($seconds);
}
/*
    $('.hight-button,.low-button').click(function(){
        var $amount = $('.value').val().substr(1);  //the amount
        var $target = $('.asset-cul-content.active').find('.asset-cul-values').text();  //the target
        var $targetamount = $('#target-value').text();  //target money 
        $('.traget-money-value').text($targetamount);
        $('.trade-value-contents').text($target);
        $('.amount-values').text($amount);
        $overTime = transformsec();
        countDown = setInterval(function(){
            $overTime -= 1;
            $('.target-time-value').text(transformtime($overTime));
            if($overTime == 0){
                clearInterval(countDown);
            }
        }, 1000); 

        $('.trade-info-amount,.trade-info-time,.trade-info-outcome').hide();
        $(this).parents('.low-high-btn').hide();
        $('.one-more,.trading-info-amount').show();
    });
*/
var $val = parseInt($('.value').val().substr(1));
function interrest(){
    return 1 + parseInt($('.asset-cul-content.active').find('.rate-value').text()) / 100;
}
//default value
var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
$tragetValue.start();
var $mtragetValue = new CountUp("mobile-target-value", $val, ($val) * interrest(), 2, 1, options);
$mtragetValue.start();
/*common*/
var list = '<div class="datails-list">' +
                '<div class="datails-list-title">' +
                    '<div class="row">' +
                        '<span class="datails-list-title-asset col-lg-4"><span class="glyphicon glyphicon-fire datails-list-title-asset-icon"></span><span>资产</span></span>' +
                        '<span class="datails-list-title-overtime col-lg-4">结束时间</span>' +
                        '<span class="datails-list-title-result col-lg-4">结果</span>' +
                    '</div>' +
                '</div>' +
                '<div class="datails-list-value">' +
                    '<div class="row">' + 
                        '<span class="datails-list-value-asset col-lg-4"><span class="iconfont high">&#xe617;</span><span class="datails-list-value-asset-name"></span></span>' +
                        '<span class="datails-list-value-overtime col-lg-4">00:00:00</span>' +
                        '<span class="datails-list-value-result col-lg-4 high">$<span class="datails-list-value-result-value">10</span></span>' +
                    '</div>' +
                '</div>' +
            '</div>';
var mobileList =  '<div class="datails-list-mobile">' +
                    '<div class="datails-list-title">' +
                        '<div class="row">' +
                            '<span class="datails-list-title-asset col-xs-4"><span class="glyphicon glyphicon-fire datails-list-title-asset-icon"></span><span>资产</span></span>' +
                            '<span class="datails-list-title-overtime col-xs-4">结束时间</span>' +
                            '<span class="datails-list-title-result col-xs-4">结果</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="datails-list-value">' +
                        '<div class="row">' + 
                            '<span class="m-datails-list-value-asset col-xs-4"><span class="iconfont high">&#xe617;</span><span class="datails-list-value-asset-name"></span></span>' +
                            '<span class="m-datails-list-value-overtime col-xs-4">00:00:00</span>' +
                            '<span class="m-datails-list-value-result col-xs-4 high">$<span class="datails-list-value-result-value">10</span></span>' +
                        '</div>' +
                    '</div>' +
                '</div>';
/*mobile-list-open*/
// var mobileCountDownList =   '<div class="open-countdown">' + 
//                     '<div class="open-content-title">' +
//                         '<div class="open-title-name col-xs-4">EURUSD</div>' +
//                         '<div class="open-title-return col-xs-4">涨</div>' +
//                         '<div class="col-xs-4">盈亏<span class="open-title-return-value">$200</span></div>' +
//                     '</div>' +
//                     '<div class="open-content-mid clearfix">' +
//                         '<div class="open-content-mid clearfix">' +
//                             '<div class="open-content-mid-head clearfix">' +
//                                 '<span class="col-xs-6 over-time-title">结束时间</span>' +
//                                 '<span class="col-xs-6 over-time-value">00:00:00</span>' +
//                             '</div>' +
//                         '</div>' +
//                     '</div>' + 
//                  '</div>';


/*创建构造函数trade-list*/
/*function List($amount,$target,$targetamount,$overtime){
    this.amount = $amount;  //$amount 投入的金额
    this.target = $target;  //$target 目标初始价格
    this.targetamount = $targetamount;  //$targetamount 预期收益
    this.overTime = $overtime; //获取当前的倒计时时间

    this.showPanel = function(){  // 改变上面栏目的显示内容
        $('.amount-values').text(this.amount);
        $('.trade-value-contents').text(this.target);
        $('.traget-money-value').text(this.targetamount);
    };
    this.countdown = function(){
            $over = this.overTime;
            var countDown = setInterval(function(){
                $over -= 1; 
                console.log("$over: " + $over);
                $('.target-time-value').text(transformtime($over));
                if($over == 0){
                    clearInterval(countDown);
                }
        }, 1000);
    }
    this.show = function(){
        $('.trade-info-amount,.trade-info-time,.trade-info-outcome,.low-high-btn').hide();
        $('.one-more,.trading-info-amount').show();
    }
}
*/

function transformsec(){
    var overtime = $('.time-cul.active .time-value').text() || $('.asset-slide-M>span').text(); 
    return overtime;
}

/*每次点击时，实例化对象，添加一个新的订单*/
var listIndex = 0;
//初始 用户账户余额 $account 是 1000;gobal
var $account = 1000;

var logonForm = '<div class="dash-logon" >' +
                    '<input type="text" name="user" placeholder="用户名"><br>' +
                    '<input type="password" name="password" placeholder="密码">' +
                '</div>';
$('.hight-button,.low-button').click(function(event) {
    if($('.user-info').css("display") == 'none'){
        layer.confirm(logonForm,{
            title : '请先登录',
            btn: ['登录','注册']//按钮
        },function(){
                layer.open({
                    type:1,
                    title:"登录",
                    shadeClose: true,
                    content: '<div style="padding:20px;"> <p style="padding-left:20px;">账号：<input type="text" name="user" id="user"></p><p style="padding-left:20px;">密码：<input type="password" name="user" id="user"></p><p><input type="button" value="登录" id="login" style="margin-left:50px;""><input type="button" value="注册" style="margin-left:50px;"></p></div>'
                });
            });
        // alert('请先登录');
    }else{
        var $amount = $('.value').val().substr(1);  //the amount
        var $target = $('.asset-cul-content.active').find('.asset-cul-values').text();  //the target
        var $targetamount = $amount * interrest();  //target money 
        var $overTime = transformsec();
        var $type = '';  //high or low
        $('.datail-nums').text($('.datails-list').length + 1);
       if($account < parseInt($amount) ){
            layer.msg('余额不足，请充值后操作');
       }else{

            layer.msg('下单成功');
            //var $amount = $('.value').val().substr(1);  the amount 现在是多少  $account
            var $target = $('.asset-cul-content.active').find('.asset-cul-values').text();  //the target
            var $money = $('.value').val().substr(1);
            var $targetamount = $money * interrest();  //target money 
            var $overTime = transformsec();
            var $type = '';  //high or low        
            console.log($money);
            if( $account < parseInt($money) ){  //账户余额低于 购买金额时
                layer.msg('余额不足，请充值后操作');
            }else{
            //账户余额的地方减少以及动画效果
            var $tragetValue = new CountUp("user-acount", $account, ($account - parseInt($money)), 2, 1, options);
            $tragetValue.start();

            var $mtragetValue = new CountUp("user-acount-moblie", $account, ($account - parseInt($money)), 2, 1, options);
            $mtragetValue.start();

            $account -= Number($money);
            console.log("$overtime" + $overTime);

            //添加一个空的状态图到列表
            $('.details-content').append(list);
            var $newList = $('.details-content .datails-list').eq(listIndex);
            $newList.find('.datails-list-value-asset-name').text($('.asset-cul-content.active .asset-cul-name').text());
            $newList.find('.datails-list-value-result-value').text($targetamount);
            $('.open-countdown').append(mobileList);   
            var $newmList = $('.open-countdown .datails-list-mobile').eq(listIndex);
            $newmList.find('.datails-list-value-asset-name').text($('.asset-cul-content.active .asset-cul-name').text());
            $newmList.find('.m-datails-list-value-result-value').text($targetamount);
            //判断按钮是涨还是跌
            if($(this).index() == 0){
                $newList.find('.datails-list-value-asset .iconfont').addClass('high').removeClass('low').html('&#xe617;');
                $newmList.find('.m-datails-list-value-asset .iconfont').addClass('high').removeClass('low').html('&#xe617;');
                $type = '涨';
            }else{
                $newList.find('.datails-list-value-asset .iconfont').addClass('low').removeClass('high').html('&#xe69f;');
                $newmList.find('.m-datails-list-value-asset .iconfont').addClass('low').removeClass('high').html('&#xe69f;');
                $type = '跌';
            }

            //订单的次数
            var $countDowns = "a" + listIndex;
            countDownSec($overTime,$newList,$countDowns,listIndex,$type,$money,$newmList);
            /*new List($amount,$target,$targetamount,$overTime).countdown();*/
            //每次订单加1
            listIndex ++;
       }
    }
}
});



function addList($id,$option,$type,$asset,$opentime,$money,$opentarget,$endtime,$endtarget,$endtype,$targetAmcount){
    // /*user-id*/
    // var $id = 9298295;
    // /*option*/
    // var $option = '短期';
    // /*type*/
    // var $type = $(this).find('.type').text();
    // /*the amount*/
    // var $amount = $('#target-value').text();
    // /*the target*/
    // var $target = $('.chart-title-value').text();
    // /*the asset*/
    // var $asset = $('.chart-title-name').text();
    // /*the time*/
    // var $time = $('.now-time').text();
    // /*the target-time*/
    // //30S
    // /*预期收益*/
    // var $targetAmcount = $('#target-value').text();
    function checkTargetAmcount($targetAmcount){
        if($targetAmcount != 0){
            return $targetAmcount;
        }else{
            return '-';
        }
    }
    // if($(window).width() > 960 ){
        var $list = '<div class="trade-log-list">' + 
                        '<div class="row">' +
                            '<div class="col-lg-1"><span class="user-id">' +  $id + '</span></div>' +
                            '<div class="col-lg-2"><span class="option">' + $option + '</span></div>' +
                            '<div class="col-lg-1"><span class="type"><span>' + $type + '</span></div>' +
                            '<div class="col-lg-1"><span class="asset">' + $asset + '</span></div>' +
                            '<div class="col-lg-1"><span class="open-time">' + $opentime + '</span></div>' +
                            '<div class="col-lg-1"><span class="acount">$' + $money + '</span></div>' +
                            '<div class="col-lg-1"><span class="open-acount">' + $opentarget + '</span></div>' +
                            '<div class="col-lg-1"><span class="end-time">' + $endtime + '</span></div>' +
                            '<div class="col-lg-1"><span class="end-acount">' + $endtarget + '</span></div>' +
                            '<div class="col-lg-1"><span class="end-type">' + $endtype + '</span></div>' +
                            '<div class="col-lg-1"><span class="return">' + checkTargetAmcount($targetAmcount) + '</span></div>' +
                        '</div>' +
                    '</div>';
        $('.trade-log-content').append($list);
    // }else{
        layer.msg('订单结束');
        var moblieList =    '<div class="trade-dateals-content clearfix">' +
                            '<div class="trade-dateals-content-title">' +
                                '<div class="title-name col-xs-4">' + /*货币名*/ $asset  + '</div>'+
                                    '<div class="title-return col-xs-4">'  + /*涨跌？*/$type + '</div>' +
                                    '<div class="title-return-value col-xs-4">盈亏:' + /*return的值*/checkTargetAmcount($targetAmcount) + '</div>'+
                                '</div>' +
                                '<div class="trade-dateals-content-mid clearfix">' +
                                    '<div class="content-mid clearfix">' +
                                        '<div class="content-mid-head clearfix">' +
                                            '<span class="col-xs-3 opentarget-value">' + /*买入时的价格*/$opentarget + '</span>' +
                                            '<span class="col-xs-3 amount-value">' + /*买入的金额*/$money + '</span>' +
                                            '<span class="col-xs-3 time-value">' + /*购买订单的时间*/'60秒</span>' + 
                                            '<span class="col-xs-3 endtarget-value">' + /*结算价格*/$endtarget + '</span>' +
                                        '</div>' +
                                        '<div class="content-mid-content clearfix">' +
                                            '<span class="col-xs-3 opentarget">买入价格</span>' +
                                            '<span class="col-xs-3 amount">买入金额</span>' +
                                            '<span class="col-xs-3 time">持单时间</span>' +
                                            '<span class="col-xs-3 endtarget">结算价格</span>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="trade-dateals-content-time clearfix">' +
                                    '<div class="col-xs-6">' +
                                        '<span class="begin-time">买入时间</span>' +
                                        '<span class="open-time">' + /*买入的时间*/ $opentime + '</span>' +
                                    '</div>' +
                                    '<div class="col-xs-6">' +
                                        '<span class="end-time-title" style="color:#fa4a26">结束时间</span>' +
                                        '<span class="end-time">' + /*结束的时间*/$endtime + '</span>'+
                                    '</div>' +
                                '</div>' +
                            '</div>';
        $('.slide-right').append(moblieList);
    // }
    // if($(window).width() > 960 ){
    //     var $pclist = '<div class="trade-log-list">' + 
    //                 '<div class="row">' +
    //                     '<div class="col-lg-1"><span class="user-id">' +  $id + '</span></div>' +
    //                     '<div class="col-lg-2"><span class="option">' + $option + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="type"><span>' + $type + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="asset">' + $asset + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="open-time">' + $opentime + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="acount">$' + $amount + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="open-acount">' + $opentarget + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="end-time">' + $endtime + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="end-acount">' + $endtarget + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="end-type">' + $endtype + '</span></div>' +
    //                     '<div class="col-lg-1"><span class="return">' + $targetAmcount + '</span></div>' +
    //                 '</div>' +
    //             '</div>';
    //     $('.trade-log-content').append($pclist);
    // }else{
    //     var moblieList =    '<div class="trade-dateals-content clearfix">' +
    //                     '<div class="trade-dateals-content-title">' +
    //                         '<div class="title-name col-xs-4">' + /*货币名*/ $asset  + '</div>'+
    //                             '<div class="title-return col-xs-4">'  + /*涨跌？*/$type + '</div>' +
    //                             '<div class="title-return-value col-xs-4">盈亏:' + /*return的值*/$targetAmcount + '</div>'+
    //                         '</div>' +
    //                         '<div class="trade-dateals-content-mid clearfix">' +
    //                             '<div class="content-mid clearfix">' +
    //                                 '<div class="content-mid-head clearfix">' +
    //                                     '<span class="col-xs-3 opentarget-value">' + /*买入时的价格*/$opentarget + '</span>' +
    //                                     '<span class="col-xs-3 amount-value">' + /*买入的金额*/$amount + '</span>' +
    //                                     '<span class="col-xs-3 time-value">' + /*购买订单的时间*/'60秒</span>' + 
    //                                     '<span class="col-xs-3 endtarget-value">' + /*结算价格*/$endtarget + '</span>' +
    //                                 '</div>' +
    //                                 '<div class="content-mid-content clearfix">' +
    //                                     '<span class="col-xs-3 opentarget">买入价格</span>' +
    //                                     '<span class="col-xs-3 amount">买入金额</span>' +
    //                                     '<span class="col-xs-3 time">持单时间</span>' +
    //                                     '<span class="col-xs-3 endtarget">结算价格</span>' +
    //                                 '</div>' +
    //                             '</div>' +
    //                         '</div>' +
    //                         '<div class="trade-dateals-content-time clearfix">' +
    //                             '<div class="col-xs-6">' +
    //                                 '<span class="begin-time">买入时间</span>' +
    //                                 '<span class="open-time">' + /*买入的时间*/ $opentime + '</span>' +
    //                             '</div>' +
    //                             '<div class="col-xs-6">' +
    //                                 '<span class="end-time-title" style="color:#fa4a26">结束时间</span>' +
    //                                 '<span class="end-time">' + /*结束的时间*/$endtime + '</span>'+
    //                             '</div>' +
    //                         '</div>' +
    //                     '</div>';
    //     $('.slide-right').append(moblieList);
    // }

}

function countDownSec($overTime,$newList,$countDowns,$index,$type,$money,$newmList){
            var $opentime = $('.now-time').text();  //开仓时开始的时间
            var $overTime = $overTime;   //开仓的总时长
            var $indexs = $index;  //list的index，default为0
            var $id = '95272255'; //userId
            var $option = $('.dash-head-cul:first').find('.head-text').text();  //期权的类型
            var $type = $type;  //涨还是跌？
            var $asset = $('.asset-cul-content.active').find('.asset-cul-name').text();  //货币名称
            var $money = $money;  //购买的金额
            var $opentarget = $('.asset-cul-content.active').find('.asset-cul-values').text(); //开盘时价格 
            var $targetamounts = $money * interrest();  //预计收益
            var $endtype = '关闭';

            $countDowns = setInterval(function(){
                $overTime -= 1;  //每次倒计时时总时长减1S
                $endtarget = $('.asset-cul-content.active').find('.asset-cul-values').text();  //结束时的货币汇率
                if($type == '涨'){//买的是涨
                    if($opentarget < $endtarget){
                        //赢了
                        $targetamount = $targetamounts;  //预计收益
                        $('.datails-list-value-result').eq($indexs).html('$<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        $('.m-datails-list-value-result').eq($indexs).html('$<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                    }else{
                        $targetamount = 0;
                        $('.datails-list-value-result').eq($indexs).html('<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        $('.m-datails-list-value-result').eq($indexs).html('<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        // $('.datails-list-value-result').eq($indexs).html('-').addClass('low').removeClass('high');
                    }
                }else{//买的是跌
                    if($opentarget < $endtarget){
                        //
                        $targetamount = 0;
                        $('.datails-list-value-result').eq($indexs).html('<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        $('.m-datails-list-value-result').eq($indexs).html('<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        // $('.datails-list-value-result').eq($indexs).html('-').addClass('low').removeClass('high');
                    }else{                       
                        $targetamount = $targetamounts;
                        $('.datails-list-value-result').eq($indexs).html('$<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                        $('.m-datails-list-value-result').eq($indexs).html('$<span class="datails-list-value-result-value">' + $targetamount + '</span>').addClass('high').removeClass('low');
                    }
                }
                //console.log("$opentarget:" + $opentarget + "|| $endtarget:" + $endtarget + "$targetamount:" + $targetamount);
                $newList.find('.datails-list-value-overtime').text(transformtime($overTime));
                $newmList.find('.m-datails-list-value-overtime').text(transformtime($overTime));
                // var $endtarget = $('.asset-cul-content.active').find('.asset-cul-values').text();
                if($overTime == 0){
                    $(".datails-list").eq($indexs).hide();
                    $(".datails-list-mobile").eq($indexs).hide();
                    
                    if($targetamount != 0){
                            console.log('type' + typeof Number($targetamount));
                            console.log('第' + $indexs + 'win');
                            var $tragetValue = new CountUp("user-acount", $account, ($account + Number($targetamount)), 2, 1, options);
                            $tragetValue.start();
                            console.log('$account' + $account);
                            console.log('$targetamount' + $targetamount);
                            $account = $account + Number($targetamount);
                            // $demoacount += parseInt($targetamounts);
                            $('.user-acount').text($account);
                    }
                    var $endtime = $('.now-time').text();
                    clearInterval($countDowns);  //停止当前的倒计时
                    if($type == '涨'){
                        $type = '<span style="color:#7cba05"><span class="button-icon iconfont" style="font-size:12px;margin-right:3px;">&#xe617;</span><span class="type">涨</span></span>';
                    }else{
                        $type = '<span style="color:#fa4a26"><span class="button-icon iconfont" style="font-size:12px;margin-right:3px;">&#xe69f;</span><span class="type">跌</span></span>';
                    }
                    addList($id,$option,$type,$asset,$opentime,$money,$opentarget,$endtime,$endtarget,$endtype,$targetamount);
                    $('.logs-num').text($('.trade-log-list').length);
                    // setTimeout(function(){
                        
                        //console.log("最后所得$opentarget:" + $opentarget + "|| $endtarget:" + $endtarget + "$targetamount:" + $targetamount);
                    // }, 3000);                    
                }
        }, 1000); 
}

/*acount-value*/
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};

$('.value').bind('input propertychange',function(){
    $val = parseInt($(this).val().substr(1));
    if($val == 'NaN' || !$val){
        $('.value').val('$0');
    }else{
        $('.value').val('$' + ($val));
        var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
        var $mobiletragetValue = new CountUp("mobile-target-value", $val, ($val) * interrest(), 2, 1, options);
        $tragetValue.start();
        $mobiletragetValue();
    }
});
$('.up-value').click(function() {
    if (parseInt($('.value').val().substr(1)) <= 0) {
        $('.value').val('$0');
        console.log(11);
    }else{
        $('.value').val('$' + ($val -= 100));
        var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
        var $mobiletragetValue = new CountUp("mobile-target-value", $val, ($val) * interrest(), 2, 1, options);
        $tragetValue.start();
        $mobiletragetValue.start();
    }
});
$('.low-value').click(function() {
    $('.value').val('$' + ($val += 100));
    var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
    var $mobiletragetValue = new CountUp("mobile-target-value", $val, ($val) * interrest(), 2, 1, options);
    $tragetValue.start();
    $mobiletragetValue.start();
});
$('.quick-add-btn').click(function() {
    $val = parseInt($(this).text().substr(1,3)) + parseInt($('.value').val().substr(1));
    console.log("$val" + $val);
    $('.value').val('$' + ($val ));
    var $tragetValue = new CountUp("target-value", $val, ($val) * interrest(), 2, 1, options);
    var $mobiletragetValue = new CountUp("mobile-target-value", $val, ($val) * interrest(), 2, 1, options);
    $tragetValue.start();
    $mobiletragetValue.start();
});
/*time*/
function check(time){
    if( time < 10 ){
        return '0' + time;
    }else{
        return time;
    }
}

/*时间显示*/
setInterval(function(){
    var $date = new Date();
    var $hours = $date.getHours();
    $hours = check($hours);
    var $minutes = $date.getMinutes();
    $minutes = check($minutes);
    var $seconds = $date.getSeconds();
    $seconds = check($seconds);
    var $time = $hours + ':' + $minutes + ':' + $seconds;
    $('.now-time,.timeText').text($time);
},1000);


/*随机数据*/
/*模拟target的值变化*/ 
var arr1 = ['0.550127','0.996246','0.197699',"0.676558","0.146128","0.696624","0.184547","0.444164","0.126342","0.807289","0.320093","0.329731","0.068998","0.890006","0.707968","0.800367","0.577463"];
/*定义选择的资产index值*/
var $index = 0;

/*var mSlideList = '<a href="#" class="asset-slide-list">' + 
                    '<span class="asset-slide-name">' + assetName + '</span>' +
                    '<span class="asset-slide-return">' +  assetReturn + '</span>' +
                    '<span class="asset-silde-values fr">' +
                        '<span class="iconfont asset-slide-value-icon-high">&#xe60d;</span>' + 
                        '<span class="iconfont asset-slide-value-icon-low">&#xe60a;</span>' + 
                        '<span class="asset-silde-values">1.07752</span>' +
                    '</span>' +
                  '</a>'*/



/*刷新数据*/
// setInterval(targetRandom(chart), 1000);
function targetRandom(chart){
    var arr = [];
    var $target = $('.asset-cul');
    for(var i=1;i<=$target.length;i++){
        arr.push(Math.random().toString().substr(0,7));
    }
    for(var i = 0;i< $target.length;i++){
        for(var j = 0; j < $('.asset-cul').eq(i).find('.asset-cul-content').length; j++){

            $('.asset-cul').eq(i).find('.asset-cul-content').eq(j).find('.asset-cul-values').text(arr[j]);
            if(arr1[i]<arr[i]){
                $('.asset-cul').eq(i).find('.asset-cul-content').eq(j).find('.asset-cul-value .iconfont').html('&#xe60a;').css('color','#fa4a26');
                $('.chart-title-content .chart-title-value').css('color','#fa4a26');
                $('.chart-title-content .iconfont').html('&#xe60a;').css('color','#fa4a26');
                $('.asset-cul').eq(i).find('.asset-cul-content').eq(j).find('.asset-cul-values').css('color','#fa4a26');
            }else{
                $('.asset-cul').eq(i).find('.asset-cul-content').eq(j).find('.asset-cul-value .iconfont').html('&#xe60d;').css('color', '#7cba05');
                $('.chart-title-content .iconfont').html('&#xe60d;').css('color','#7cba05');
                $('.chart-title-content .chart-title-value').css('color','#7cba05');
                $('.asset-cul').eq(i).find('.asset-cul-content').eq(j).find('.asset-cul-values').css('color', '#7cba05');
            }
        }
        
    }
    $('.chart-title-content .chart-title-value').text($('.asset-cul-content.active:first').find('.asset-cul-values').text());
}


$('.chart-title-value').text($('.asset-cul-content.active').find('.asset-cul-values').text());

//点击EURUSD出现菜单
 $(".asset-slide:first").toggle(
    function(){$(".asset-slide-container").css('display','block');},
    function(){$(".asset-slide-container").css('display','none')
  });
//end 点击EURUSD出现菜单
//点击60s出现菜单
 $(".asset-slide:last").toggle(
    function(){$(".asset-slide-container1").css('display','block');},
    function(){$(".asset-slide-container1").css('display','none')
  });
//end 点击60s出现菜单