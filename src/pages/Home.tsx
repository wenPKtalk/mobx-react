import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsMore from 'highcharts/highcharts-more';
import Annotations from 'highcharts/modules/annotations';
import Boost from 'highcharts/modules/boost';
import Bullet from 'highcharts/modules/bullet';
import DumbBell from 'highcharts/modules/dumbbell';
import Funnel from 'highcharts/modules/funnel';
import Gantt from 'highcharts/modules/gantt';
import HeatMap from 'highcharts/modules/heatmap';
import Highmaps from 'highcharts/modules/map';
import NetworkGraph from 'highcharts/modules/networkgraph';
import NoData from 'highcharts/modules/no-data-to-display';
import SolidGauge from 'highcharts/modules/solid-gauge';
import TreeMap from 'highcharts/modules/treemap';

HighchartsMore(Highcharts);
NoData(Highcharts);
Annotations(Highcharts);
HeatMap(Highcharts);
TreeMap(Highcharts);
SolidGauge(Highcharts);
Highmaps(Highcharts);
Bullet(Highcharts);
NetworkGraph(Highcharts);
Gantt(Highcharts);
Funnel(Highcharts);
Boost(Highcharts);
DumbBell(Highcharts);
Highcharts3D(Highcharts);

export default function Home() {


    const options =  {
        "plotOptions": {
            "bar": {
                "borderColor": "#ffffff",
                "borderWidth": 0,
                "pointPadding": 0,
                "groupPadding": 0.04,
                "stacking": "normal"
            },
            "series": {
                "dataLabels": {
                    "isShowPercent": false,
                    "allowOverlap": true,
                    "rotation": 0,
                    "isShowValue": false,
                    "style": {
                        "color": "#000000",
                        "fontSize": "9.09090909090909px",
                        "textDecoration": "none",
                        "textOutline": "none",
                        "fontStyle": "normal",
                        "fontWeight": "normal"
                    },
                    "enableShowSeparateValue": false,
                    "inside": true,
                    "enabled": false,
                    "crop": false
                },
                "animation": true,
                "states": {
                    "hover": {
                        "enabled": false
                    },
                    "inactive": {
                        "opacity": 1
                    }
                },
                "point": {
                    "events": {}
                }
            }
        },
        "xAxis": {
            "tickPixelInterval": 100,
            "title": {
                "style": {
                    "fontSize": "9.09090909090909px",
                    "color": "#666666",
                    "textDecoration": "inherit",
                    "opacity": 1,
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "margin": 0,
                "rotation": 0,
                "text": "",
                "align": "middle",
                "enabled": false
            },
            "labels": {
                "style": {
                    "fontSize": "19px",
                    "color": "#7f7f7f",
                    "textDecoration": "inherit",
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "autoRotation": false,
                "enabled": true,
                "y": 5,
                "padding": 0,
                "allowOverlap": true
            },
            "tickWidth": 0,
            "gridLineColor": "#EEE",
            "gridLineWidth": 1,
            "endOnTick": true,
            "lineColor": "#bfbfbf",
            "categories": [
                "Apr 19",
                "Apr 20",
                "Aug 18",
                "Aug 19",
                "Aug 20",
                "Dec 18",
                "Dec 19"
            ],
            "lineWidth": 1
        },
        "legend": {
            "itemStyle": {
                "fontSize": "10.606060606060606px",
                "color": "#3e4e5b",
                "textDecoration": "inherit",
                "opacity": 1,
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "symbolPadding": 5,
            "symbolWidth": 16,
            "itemDistance": 20,
            "margin": 12,
            "layout": "horizontal",
            "verticalAlign": "bottom",
            "floating": true,
            "itemWidth": 0,
            "align": "center",
            "enabled": true
        },
        "tooltip": {
            "style": {
                "fontSize": "9.09090909090909px"
            },
            "shared": false,
            "valueDecimals": 2,
            "useHTML": true,
            "dataLabelFormatter": {
                "absValue": false,
                "prefix": "",
                "label": "",
                "decimal": 2,
                "suffix": "",
                "separator": ",",
                "ratio": "1"
            }
        },
        "title": {
            "align": "center",
            "useHTML": true,
            "x": 0,
            "style": {
                "fontSize": "13.636363636363635px",
                "fontFamily": "MyriadPro-Cond",
                "color": "#3e4e5b",
                "textDecoration": "inherit",
                "opacity": 1,
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "margin": 15,
            "text": ""
        },
        "colors": [
            "rgb(31, 119, 180)",
            "rgb(255, 127, 14)",
            "rgb(44, 160, 44)",
            "rgb(214, 39, 40)",
            "rgb(148, 103, 189)",
            "rgb(140, 86, 75)",
            "rgb(227, 119, 194)",
            "rgb(127, 127, 127)",
            "rgb(188, 189, 34)",
            "rgb(23, 190, 207)"
        ],
        "yAxis": {
            "tickPixelInterval": 72,
            "title": {
                "style": {
                    "fontSize": "9.09090909090909px",
                    "color": "#666666",
                    "textDecoration": "inherit",
                    "opacity": 1,
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "margin": 40,
                "rotation": 0,
                "text": "",
                "enabled": false
            },
            "labels": {
                "style": {
                    "fontSize": "10.606060606060606px",
                    "color": "#7f7f7f",
                    "textDecoration": "inherit",
                    "opacity": 1,
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "padding": 5,
                "enabled": true
            },
            "gridLineColor": "#f2f2f2",
            "endOnTick": true,
            "tickIntervalsCount": 0,
            "stackLabelsEnabled": false,
            "ceilingAndFloorEnabled": false,
            "lineColor": "#bfbfbf",
            "lineWidth": 1,
            "stackLabels": {
                "style": {
                    "color": "#7f7f7f",
                    "fontSize": "10.606060606060606px",
                    "textDecoration": "inherit",
                    "opacity": 1,
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "enabled": false
            },
            "showLastLabel": true,
            "gridLineWidth": 1,
            "specificGridLineToggle": false
        },
        "credits": {
            "enabled": false
        },
        "dataLabelFormatter": {
            "absValue": false,
            "prefix": "",
            "label": "",
            "decimal": 2,
            "suffix": "",
            "separator": ",",
            "ratio": "1"
        },
        "series": [
            {
                "originalName": "Account_Open_Fg",
                "data": [
                    {
                        "originalName": "Apr 19",
                        "color": "",
                        "name": "Apr 19",
                        "y": 17
                    },
                    {
                        "originalName": "Apr 20",
                        "color": "",
                        "name": "Apr 20",
                        "y": 16
                    },
                    {
                        "originalName": "Aug 18",
                        "color": "",
                        "name": "Aug 18",
                        "y": 12
                    },
                    {
                        "originalName": "Aug 19",
                        "color": "",
                        "name": "Aug 19",
                        "y": 16
                    },
                    {
                        "originalName": "Aug 20",
                        "color": "",
                        "name": "Aug 20",
                        "y": 15
                    },
                    {
                        "originalName": "Dec 18",
                        "color": "",
                        "name": "Dec 18",
                        "y": 15
                    },
                    {
                        "originalName": "Dec 19",
                        "color": "",
                        "name": "Dec 19",
                        "y": 17
                    }
                ],
                "dashStyle": "Solid",
                "borderWidth": 0,
                "name": "Account_Open_Fg",
                "dataLabels": {}
            }
        ],
        "subtitle": {
            "align": "center",
            "useHTML": true,
            "x": 0,
            "style": {
                "fontFamily": "MyriadPro-Cond",
                "color": "#3e4e5b",
                "fontSize": "9.09090909090909px",
                "textDecoration": "inherit",
                "opacity": 1,
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "text": ""
        },
        "pane": {
            "innerSize": "20%",
            "startAngle": 0,
            "size": "85%",
            "background": {
                "backgroundColor": "#FFF",
                "borderWidth": 0
            },
            "endAngle": 270
        },
        "chart": {
            "style": {
                "fontSize": "9.09090909090909px",
                "fontFamily": "MyriadPro-Cond"
            },
            "spacingBottom": 11.363636363636363,
            "spacingLeft": 7.575757575757575,
            "spacingTop": 7.575757575757575,
            "polar": true,
            "type": "bar",
            "inverted": true
        },
        "noData": {
            "style": {
                "fontSize": 9.09090909090909
            }
        },
        "lang": {
            "noData": "No Data Available"
        }
    };
    const container = {
        style: {
            width: '100%',
            height: '100%',
        },
    }
    return (<div>
        <div style={{height: 270, width: 300,overflow: "hidden"}}>
            <HighchartsReact
                key="chart"
                options={options}
                containerProps={container}
                highcharts={Highcharts}
                constructorType={"chart"}
                allowChartUpdate={false}
                immutable={true}
            />
        </div>
    </div>)
};