app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        }
    },
    legend: {
        data: ['2011年', '2012年', '2013年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            // rotate: '45',
            margin: 60,
        },
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)1111111111']
    },
    series: [
        {   
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    // rotate: '45',
                    distance: 10,
                    formatter: '{a}',
                    color: "#000"
                }
            },
            // tooltip: {
            //     formatter: function (a, b, c) {
            //         return '11';
            //     },
            // },
            dimensions: [{type: 'number'}],
            barMinHeight: 1,
            name: '2011年',
            data: [0, 23489, 29034, 104970, 131744, 630230]
        },
        {
            dimensions: [{type: 'number'}],
            barMinHeight: 1,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    // rotate: '45',
                    distance: 10,
                    formatter: '{a}',
                    color: "#000"
                }
            },
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, null]
        },
        {
            dimensions: [{type: 'number'}],
            barMinHeight: 1,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    // rotate: '45',
                    distance: 10,
                    formatter: '{a}',
                    color: "#000"
                }
            },
            name: '2013年',
            type: 'bar',
            data: [
                {
                    name: '12',
                    value: 123122
                },
                19325,
                23438,
                null,
                121594,
                134141,
            ]
        }
    ]
};
