app.title = '水印 - ECharts 下载统计'

var builderJson = {
  "all": 10887,
  "charts": {
    "map": 3237,
    "lines": 2164,
    "bar": 7561,
    "line": 7778,
    "pie": 7355,
    "scatter": 2405,
    "candlestick": 1842,
    "radar": 2090,
    "heatmap": 1762,
    "treemap": 1593,
    "graph": 2060,
    "boxplot": 1537,
    "parallel": 1908,
    "gauge": 2107,
    "funnel": 1692,
    "sankey": 1568
  },
  "components": {
    "geo": 2788,
    "title": 9575,
    "legend": 9400,
    "tooltip": 9466,
    "grid": 9266,
    "markPoint": 3419,
    "markLine": 2984,
    "timeline": 2739,
    "dataZoom": 2744,
    "visualMap": 2466,
    "toolbox": 3034,
    "polar": 1945
  },
  "ie": 9743
};

len1 = Object.keys(builderJson.charts).length;
len2 = Object.keys(builderJson.components).length;

size1=((len1 * 100/(len1+len2)).toFixed(2));
size2=(100-size1);

option = {
    tooltip: {},
    dataZoom: [
        // {
        //     id: 'dataZoomX',
        //     type: 'slider',
        //     xAxisIndex: [0, 1],
        //     filterMode: 'filter',
        // },
        // {
        //     id: 'dataZoomY',
        //     type: 'slider',
        //     yAxisIndex: [0, 1],
        //     filterMode: 'empty'
        // }
    ],
    legend: {
        show: true,
        data: ['sankey', 'funnel']
    },
    grid: [{
        top: '5%',
        bottom: size2 + '%',
        left: '15%',
        containLabel: false,
    }, {
        top: size1+ '%',
        bottom: "5%",
        left: '15%',
        containLabel: false
    }],
    xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: true
        },
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        type: 'category',
        name: 'charts',
        nameLocation: 'center',
        nameGap: 80,
        data: Object.keys(builderJson.charts),
        axisLabel: {
            width: '20%',
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 1,
        type: 'category',
        name: 'components',
        nameLocation: 'center',
        nameGap: 80,
        data: Object.keys(builderJson.components),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        // name: 'charts',
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return {name: key, value: builderJson.charts[key]};
        })
    }, {
        type: 'bar',
        // name: 'components',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return {name: key, value: builderJson.components[key]};
        })
    }]
};

console.log(option);